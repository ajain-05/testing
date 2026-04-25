const menu = document.getElementById('Menu')
const openBtn = document.getElementById('hamburger')
const closeBtn = document.getElementById('cross') // FIXED name

openBtn.addEventListener("click", () => {
    menu.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
});
