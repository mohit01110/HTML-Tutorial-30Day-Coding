//Use Promises to load mulitple images asynchronously and display them on a webpage.

let imageContainer = document.getElementById('imageContainer')
let imageUrls = [
  './1.jpg',
  './2.jpg',
  './3.jpg',
  './4.jpg',
  './5.png',
  './6.jpeg',
]

function loadImage(src) {
  return new Promise((resolve, rejec5t) => {
    let img = new Image(500, 500)
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      rejec5t(new Error('Failed to Load Image' + src))
    }
    img.src = src
  })
}

Promise.all(imageUrls.map(loadImage))
  .then((image) => image.forEach((image) => imageContainer.appendChild(image)))
  .catch((error) => console.log(error))
