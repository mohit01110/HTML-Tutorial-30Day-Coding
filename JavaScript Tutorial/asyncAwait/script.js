//Async and Await
function loadingData() {
  return new Promise((resolve, reject) => {
    console.log('Processing...')
    setTimeout(() => {
      console.log('Loading Data')
      resolve()
    }, 2000)
  })
}

function collectingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Collecting Data')
      resolve()
    }, 2000)
  })
}

function approvingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Approving Data')
      resolve()
    }, 1000)
  })
}

function approved() {
  console.log('Approved')
}

async function Ex() {
  await loadingData()

  await approvingData()
  await approved()
}

Ex()
  .then(collectingData)
  .catch((err) => {
    console.log(err)
  })
