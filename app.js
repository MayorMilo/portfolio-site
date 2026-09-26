// Each image links to its full file so it can be opened and zoomed in a new tab.
function imageHTML(p, src, i, count) {
  const label = (p.imageLabels || [])[i] || (count > 1 ? `image ${i + 1} of ${count}` : "image");
  return `<a class="media-link" href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="${p.title}, ${label}"></a>`;
}

function rowHTML(p) {
  const images = p.images || (p.thumb ? [p.thumb] : []);
  let media;
  if (images.length > 1) {
    media = `
      <div class="panel panel-media gallery">
        <div class="strip" tabindex="0" aria-label="${p.title} images">
          ${images.map((src, i) => imageHTML(p, src, i, images.length)).join("")}
        </div>
        <div class="strip-nav">
          <button class="strip-btn" data-dir="-1" aria-label="Previous image">←</button>
          <button class="strip-btn" data-dir="1" aria-label="Next image">→</button>
        </div>
      </div>`;
  } else if (images.length === 1) {
    media = `<div class="panel panel-media">${imageHTML(p, images[0], 0, 1)}</div>`;
  } else {
    media = `<div class="panel panel-media placeholder"><span>${p.title}</span></div>`;
  }

  const tags = (p.tags || []).join(" · ");

  const links = [];
  if (p.kind === "live" && p.liveUrl) {
    links.push(`<a href="${p.liveUrl}" target="_blank" rel="noopener">live demo ↗</a>`);
  }
  if (p.kind === "download" && p.downloadUrl) {
    links.push(`<a href="${p.downloadUrl}" target="_blank" rel="noopener">download on GitHub ↗</a>`);
  }
  if (p.sourceUrl) {
    links.push(`<a href="${p.sourceUrl}" target="_blank" rel="noopener">source ↗</a>`);
  }

  return `
    <article class="split project" data-kind="${p.kind}">
      ${media}
      <div class="panel panel-text">
        <div class="panel-inner">
          <div class="prose">
            <h2 class="project-title">${p.title}</h2>
            <p>${p.description}</p>
          </div>
          ${tags ? `<p class="project-tags">${tags}</p>` : ""}
          ${links.length ? `<div class="project-links">${links.join("")}</div>` : ""}
        </div>
      </div>
    </article>
  `;
}

function render(filter) {
  const grid = document.getElementById("grid");
  const items = filter === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.kind === filter);

  grid.innerHTML = items.length
    ? items.map(rowHTML).join("")
    : `<p class="empty-state">No projects in this category yet.</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
  render("all");

  // Screenshot strips: arrow buttons step one image at a time.
  document.getElementById("grid").addEventListener("click", e => {
    const btn = e.target.closest(".strip-btn");
    if (!btn) return;
    const strip = btn.closest(".gallery").querySelector(".strip");
    const [a, b] = strip.children;
    const step = b ? b.offsetLeft - a.offsetLeft : a.offsetWidth;
    strip.scrollBy({ left: step * Number(btn.dataset.dir), behavior: "smooth" });
  });

  // Only offer filters for kinds that exist; hide the bar if there's just one.
  const kinds = new Set(PROJECTS.map(p => p.kind));
  document.querySelectorAll(".filter-btn:not([data-filter=all])").forEach(b => {
    b.hidden = !kinds.has(b.dataset.filter);
  });
  const filters = document.querySelector(".filters");
  if (filters) filters.hidden = kinds.size < 2;

  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");
      render(btn.dataset.filter);
    });
  });
});
