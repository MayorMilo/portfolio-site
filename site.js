// Shared across pages: live clock in the header, current year in the footer.

(function () {
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
