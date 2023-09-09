function displayTime() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let session = "AM";
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let monthString = month[now.getMonth()];
  const day = now.getDay();
  const year = now.getFullYear();
  let week = weekday[now.getDay()];

  const fullDate = `${week} ${monthString} ${day}, ${year}`;
  const dateEle = document.querySelector(".date");
  dateEle.textContent = fullDate;

  if (h > 12) {
    session = "PM";
    h = h - 12;
  }

  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  let time = `${h}:${m}:${s} ${session}`;

  const timeEle = document.querySelector(".time");
  timeEle.textContent = time;
  setTimeout(displayTime, 1000);
}

displayTime();
