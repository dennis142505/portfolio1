const buttons = document.querySelectorAll(".filters button");
const projects = document.querySelectorAll(".project");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    projects.forEach(project => {
      if(filter === "all" || project.classList.contains(filter)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});
