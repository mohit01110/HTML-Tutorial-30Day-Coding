//Write a function which takes multiple API using Promises.

function fetchData(url) {
  return fetch(url).then((response) => response.json())
}

function handleData(data) {
  console.log('Processed Data', data)
}

function main() {
  const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1'
  const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/2'

  fetchData(apiUrl1)
    .then(handleData)
    .catch((err) => console.log('error', err))
  fetchData(apiUrl2)
    .then(handleData)
    .catch((err) => console.log('error', err))
}

main()
