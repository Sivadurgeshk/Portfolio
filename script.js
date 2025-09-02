function openLightbox(videoSrc) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-video').src = videoSrc;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.getElementById('lightbox-video').pause();
    document.getElementById('lightbox-video').src = "";
}
