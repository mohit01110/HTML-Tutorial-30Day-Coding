let quotes = [
  'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  'The way to get started is to quit talking and begin doing.',
  'Success usually comes to those who are too busy to be looking for it.',
  'The future belongs to those who believe in the beauty of their dreams.',
  'The only way to do great work is to love what you do.',
  'Success is walking from failure to failure with no loss of enthusiasm.',
  'The only way to do great work is to love what you do.',
]

function displayQuote() {
  let quote = document.getElementById('quote')
  quote.textContent = quotes[Math.floor(Math.random() * quotes.length)]
}

displayQuote()
function changeQuote() {
  displayQuote()
  setTimeout(changeQuote, 5000)
}

changeQuote()