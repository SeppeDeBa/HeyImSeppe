let currentImageIndex = 0;
let images = [];

function openPopup(title, info, imgArray) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-info').innerText = info;
    images = imgArray;
    currentImageIndex = 0;
    document.getElementById('popup-image').src = images[currentImageIndex];
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('popup-image').src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('popup-image').src = images[currentImageIndex];
}
