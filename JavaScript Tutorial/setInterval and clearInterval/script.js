//setInterval

let interval = setInterval(fun, 2000)

function fun() {
  let date = new Date().toLocaleTimeString()
  console.log(date)
}

//clearInterval

setTimeout(() => {
  clearInterval(interval)
}, 10000)
