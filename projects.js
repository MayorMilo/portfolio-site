/*
  Edit this array to add your projects. One object per app.

  Fields:
    title       — project name
    description — one or two sentences, plain language
    tags        — array of short tech/stack labels, e.g. ["Electron", "React"]
    images      — screenshots/GIFs in assets/, e.g. ["assets/woof-1.png", "assets/woof-2.png"]
                  (one image fills the panel; several become a swipeable strip;
                  leave [] for a black title panel)
    kind        — "live" (has a working web build), "download" (native app only),
                  or "concept" (screens only, no links yet)
    liveUrl     — URL to the deployed web build (only used if kind is "live")
    downloadUrl — where to get it (only used if kind is "download")
    sourceUrl   — link to the repo (shown if present)
*/

const PROJECTS = [
  {
    title: "Habitat",
    description: "Symbiotic personal growth and peer accountability. A social app where you and your friends each grow a tree in shared forests. Track screen time, fitness, and other habits.",
    tags: ["iOS", "Social", "UI design"],
    images: ["assets/habitat-1.png", "assets/habitat-2.webp", "assets/habitat-3.webp"],
    imageLabels: ["welcome screen", "friends and forests", "forest view with Top Growers"],
    kind: "concept"
  },
  {
    title: "Paperclips",
    description: "Bring tabletop habit tracking to your desktop. Just drag and drop.",
    tags: ["Electron", "React", "Matter.js"],
    images: ["assets/paperclips-1.png", "assets/paperclips-2.png", "assets/paperclips-3.png"],
    kind: "download",
    downloadUrl: "https://github.com/MayorMilo/Paperclip"
  },
  {
    title: "Blinders — YouTube",
    description: "YouTube, minus the rabbit hole. A Chrome extension that predicts which videos are unproductive and gets them out of your way. Infinitely customizable. Runs entirely on-device.",
    tags: ["Chrome extension", "JavaScript", "Manifest V3"],
    images: ["assets/blinders-1.jpg", "assets/blinders-2.jpg", "assets/blinders-3.jpg"],
    kind: "download",
    downloadUrl: "https://github.com/MayorMilo/blinders"
  }
];
