const images = [
    { src: 'images/slideshow1.png', link: 'dianamorados.html' },
    { src: 'images/slideshow2.png', link: 'index.html' },
    { src: 'images/slideshow3.png', link: 'gomaskilo.html' }
];

let currentIndex = 0;
const slideshowImage = document.getElementById('slideshow-image');
const slideshowLink = document.getElementById('slideshow-link');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshowImage.src = images[currentIndex].src;
    slideshowLink.href = images[currentIndex].link;
}

// Muda a imagem a cada 5 segundos
setInterval(changeImage, 5000);
