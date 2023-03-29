var productImage = document.querySelector('.product-image');
var imageZoom = document.querySelector('#image-zoom');
var zoomBox = document.querySelector('#zoom-box');
var zoomImage = document.querySelector('#zoom-image');

productImage.addEventListener('mousemove', function(e) {
  var mouseX = e.clientX - productImage.offsetLeft;
  var mouseY = e.clientY - productImage.offsetTop;
  var imageX = (mouseX / productImage.offsetWidth) * 100;
  var imageY = (mouseY / productImage.offsetHeight) * 100;

  // Calculate the position of the zoom box
  var zoomBoxX = mouseX - (zoomBox.offsetWidth / 2);
  var zoomBoxY = mouseY - (zoomBox.offsetHeight / 2);

  // Limit the zoom box to the bounds of the image
  if (zoomBoxX < 0) {
    zoomBoxX = 0;
  } else if (zoomBoxX > productImage.offsetWidth - zoomBox.offsetWidth) {
    zoomBoxX = productImage.offsetWidth - zoomBox.offsetWidth;
  }

  if (zoomBoxY < 0) {
    zoomBoxY = 0;
  } else if (zoomBoxY > productImage.offsetHeight - zoomBox.offsetHeight) {
    zoomBoxY = productImage.offsetHeight - zoomBox.offsetHeight;
  }

  // Set the position of the zoom box
  zoomBox.style.left = zoomBoxX + 'px';
  zoomBox.style.top = zoomBoxY + 'px';

  // Set the position of the zoomed image inside the zoom box
  zoomImage.style.left = '-' + imageX + '%';
  zoomImage.style.top = '-' + imageY + '%';
});

productImage.addEventListener('mouseenter', function() {
  zoomBox.style.display = 'block';
});

productImage.addEventListener('mouseleave', function() {
  zoomBox.style.display = 'none';
});
