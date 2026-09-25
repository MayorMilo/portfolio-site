function cardHTML(p) {
  const thumb = p.thumb
    ? `<div class="card-thumb"><img src="${p.thumb}" alt="${p.title} screenshot" loading="lazy"></div>`
    : `<div class="card-thumb placeholder"><span class="thumb-label">${p.title}</span></div>`;

  const tags = (p.tags || [])
    .map(t => `<span class="tag">${t}</span>`)
    .join("");

  const links = [];
  if (p.kind === "live" && p.liveUrl) {
    links.push(`<a class="primary" href="${p.liveUrl}" target="_blank" rel="noopener">Live demo</a>`);
  }
  if (p.kind === "download" && p.downloadUrl) {
    links.push(`<a class="primary" href="${p.downloadUrl}" target="_blank" rel="noopener">Download</a>`);
  }
  if (p.sourceUrl) {
    links.push(`<a href="${p.sourceUrl}" target="_blank" rel="noopener">Source</a>`);
  }

  return `
    <article class="card" data-kind="${p.kind}">
      ${thumb}
      <div class="card-body">
        <h2 class="card-title">${p.title}</h2>
        <p class="card-desc">${p.description}</p>
        <div class="card-tags">${tags}</div>
        <div class="card-links">${links.join("")}</div>
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
    ? items.map(cardHTML).join("")
    : `<p class="empty-state">No projects in this category yet.</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
  render("all");

  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      render(btn.dataset.filter);
    });
  });
});
