let seconds = Number(prompt("Enter number of seconds:"));

let countdown = setInterval(() => {
  console.log("Time left:", seconds);

  if (seconds === 0) {
    clearInterval(countdown);
    console.log("Countdown Complete!");
  }

  seconds--;
}, 1000);

setTimeout(() => {

  let stop = prompt("Press 's' to stop the countdown immediately");

  if (stop === "s") {
    clearInterval(countdown);
    console.log("Countdown Stopped by User!");
  }
}, 1000);
