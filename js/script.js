// @ts-nocheck

document.addEventListener("DOMContentLoaded", () => {
const yearEl = document.getElementById("year");
const backToTop = document.getElementById("backToTop");
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");
const avatars = document.querySelectorAll(".avatar");
const prevBtn = document.querySelector(".avatar-btn.prev");
const nextBtn = document.querySelector(".avatar-btn.next");

// Năm hiện tại
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --- Menu Mobile ---
hamburger?.addEventListener("click", () => {
navLinks.classList.toggle("open");
});

document.addEventListener("click", (e) => {
if (e.target.matches(".nav-links a")) navLinks.classList.remove("open");
});

// --- Nút quay về đầu trang ---
window.addEventListener("scroll", () => {
backToTop.style.display = window.scrollY > 200 ? "flex" : "none";
});

backToTop.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- Avatar slider ---
let currentAvatar = 0;
function showAvatar(index) {
avatars.forEach((img, i) => {
img.classList.toggle("active", i === index);
});
}

prevBtn?.addEventListener("click", () => {
currentAvatar = (currentAvatar - 1 + avatars.length) % avatars.length;
showAvatar(currentAvatar);
});

nextBtn?.addEventListener("click", () => {
currentAvatar = (currentAvatar + 1) % avatars.length;
showAvatar(currentAvatar);
});
});
