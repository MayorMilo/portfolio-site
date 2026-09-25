function rowHTML(p) {
  const media = p.thumb
    ? `<div class="panel panel-media"><img src="${p.thumb}" alt="${p.title} screenshot" loading="lazy"></div>`
    : `<div class="panel panel-media placeholder"><span>${p.title}</span></div>`;

  const tags = (p.tags || []).join(" · ");

  const links = [];
  if (p.kind === "live" && p.liveUrl) {
    links.push(`<a href="${p.liveUrl}" target="_blank" rel="noopener">live demo ↗</a>`);
  }
  if (p.kind === "download" && p.downloadUrl) {
    links.push(`<a href="${p.downloadUrl}" target="_blank" rel="noopener">download ↗</a>`);
  }
  if (p.sourceUrl) {
    links.push(`<a href="${p.sourceUrl}" target="_blank" rel="noopener">source ↗</a>`);
  }

  return `
    <article class="split project" data-kind="${p.kind}">
      ${media}
      <div class="panel panel-text">
        <div class="prose">
          <h2 class="project-title">${p.title}</h2>
          <p>${p.description}</p>
        </div>
        ${tags ? `<p class="project-tags">${tags}</p>` : ""}
        <div class="project-links">${links.join("")}</div>
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
