// ===== Smooth Project Filter =====
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active from all buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projects.forEach(project => {
        if (filter === "all" || project.dataset.category === filter) {
          project.classList.remove("hide");
        } else {
          project.classList.add("hide");
        }
      });
    });
  });
});
