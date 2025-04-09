//implement a try-catch block to handle an error that occurs during API Data fetching

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
fetchData()
