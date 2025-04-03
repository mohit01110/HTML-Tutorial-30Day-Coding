function createImageElement(src){
  let image = document.createElement('img')
  image.src = src
  return image
}

let gallery = document.getElementById('gallery')
let images = ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg", "./5.jpg", "./6.jpg", "./7.jpg", "./8.jpg", "./9.jpg", "./10.jpg"]

images.forEach((imageUrl)=>{
  gallery.appendChild(createImageElement(imageUrl))
})