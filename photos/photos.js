let images = []; // [{url, caption}]

function setImages(data) { images = data; }

window.openLightbox = function(index) {
    const { url, caption } = images[index];
    document.getElementById('lightboxImg').src         = url;
    document.getElementById('lightboxCaption').textContent = caption || '';
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
};

document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) window.closeLightbox();
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') window.closeLightbox(); });
