# Portfolio site

A single-page catalog of your apps, deployed with GitHub Pages. Plain HTML/CSS/JS —
no build step required for the site itself.

## Structure

```
index.html          the page shell
styles.css           design system
projects.js           <- YOUR PROJECT DATA GOES HERE (edit this file)
app.js               renders cards from projects.js, handles filters
assets/               put screenshots / GIFs here
apps/                 (you create this) pre-built web versions of apps live here,
                       one subfolder per app, e.g. apps/woof/index.html
.github/workflows/deploy.yml   auto-deploys on every push to main
```

## One-time setup

1. Create a new repo on GitHub, e.g. `portfolio-site` (or use `your-username.github.io`
   for a root-level URL instead of a project-page URL).
2. Push these files to the `main` branch:
   ```
   git init
   git add .
   git commit -m "Initial portfolio scaffold"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio-site.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source**,
   select **GitHub Actions**. The included workflow will pick it up from there.
4. After the first push, check the **Actions** tab — the "Deploy portfolio to
   GitHub Pages" run will build and publish the site. Your URL will be:
   - `https://YOUR-USERNAME.github.io/portfolio-site/` (project repo), or
   - `https://YOUR-USERNAME.github.io/` (if the repo is named `YOUR-USERNAME.github.io`)

## Adding your real projects

Open `projects.js` and replace the three placeholder entries with your actual
apps. Each one needs:

- `title`, `description`, `tags`
- `thumb` — a screenshot or short GIF path under `assets/` (16:10 works best)
- `kind` — `"live"` if you can build a browser-usable version, `"download"` if not
- `liveUrl` / `downloadUrl` / `sourceUrl` as applicable

## Getting an Electron app's UI running as a live demo

Electron apps bundle Chromium + Node so the compiled app itself can't run in a
browser. But if the app's actual interface is a normal web frontend (React,
Vue, plain JS) wrapped by Electron for desktop distribution, you can usually
build just that frontend as a static site:

1. In the app's repo, find the renderer's build command (often
   `npm run build` on the renderer package, separate from `electron-builder`).
2. Run it — it should output static HTML/CSS/JS.
3. Stub out or disable anything that calls Node/Electron-only APIs
   (`fs`, `ipcRenderer`, native dialogs, etc.) behind a `if (window.require)`
   check or a mock, so the page doesn't crash in a plain browser.
4. Drop the build output into `apps/<app-name>/` in this repo (or build it
   automatically via the commented-out step in `deploy.yml`).
5. Set that project's `liveUrl` in `projects.js` to
   `https://YOUR-USERNAME.github.io/portfolio-site/apps/<app-name>/`.

For apps where this isn't practical, use `kind: "download"` and point
`downloadUrl` at a GitHub Release. To create one: tag a release in the app's
own repo, attach the built installer (`.dmg` / `.exe` / `.AppImage`), and link
to `https://github.com/YOUR-USERNAME/<app-repo>/releases/latest`.

## Screenshots and GIFs

Drop images into `assets/` and reference them from `thumb` in `projects.js`.
For a quick screen recording → GIF, `ffmpeg` works well:

```
ffmpeg -i recording.mov -vf "fps=12,scale=800:-1:flags=lanczos" -loop 0 assets/app-demo.gif
```

Keep GIFs under a few MB so the page stays fast — trim to 5–10 seconds of the
core interaction rather than a full walkthrough.
