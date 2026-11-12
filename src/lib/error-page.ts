export function renderErrorPage(): string {
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
