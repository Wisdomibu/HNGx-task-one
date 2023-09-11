const currentDay = document.getElementById("currentDayOfTheWeek");
const Time = document.getElementById("currentTimeOfTheDay");

function dateTime() {
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const recentDate = new Date();
   const date = dayOfWeek[recentDate.getUTCDay()];
   currentDay.innerText = ` Today is ${date} `;
  

  const currentUTCTime = recentDate.getTime()
  Time.innerText = `Current UTC Time in Milliseconds: ${currentUTCTime}`;
}

dateTime()

setInterval(dateTime, 1000)
