import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B3RmL5NZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D8LSOWbt.css";
function SystemPageBackground() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rd-system-page-grid",
		"aria-hidden": "true"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "rd-system-page rd-not-found-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemPageBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rd-system-page-content",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/assets/errors/404-robot.svg",
				alt: "Robot holding a question-mark document",
				className: "rd-system-page-robot",
				loading: "eager",
				decoding: "async"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rd-system-page-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rd-system-page-label",
						children: "ERROR 404"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Page not found" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The page you're looking for doesn't exist or may have been moved." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "rd-btn rd-btn-red",
						children: "Go home"
					})
				]
			})]
		})]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "rd-system-page rd-app-error-page",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemPageBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rd-system-page-content",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/assets/errors/error-warning-robot.svg",
				alt: "Robot holding a warning symbol",
				className: "rd-system-page-robot",
				loading: "eager",
				decoding: "async"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rd-system-page-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rd-system-page-label",
						children: "SYSTEM ERROR"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Something went wrong" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "An unexpected error occurred while loading this page. Please try again or return to the homepage." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rd-system-page-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								router.invalidate();
								reset();
							},
							className: "rd-btn rd-btn-red",
							children: "Try again"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "rd-btn rd-btn-dark",
							children: "Go home"
						})]
					})
				]
			})]
		})]
	});
}
/**
* Detects browser-offline state immediately and verifies that this site's own
* origin is reachable. Checks run on mount, connectivity changes, tab focus,
* and every 30 seconds while the tab is visible.
*/
function NetworkStatusBoundary({ children }) {
	const [unavailable, setUnavailable] = (0, import_react.useState)(false);
	const [checking, setChecking] = (0, import_react.useState)(false);
	const verifyConnection = (0, import_react.useCallback)(async () => {
		if (!navigator.onLine) {
			setUnavailable(true);
			setChecking(false);
			return;
		}
		setChecking(true);
		const controller = new AbortController();
		const timeoutId = window.setTimeout(() => controller.abort(), 5e3);
		try {
			const response = await fetch(`/favicon.svg?network-check=${Date.now()}`, {
				method: "GET",
				cache: "no-store",
				credentials: "same-origin",
				signal: controller.signal
			});
			if (!response.ok) throw new Error(`Origin health check failed: ${response.status}`);
			await response.body?.cancel();
			setUnavailable(false);
		} catch {
			setUnavailable(true);
		} finally {
			window.clearTimeout(timeoutId);
			setChecking(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		let currentController;
		let checkingNow = false;
		const check = async () => {
			if (!mounted || checkingNow) return;
			if (!navigator.onLine) {
				setUnavailable(true);
				return;
			}
			checkingNow = true;
			currentController?.abort();
			currentController = new AbortController();
			const controller = currentController;
			const timeoutId = window.setTimeout(() => controller.abort(), 5e3);
			setChecking(true);
			try {
				const response = await fetch(`/favicon.svg?network-check=${Date.now()}`, {
					method: "GET",
					cache: "no-store",
					credentials: "same-origin",
					signal: controller.signal
				});
				if (!response.ok) throw new Error(`Origin health check failed: ${response.status}`);
				await response.body?.cancel();
				if (mounted) setUnavailable(false);
			} catch {
				if (mounted) setUnavailable(true);
			} finally {
				window.clearTimeout(timeoutId);
				checkingNow = false;
				if (mounted) setChecking(false);
			}
		};
		const handleOffline = () => setUnavailable(true);
		const handleOnline = () => void check();
		const handleFocus = () => {
			if (document.visibilityState === "visible") check();
		};
		const intervalId = window.setInterval(() => {
			if (document.visibilityState === "visible") check();
		}, 3e4);
		window.addEventListener("offline", handleOffline);
		window.addEventListener("online", handleOnline);
		window.addEventListener("focus", handleFocus);
		check();
		return () => {
			mounted = false;
			currentController?.abort();
			window.clearInterval(intervalId);
			window.removeEventListener("offline", handleOffline);
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("focus", handleFocus);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [children, unavailable && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "rd-system-page rd-network-error-page",
		role: "alert",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemPageBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rd-system-page-content",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/assets/errors/network-reconnecting-robot.svg",
				alt: "Robot showing a network reconnection symbol",
				className: "rd-system-page-robot",
				loading: "eager",
				decoding: "async"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rd-system-page-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rd-system-page-label",
						children: "CONNECTION LOST"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Trying to reconnect" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We couldn't reach the portfolio right now. Check your internet connection and try again." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "rd-btn rd-btn-red",
						onClick: () => void verifyConnection(),
						disabled: checking,
						children: checking ? "Checking connection..." : "Retry connection"
					})
				]
			})]
		})]
	})] });
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "theme-color",
				content: "#091a23"
			},
			{ title: "Vaishnav K | Software Engineering Portfolio" },
			{
				name: "description",
				content: "Software engineering, AI/ML, backend systems, and data science portfolio of Vaishnav K."
			},
			{
				name: "author",
				content: "Vaishnav K"
			},
			{
				property: "og:title",
				content: "Vaishnav K | Software Engineering Portfolio"
			},
			{
				property: "og:description",
				content: "Software engineering, AI/ML, backend systems, and data science portfolio of Vaishnav K."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.svg",
			type: "image/svg+xml"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "bg-rd-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkStatusBoundary, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter = () => import("./routes-BLitruSK.mjs");
/**
* Each project becomes a "problem" tab, like the "What's your problem?" panel on redis.io.
* Keys must match `title` in portfolio.projects. Unknown titles fall back to the title itself.
*/
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Vaishnav K | Software Engineer & AI/ML Developer" },
		{
			name: "description",
			content: "Portfolio of Vaishnav K — software engineering, backend systems, AI/ML, and data science projects."
		},
		{
			property: "og:title",
			content: "Vaishnav K | Software Engineer & AI/ML Developer"
		},
		{
			property: "og:description",
			content: "Building intelligent software and exploring systems, backend engineering, and machine learning."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
