const time = () => {
  let clockTime = document.getElementById('time');

  let date = new Date();

  let hours = date.getHours();
  hours = hours < 10 ? `0${hours}` : hours;

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `:0${minutes}` : `:${minutes}`;

  let seconds = date.getSeconds();
  seconds = seconds < 10 ? `:0${seconds}` : `:${seconds}`;

  clockTime.innerHTML = `${hours}${minutes}${seconds}`;
};

setInterval(time, 1000);
time();
