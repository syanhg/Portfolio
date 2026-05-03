const images = ["photo1.png", "photo2.png", "photo3.png"];

window.openLightbox = function(index) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  lightboxImg.src = images[index];
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
};

document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) window.closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') window.closeLightbox();
});
