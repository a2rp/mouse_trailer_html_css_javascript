const trailer = document.querySelector(".trailer");
const trailerLabel = document.querySelector(".trailerLabel");
const menuButton = document.querySelector(".menuButton");
const siteNav = document.querySelector(".siteNav");
const year = document.querySelector("#currentYear");
let animationFrame = null;
let cursorX = 0;
let cursorY = 0;

const moveTrailer = () => {
    trailer.style.transform = `translate3d(${cursorX - trailer.offsetWidth / 2}px, ${cursorY - trailer.offsetHeight / 2}px, 0)`;
    animationFrame = null;
};

window.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") return;
    cursorX = event.clientX;
    cursorY = event.clientY;
    if (!animationFrame) animationFrame = requestAnimationFrame(moveTrailer);
});

document.querySelectorAll("[data-trailer-label]").forEach((target) => {
    target.addEventListener("pointerenter", () => {
        trailerLabel.textContent = target.dataset.trailerLabel;
        trailer.classList.add("isActive");
    });
    target.addEventListener("pointerleave", () => {
        trailerLabel.textContent = "";
        trailer.classList.remove("isActive");
    });
});

menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("isOpen");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

document.addEventListener("click", (event) => {
    if (!siteNav.contains(event.target) && !menuButton.contains(event.target)) {
        siteNav.classList.remove("isOpen");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
    }
});

siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    siteNav.classList.remove("isOpen");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open menu");
}));

year.textContent = new Date().getFullYear();