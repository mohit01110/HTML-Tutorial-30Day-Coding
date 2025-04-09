//Loadin images using async and await

async function loadImages() {
  let imageContainer = document.getElementById('imageContainer')
  let imageUrls = [
    './1.jpg',
    './2.jpg',
    './3.jpg',
    './4.jpg',
    './5.png',
    './6.jpeg',
  ]
  try {
    const images = await Promise.all(imageUrls.map(loadImage))
    images.forEach((image) => imageContainer.appendChild(image))
  } catch (error) {
    console.log(error)
  }
}

loadImages()

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image(500, 500)
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject(new Error('Failed to Load Image' + src))
    }
    img.src = src
  })
}
