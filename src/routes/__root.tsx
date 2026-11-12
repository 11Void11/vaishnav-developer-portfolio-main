import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useCallback, useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";

function SystemPageBackground() {
  return <div className="rd-system-page-grid" aria-hidden="true" />;
}

function NotFoundComponent() {
  return (
    <main className="rd-system-page rd-not-found-page">
      <SystemPageBackground />
      <section className="rd-system-page-content">
        <img
          src="/assets/errors/404-robot.svg"
          alt="Robot holding a question-mark document"
          className="rd-system-page-robot"
          loading="eager"
          decoding="async"
        />
        <div className="rd-system-page-copy">
          <span className="rd-system-page-label">ERROR 404</span>
          <h1>Page not found</h1>
          <p>The page you're looking for doesn't exist or may have been moved.</p>
          <Link to="/" className="rd-btn rd-btn-red">
            Go home
          </Link>
        </div>
      </section>
    </main>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <main className="rd-system-page rd-app-error-page">
      <SystemPageBackground />
      <section className="rd-system-page-content">
        <img
          src="/assets/errors/error-warning-robot.svg"
          alt="Robot holding a warning symbol"
          className="rd-system-page-robot"
          loading="eager"
          decoding="async"
        />
        <div className="rd-system-page-copy">
          <span className="rd-system-page-label">SYSTEM ERROR</span>
          <h1>Something went wrong</h1>
          <p>
            An unexpected error occurred while loading this page.
            Please try again or return to the homepage.
          </p>
          <div className="rd-system-page-actions">
            <button
              type="button"
              onClick={() => {
                router.invalidate();
                reset();
              }}
              className="rd-btn rd-btn-red"
            >
              Try again
            </button>
            <Link to="/" className="rd-btn rd-btn-dark">
              Go home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/**
 * Detects browser-offline state immediately and verifies that this site's own
 * origin is reachable. Checks run on mount, connectivity changes, tab focus,
 * and every 30 seconds while the tab is visible.
 */
function NetworkStatusBoundary({ children }: { children: ReactNode }) {
  const [unavailable, setUnavailable] = useState(false);
  const [checking, setChecking] = useState(false);

  const verifyConnection = useCallback(async () => {
    if (!navigator.onLine) {
      setUnavailable(true);
      setChecking(false);
      return;
    }

    setChecking(true);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 5000);

    try {
      const response = await fetch(`/favicon.svg?network-check=${Date.now()}`, {
        method: "GET",
        cache: "no-store",
        credentials: "same-origin",
        signal: controller.signal,
      });
      if (!response.ok) {
        throw new Error(`Origin health check failed: ${response.status}`);
      }
      await response.body?.cancel();
      setUnavailable(false);
    } catch {
      setUnavailable(true);
    } finally {
      window.clearTimeout(timeoutId);
      setChecking(false);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    let currentController: AbortController | undefined;
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
      const timeoutId = window.setTimeout(() => controller.abort(), 5000);

      setChecking(true);
      try {
        const response = await fetch(`/favicon.svg?network-check=${Date.now()}`, {
          method: "GET",
          cache: "no-store",
          credentials: "same-origin",
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Origin health check failed: ${response.status}`);
        }
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
      if (document.visibilityState === "visible") void check();
    };
    const intervalId = window.setInterval(() => {
      if (document.visibilityState === "visible") void check();
    }, 30000);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    window.addEventListener("focus", handleFocus);
    void check();

    return () => {
      mounted = false;
      currentController?.abort();
      window.clearInterval(intervalId);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <>
      {children}
      {unavailable && (
        <main className="rd-system-page rd-network-error-page" role="alert">
          <SystemPageBackground />
          <section className="rd-system-page-content">
            <img
              src="/assets/errors/network-reconnecting-robot.svg"
              alt="Robot showing a network reconnection symbol"
              className="rd-system-page-robot"
              loading="eager"
              decoding="async"
            />
            <div className="rd-system-page-copy">
              <span className="rd-system-page-label">CONNECTION LOST</span>
              <h1>Trying to reconnect</h1>
              <p>
                We couldn't reach the portfolio right now. Check your internet
                connection and try again.
              </p>
              <button
                type="button"
                className="rd-btn rd-btn-red"
                onClick={() => void verifyConnection()}
                disabled={checking}
              >
                {checking ? "Checking connection..." : "Retry connection"}
              </button>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#091a23" },
      { title: "Vaishnav K | Software Engineering Portfolio" },
      { name: "description", content: "Software engineering, AI/ML, backend systems, and data science portfolio of Vaishnav K." },
      { name: "author", content: "Vaishnav K" },
      { property: "og:title", content: "Vaishnav K | Software Engineering Portfolio" },
      { property: "og:description", content: "Software engineering, AI/ML, backend systems, and data science portfolio of Vaishnav K." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-rd-bg">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <NetworkStatusBoundary>
        <Outlet />
      </NetworkStatusBoundary>
    </QueryClientProvider>
  );
}
