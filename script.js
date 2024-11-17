document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.color = "#ccc"; // Oscurece el texto
        });

        item.addEventListener("mouseout", () => {
            item.style.color = "#fff"; // Vuelve al color original
        });
    });
});
