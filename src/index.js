
const panels = document.querySelectorAll(".panels");
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActive();
        panel.classList.add("active");
    })
});
const removeActive = () => {
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}

