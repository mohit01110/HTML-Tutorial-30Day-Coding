//Fetch API

// fetch('./fetchAPImyfile.txt')
//   .then((response) => {
//     return response.text()
//   })
//   .then((data) => {
//     console.log(data)
//   })

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network is not responding')
    } else {
      return response.json()
    }
  })
  .then((data) => {
    data.forEach((item) => {
      console.log(item.title)
    })
  })
  .catch((error) => {
    console.log(error)
  })
