//#region node_modules/.nitro/vite/services/ssr/index.js
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
var CAUSE_DEPTH_LIMIT = 5;
var DESCRIPTION_LENGTH_LIMIT = 8e3;
function describeError(error) {
	const parts = [];
	let current = error;
	for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
		if (!(current instanceof Error)) {
			parts.push(typeof current === "string" ? current : safeStringify(current));
			break;
		}
		const label = depth === 0 ? "" : "caused by: ";
		const status = describeStatus(current);
		parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}${status}`);
		current = current.cause;
	}
	return parts.join("\n").slice(0, DESCRIPTION_LENGTH_LIMIT);
}
function describeStatus(error) {
	const { status, statusCode } = error;
	const value = status ?? statusCode;
	return typeof value === "number" ? ` (status ${value})` : "";
}
function safeStringify(value) {
	try {
		return JSON.stringify(value) ?? String(value);
	} catch {
		return String(value);
	}
}
function isErrorLike(value) {
	return value instanceof Error;
}
var originalConsoleError = console.error.bind(console);
console.error = (...args) => {
	originalConsoleError(...args.map((arg) => {
		if (!isErrorLike(arg)) return arg;
		record(arg);
		return describeError(arg);
	}));
};
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#06131a" />
    <title>Something went wrong | Vaishnav K</title>
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0; min-height: 100svh; padding: 32px 20px;
        display: grid; place-items: center; overflow: hidden;
        color: #fff; text-align: center;
        font: 400 16px/1.7 system-ui, sans-serif;
        background: radial-gradient(ellipse at 50% 42%, rgba(20,55,70,.48), transparent 48%), #06131a;
      }
      main { width: min(100%, 540px); display: flex; flex-direction: column; align-items: center; gap: 26px; }
      img { display: block; width: min(280px, 68vw); max-height: 42svh; object-fit: contain; }
      .label { color: #ff4438; font: 700 12px/1.4 monospace; letter-spacing: .16em; }
      h1 { margin: 0; font-size: clamp(30px, 5vw, 46px); line-height: 1.12; font-weight: 600; }
      p { max-width: 400px; margin: 0 0 8px; color: #a8b5bb; }
      .actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
      a, button { padding: 11px 20px; border: 1px solid transparent; border-radius: 6px; font: inherit; font-weight: 600; cursor: pointer; text-decoration: none; }
      .primary { color: #fff; background: #ff4438; }
      .secondary { color: #fff; background: #163341; border-color: #1d3a49; }
    </style>
  </head>
  <body>
    <main>
      <img src="/assets/errors/error-warning-robot.svg" alt="Robot holding a warning symbol" />
      <span class="label">SYSTEM ERROR</span>
      <h1>Something went wrong</h1>
      <p>An unexpected error occurred while loading this page. Please try again or return to the homepage.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </main>
  </body>
</html>`;
}
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-CeM82MbU.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, renderErrorPage as t };
