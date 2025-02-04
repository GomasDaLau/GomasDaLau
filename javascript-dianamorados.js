let currentImageIndex = 0;

const images = [
    "https://i.ibb.co/wNMNVtg6/300.jpg", // Imagem inicial
    "https://i.ibb.co/G3VDcYPF/301.jpg",
    "https://i.ibb.co/LXLQyxNL/303.jpg",
    "https://i.ibb.co/TDyQ9QP5/302.jpg", // Imagem final
];

function previousImage() {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    document.getElementById("main-product-image").src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    document.getElementById("main-product-image").src = images[currentImageIndex];
}

const boxImageMap = {
    "Coração Rose Gold": "https://i.ibb.co/Tx48tStC/304.jpg",
    "Redonda Prateada": "https://i.ibb.co/prKq8rpY/305.jpg",
    "Coração Prateado": "https://i.ibb.co/fV83RtcC/307.jpg",
    "Coração Dourado": "https://i.ibb.co/M5kbQDzR/308.jpg",
    "Redonda Dourada": "https://i.ibb.co/xKqMJY5D/309.jpg"
};

document.getElementById("boxSelector").addEventListener("change", function() {
    document.getElementById("box-slider-image").src = boxImageMap[this.value];
});


document.getElementById("prevBox").addEventListener("click", function() {
    currentIndex = (currentIndex === 0) ? boxImages.length - 1 : currentIndex - 1;
    boxImageElement.src = boxImages[currentIndex];
});

document.getElementById("nextBox").addEventListener("click", function() {
    currentIndex = (currentIndex === boxImages.length - 1) ? 0 : currentIndex + 1;
    boxImageElement.src = boxImages[currentIndex];
});
// Função para alterar a imagem principal
function changeImage(imageSrc) {
    document.getElementById('main-product-image').src = imageSrc;
}
