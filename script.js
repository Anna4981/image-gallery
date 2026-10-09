const images = document.querySelectorAll("#gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const caption = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");

// Show the lightbox with the clicked image
function openLightbox(img) {
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  caption.textContent = img.alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

// Hide the lightbox
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

images.forEach((img) => {
  img.addEventListener("click", () => openLightbox(img));
});

closeBtn.addEventListener("click", closeLightbox);

// Close when clicking the dark background (not the image)
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Close with the Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});