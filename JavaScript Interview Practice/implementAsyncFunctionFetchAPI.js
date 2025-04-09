//Implement an async function to fetch data from an API and handle errors using try/catch

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    } else {
      const data = await response.json()
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}

fetchData()
