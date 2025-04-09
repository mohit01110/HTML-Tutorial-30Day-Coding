//Your are tasked with creating a countdown timer using Javascript and the setInterval function . The countdown timer should start at 1 min and update every second until it reacts to 0.When the countdown reached zero, an alert should pop up to notify that the countdown is completed.
let timer = document.getElementById('timer')
let countdown = 60

function updateTimerDisplay() {
  const minutes = Math.floor(countdown / 60)
  const seconds = countdown % 60
  timer.textContent = `${minutes}:${seconds} left`
}

function startCountdown() {
  if (countdown > 0) {
    countdown--
    updateTimerDisplay()
  } else {
    alert('Countdown Completed')
    clearInterval(interval)
  }
}

const interval = setInterval(startCountdown, 1000)
