// Shared across pages: header height for layout, live clock, footer year.

(function () {
  // Publish the header's real height as --header-h so the hero can fill
  // exactly the rest of the screen (the header grows when the nav wraps).
  const header = document.querySelector(".site-header");
  if (header && "ResizeObserver" in window) {
    new ResizeObserver(() => {
      document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
    }).observe(header);
  }

  const clock = document.querySelector(".clock");
  const fmt = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true
  });

  function tick() {
    if (clock) clock.textContent = fmt.format(new Date());
  }
  tick();
  setInterval(tick, 1000);

  document.querySelectorAll(".year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
})();
