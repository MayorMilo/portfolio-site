/*
  Edit this array to add your projects. One object per app.

  Fields:
    title       — project name
    description — one or two sentences, plain language
    tags        — array of short tech/stack labels, e.g. ["Electron", "React"]
    thumb       — path to a screenshot/GIF in assets/, e.g. "assets/woof-thumb.png"
                  (shown as a square, cropped to fill; leave "" for a black title panel)
    kind        — "live" (has a working web build) or "download" (native app only)
    liveUrl     — URL to the deployed web build (only used if kind is "live")
    downloadUrl — URL to a GitHub Release asset (only used if kind is "download")
    sourceUrl   — link to the repo (always shown if present)
*/

const PROJECTS = [
  {
    title: "Project Name",
    description: "One or two plain-language sentences on what this app does and who it's for.",
    tags: ["Electron", "React", "SQLite"],
    thumb: "",
    kind: "live",
    liveUrl: "https://your-username.github.io/portfolio-site/apps/project-name/",
    sourceUrl: "https://github.com/your-username/project-name"
  },
  {
    title: "Another Project",
    description: "This one relies on native filesystem access, so it ships as a downloadable desktop build instead of a browser demo.",
    tags: ["Electron", "Node.js"],
    thumb: "",
    kind: "download",
    downloadUrl: "https://github.com/your-username/another-project/releases/latest",
    sourceUrl: "https://github.com/your-username/another-project"
  },
  {
    title: "Third Project",
    description: "Replace these three entries with your real projects — copy this block for each new one.",
    tags: ["TypeScript"],
    thumb: "",
    kind: "live",
    liveUrl: "https://your-username.github.io/portfolio-site/apps/third-project/",
    sourceUrl: "https://github.com/your-username/third-project"
  }
];
