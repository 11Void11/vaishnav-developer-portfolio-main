globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/beau roi-BQnet1qY.svg": {
		"type": "image/svg+xml",
		"etag": "\"c8f3-yPhawuI+6cZvYOGUnmQN3sOGiHc\"",
		"mtime": "2026-11-12T19:21:07.559Z",
		"size": 51443,
		"path": "../public/assets/beau roi-BQnet1qY.svg"
	},
	"/assets/drivenet-workflow-neatly-arranged-BVjLuqUh.svg": {
		"type": "image/svg+xml",
		"etag": "\"9ffd-zHkkagCcfuWzfyIFaBSjMKJ8piQ\"",
		"mtime": "2026-11-12T19:21:07.559Z",
		"size": 40957,
		"path": "../public/assets/drivenet-workflow-neatly-arranged-BVjLuqUh.svg"
	},
	"/assets/index-CqShgtDf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5367f-TlHkYG96EaCw9obGX1E/eGfdC40\"",
		"mtime": "2026-11-12T19:21:07.552Z",
		"size": 341631,
		"path": "../public/assets/index-CqShgtDf.js"
	},
	"/assets/industrial-fault-diagnosis-rag-p6xbyh1G.svg": {
		"type": "image/svg+xml",
		"etag": "\"15b1-ya4rtoia0UMpjAHCRJa1BHVEgDY\"",
		"mtime": "2026-11-12T19:21:07.561Z",
		"size": 5553,
		"path": "../public/assets/industrial-fault-diagnosis-rag-p6xbyh1G.svg"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"5ad-Ixlu89UR7bq0Ni00txMX2Jf3uLo\"",
		"mtime": "2026-11-12T17:06:28.328Z",
		"size": 1453,
		"path": "../public/favicon.svg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-11-12T14:00:20.000Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/lobster-cyrillic-400-normal-DeMp0mA3.woff2": {
		"type": "font/woff2",
		"etag": "\"9be0-UIEjiXhmtV4AGLfy3RIMjCD/zIA\"",
		"mtime": "2026-11-12T19:21:07.562Z",
		"size": 39904,
		"path": "../public/assets/lobster-cyrillic-400-normal-DeMp0mA3.woff2"
	},
	"/assets/lobster-cyrillic-ext-400-normal-CAda7jDo.woff2": {
		"type": "font/woff2",
		"etag": "\"3844-IAXs2NU+gbUNGAeIP+VSFCGlL3c\"",
		"mtime": "2026-11-12T19:21:07.563Z",
		"size": 14404,
		"path": "../public/assets/lobster-cyrillic-ext-400-normal-CAda7jDo.woff2"
	},
	"/assets/lobster-cyrillic-ext-400-normal-CTC7nHHC.woff": {
		"type": "font/woff",
		"etag": "\"2578-5DjefpIQPDjgtHucManHgjGt+p4\"",
		"mtime": "2026-11-12T19:21:07.564Z",
		"size": 9592,
		"path": "../public/assets/lobster-cyrillic-ext-400-normal-CTC7nHHC.woff"
	},
	"/assets/lobster-latin-400-normal-Cc8ENR_t.woff": {
		"type": "font/woff",
		"etag": "\"5560-KYSnXuBwUjyzMZj1CZUntvqsKqE\"",
		"mtime": "2026-11-12T19:21:07.565Z",
		"size": 21856,
		"path": "../public/assets/lobster-latin-400-normal-Cc8ENR_t.woff"
	},
	"/assets/lobster-latin-400-normal-VmWungf4.woff2": {
		"type": "font/woff2",
		"etag": "\"8434-rUijOyY24Z98cm9Mn+o0aY6H0sU\"",
		"mtime": "2026-11-12T19:21:07.566Z",
		"size": 33844,
		"path": "../public/assets/lobster-latin-400-normal-VmWungf4.woff2"
	},
	"/assets/lobster-latin-ext-400-normal-CBN1Kyd4.woff2": {
		"type": "font/woff2",
		"etag": "\"6d08-jIx4kYJyy80G/ABZqIxiOOuWqzg\"",
		"mtime": "2026-11-12T19:21:07.566Z",
		"size": 27912,
		"path": "../public/assets/lobster-latin-ext-400-normal-CBN1Kyd4.woff2"
	},
	"/assets/lobster-latin-ext-400-normal-DjkE4ffB.woff": {
		"type": "font/woff",
		"etag": "\"4348-GvumR2YFT9dCGIQqFZkVYPs2QF0\"",
		"mtime": "2026-11-12T19:21:07.567Z",
		"size": 17224,
		"path": "../public/assets/lobster-latin-ext-400-normal-DjkE4ffB.woff"
	},
	"/assets/lobster-vietnamese-400-normal-CQxa60ei.woff": {
		"type": "font/woff",
		"etag": "\"1ab0-GiGa6lmPjgQHp4olH4LngL+ter8\"",
		"mtime": "2026-11-12T19:21:07.634Z",
		"size": 6832,
		"path": "../public/assets/lobster-vietnamese-400-normal-CQxa60ei.woff"
	},
	"/assets/lobster-vietnamese-400-normal-t7FFQ-Nt.woff2": {
		"type": "font/woff2",
		"etag": "\"3640-lBn0/ycjHUoCY9ZV3UB+s92FYE8\"",
		"mtime": "2026-11-12T19:21:07.634Z",
		"size": 13888,
		"path": "../public/assets/lobster-vietnamese-400-normal-t7FFQ-Nt.woff2"
	},
	"/assets/redis-kv-store-minimal-CpMENXYe.svg": {
		"type": "image/svg+xml",
		"etag": "\"1150-jIxX6YddtJANE//QQ2LMEP/ETjQ\"",
		"mtime": "2026-11-12T19:21:07.637Z",
		"size": 4432,
		"path": "../public/assets/redis-kv-store-minimal-CpMENXYe.svg"
	},
	"/assets/routes-DKvYgY_k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"31e75-j0Ga1E2E0zWgp8WIGbNiwnngEis\"",
		"mtime": "2026-11-12T19:21:07.553Z",
		"size": 204405,
		"path": "../public/assets/routes-DKvYgY_k.js"
	},
	"/assets/robot-loader-logo-DdO2Q5-d.svg": {
		"type": "image/svg+xml",
		"etag": "\"5b95-J/KbqwKd5fuzdkVSdiJ30TyF0YE\"",
		"mtime": "2026-11-12T19:21:07.638Z",
		"size": 23445,
		"path": "../public/assets/robot-loader-logo-DdO2Q5-d.svg"
	},
	"/assets/space-grotesk-latin-ext-wght-normal-D9tNdqV9.woff2": {
		"type": "font/woff2",
		"etag": "\"49fc-F0LVbRNUJhx55ziZ6erFdGulAH0\"",
		"mtime": "2026-11-12T19:21:07.640Z",
		"size": 18940,
		"path": "../public/assets/space-grotesk-latin-ext-wght-normal-D9tNdqV9.woff2"
	},
	"/assets/space-grotesk-latin-wght-normal-BhU9QXUp.woff2": {
		"type": "font/woff2",
		"etag": "\"5710-wHgeovKQE4JtweuNtA9NQA2d9xA\"",
		"mtime": "2026-11-12T19:21:07.641Z",
		"size": 22288,
		"path": "../public/assets/space-grotesk-latin-wght-normal-BhU9QXUp.woff2"
	},
	"/assets/space-grotesk-vietnamese-wght-normal-D0rl6rjA.woff2": {
		"type": "font/woff2",
		"etag": "\"1a38-xA/sTKWi+gmM69jUei5Rxd5DXqY\"",
		"mtime": "2026-11-12T19:21:07.729Z",
		"size": 6712,
		"path": "../public/assets/space-grotesk-vietnamese-wght-normal-D0rl6rjA.woff2"
	},
	"/assets/lobster-cyrillic-400-normal-C0k4M1Yq.woff": {
		"type": "font/woff",
		"etag": "\"59b4-iVsAc7aCfg1wP7Ia+zoS8Xngrw4\"",
		"mtime": "2026-11-12T19:21:07.562Z",
		"size": 22964,
		"path": "../public/assets/lobster-cyrillic-400-normal-C0k4M1Yq.woff"
	},
	"/assets/space-mono-latin-400-normal-Rg4St2Dn.woff2": {
		"type": "font/woff2",
		"etag": "\"4088-4u4tNw8NRspaETEm2jtY4WJA/ew\"",
		"mtime": "2026-11-12T19:21:07.730Z",
		"size": 16520,
		"path": "../public/assets/space-mono-latin-400-normal-Rg4St2Dn.woff2"
	},
	"/assets/space-mono-latin-700-normal-D7A851RN.woff": {
		"type": "font/woff",
		"etag": "\"3080-M0JDsNFJm6inBkfsGNsPFFyR7M4\"",
		"mtime": "2026-11-12T19:21:07.732Z",
		"size": 12416,
		"path": "../public/assets/space-mono-latin-700-normal-D7A851RN.woff"
	},
	"/assets/space-mono-latin-400-normal-_3DlpgIW.woff": {
		"type": "font/woff",
		"etag": "\"3018-Pjdtr5DlYIsX5The9vhZ9De/BZo\"",
		"mtime": "2026-11-12T19:21:07.731Z",
		"size": 12312,
		"path": "../public/assets/space-mono-latin-400-normal-_3DlpgIW.woff"
	},
	"/assets/solar energy-eUkxEY-K.png": {
		"type": "image/png",
		"etag": "\"1c1af8-13ujeNR2LFUP5/RP5+emfpAdbm8\"",
		"mtime": "2026-11-12T19:21:07.639Z",
		"size": 1841912,
		"path": "../public/assets/solar energy-eUkxEY-K.png"
	},
	"/assets/space-mono-latin-700-normal-mWgeinG7.woff2": {
		"type": "font/woff2",
		"etag": "\"4154-0MUEvY+JbTmIPg3fyBxRGvUmZWs\"",
		"mtime": "2026-11-12T19:21:07.732Z",
		"size": 16724,
		"path": "../public/assets/space-mono-latin-700-normal-mWgeinG7.woff2"
	},
	"/assets/space-mono-latin-ext-400-normal-D4cJI_B-.woff": {
		"type": "font/woff",
		"etag": "\"3140-ZAroVtzR6Eg1LpiSxFT3MuinZjc\"",
		"mtime": "2026-11-12T19:21:07.733Z",
		"size": 12608,
		"path": "../public/assets/space-mono-latin-ext-400-normal-D4cJI_B-.woff"
	},
	"/assets/space-mono-latin-ext-700-normal-B2s3bDs2.woff2": {
		"type": "font/woff2",
		"etag": "\"3dc0-ZGtvJ5L0n8Qxn1C5Mhcu4OUC7P8\"",
		"mtime": "2026-11-12T19:21:07.735Z",
		"size": 15808,
		"path": "../public/assets/space-mono-latin-ext-700-normal-B2s3bDs2.woff2"
	},
	"/assets/space-mono-latin-ext-400-normal-DTLbW2xa.woff2": {
		"type": "font/woff2",
		"etag": "\"3dd8-aMa4UW17fJ06povVBkGdLGVuOnE\"",
		"mtime": "2026-11-12T19:21:07.734Z",
		"size": 15832,
		"path": "../public/assets/space-mono-latin-ext-400-normal-DTLbW2xa.woff2"
	},
	"/assets/space-mono-vietnamese-400-normal-B0PMp_xB.woff": {
		"type": "font/woff",
		"etag": "\"1524-NVWDbmmSbpeljvKkyPwy585pw7E\"",
		"mtime": "2026-11-12T19:21:07.835Z",
		"size": 5412,
		"path": "../public/assets/space-mono-vietnamese-400-normal-B0PMp_xB.woff"
	},
	"/assets/space-mono-latin-ext-700-normal-B_E7P90g.woff": {
		"type": "font/woff",
		"etag": "\"30c4-8fVaY8cYi2wX1xYujrowY51EGic\"",
		"mtime": "2026-11-12T19:21:07.834Z",
		"size": 12484,
		"path": "../public/assets/space-mono-latin-ext-700-normal-B_E7P90g.woff"
	},
	"/assets/space-mono-vietnamese-400-normal-BNOj0Qhp.woff2": {
		"type": "font/woff2",
		"etag": "\"1c68-9wBSzVtt2q9AyQMvisptrUy54yM\"",
		"mtime": "2026-11-12T19:21:07.835Z",
		"size": 7272,
		"path": "../public/assets/space-mono-vietnamese-400-normal-BNOj0Qhp.woff2"
	},
	"/assets/space-mono-vietnamese-700-normal-D-KrLuLr.woff": {
		"type": "font/woff",
		"etag": "\"1548-iQcYCuHNTSA7wdHvnB764sth3Z4\"",
		"mtime": "2026-11-12T19:21:07.836Z",
		"size": 5448,
		"path": "../public/assets/space-mono-vietnamese-700-normal-D-KrLuLr.woff"
	},
	"/assets/space-mono-vietnamese-700-normal-DWQgDHuA.woff2": {
		"type": "font/woff2",
		"etag": "\"1ca4-4urjKNLnu5VL4iqeBvwaQ+XDFXQ\"",
		"mtime": "2026-11-12T19:21:07.837Z",
		"size": 7332,
		"path": "../public/assets/space-mono-vietnamese-700-normal-DWQgDHuA.woff2"
	},
	"/assets/styles-D8LSOWbt.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18cff-4BHwOtNwYy9r4/CIse+HThJbFVI\"",
		"mtime": "2026-11-12T19:21:07.838Z",
		"size": 101631,
		"path": "../public/assets/styles-D8LSOWbt.css"
	},
	"/assets/errors/error-warning-robot.svg": {
		"type": "image/svg+xml",
		"etag": "\"5853-LBXOlOiIUaC/NP9IX6za1tf3Sos\"",
		"mtime": "2026-11-12T16:45:03.000Z",
		"size": 22611,
		"path": "../public/assets/errors/error-warning-robot.svg"
	},
	"/assets/errors/404-robot.svg": {
		"type": "image/svg+xml",
		"etag": "\"55ec-hG5d5Gg1ha+pfvFYCFu1YJl1k1c\"",
		"mtime": "2026-11-12T16:45:03.000Z",
		"size": 21996,
		"path": "../public/assets/errors/404-robot.svg"
	},
	"/assets/DIY Robotic Car Platform with Colorful Wiring-BVaq-0QF.png": {
		"type": "image/png",
		"etag": "\"25e35e-Vtz8oYZeYav0bUUui0Tf5iqVWeo\"",
		"mtime": "2026-11-12T19:21:07.558Z",
		"size": 2483038,
		"path": "../public/assets/DIY Robotic Car Platform with Colorful Wiring-BVaq-0QF.png"
	},
	"/assets/errors/network-reconnecting-robot.svg": {
		"type": "image/svg+xml",
		"etag": "\"52e5-lhGBrRV5EvMQuyPoCvi6orZBO6I\"",
		"mtime": "2026-11-12T16:45:03.000Z",
		"size": 21221,
		"path": "../public/assets/errors/network-reconnecting-robot.svg"
	},
	"/assets/resume/Vaishnav_K_Resume.pdf": {
		"type": "application/pdf",
		"etag": "\"1c957-b5GADkmEHX/Gw78jR7ZoAF+I4BQ\"",
		"mtime": "2026-11-12T14:00:20.000Z",
		"size": 117079,
		"path": "../public/assets/resume/Vaishnav_K_Resume.pdf"
	},
	"/assets/microgrid-rag-workflow-high-resolution-DYZs4d83.svg": {
		"type": "image/svg+xml",
		"etag": "\"207984-uPDl9C68Yt1D0zqdsP220q+vcKw\"",
		"mtime": "2026-11-12T19:21:07.636Z",
		"size": 2128260,
		"path": "../public/assets/microgrid-rag-workflow-high-resolution-DYZs4d83.svg"
	},
	"/assets/vaishnav-portrait-B3krUdlO.png": {
		"type": "image/png",
		"etag": "\"202974-C/vmpAvJKHgE+t8qFFwfx2hT+9g\"",
		"mtime": "2026-11-12T19:21:07.839Z",
		"size": 2107764,
		"path": "../public/assets/vaishnav-portrait-B3krUdlO.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_ZtqjW4 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_ZtqjW4
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
