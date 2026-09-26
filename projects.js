/*
  Edit this array to add your projects. One object per app.

  Fields:
    title       — project name
    description — one or two sentences, plain language
    tags        — array of short tech/stack labels, e.g. ["Electron", "React"]
    images      — screenshots/GIFs in assets/, e.g. ["assets/woof-1.png", "assets/woof-2.png"]
                  (one image fills the panel; several become a swipeable strip;
                  leave [] for a black title panel)
    kind        — "live" (has a working web build) or "download" (native app only)
    liveUrl     — URL to the deployed web build (only used if kind is "live")
    downloadUrl — where to get it (only used if kind is "download")
    sourceUrl   — link to the repo (shown if present)
*/

const PROJECTS = [
  {
    title: "Blinders — YouTube",
    description: "YouTube, minus the rabbit hole. A Chrome extension that predicts which videos are unproductive and gets them out of your way: blurred thumbnails, a hard block on the watch page, no Shorts, and a session clock that keeps you honest. Runs entirely on-device.",
    tags: ["Chrome extension", "JavaScript", "Manifest V3"],
    images: ["assets/blinders-1.jpg", "assets/blinders-2.jpg", "assets/blinders-3.jpg"],
    kind: "download",
    downloadUrl: "https://github.com/MayorMilo/blinders"
  },
  {
    title: "Paperclips",
    description: "A physical habit tracker for your desktop. Two jars and a handful of paperclips: drag a clip across each time you do the thing, and watch the jar go empty. No accounts, no ads, completely local.",
    tags: ["Electron", "React", "Matter.js"],
    images: ["assets/paperclips-1.png", "assets/paperclips-2.png", "assets/paperclips-3.png"],
    kind: "download",
    downloadUrl: "https://github.com/MayorMilo/Paperclip"
  }
];
