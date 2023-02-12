var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;


// Show the current time
var showCurrentTime = function()
{
  // display the string on the webpage
  var clock = document.getElementById('clock');

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // set hours
  if (hours >= noon)
  {
    meridian = "PM";
  }

  if (hours > noon)
  {
    hours = hours - 12;
  }

  // set minutes
  if (minutes < 10)
  {
    minutes = "0" + minutes;
  }

  // set seconds
  if (seconds < 10)
  {
    seconds = "0" + seconds;
  }

  // put the clock string together
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
  clock.innerText = clockTime;

};

// Getting the clock to increment on its own
var updateClock = function()
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://pbs.twimg.com/profile_images/1041173628300095491/JZj29ahl_400x400.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var peepoImageJS = document.getElementById("peepoImage");

  if (time == partytime)
  {
    image = "https://images-na.ssl-images-amazon.com/images/I/51fG9wYn1RL._AC_SL1000_.jpg";
    messageText = "Yay PEEPO!";
  }
  else if (time == wakeuptime)
  {
    image = "https://ih1.redbubble.net/image.1545529510.5218/st,small,507x507-pad,600x600,f8f8f8.jpg";
    messageText = "Wake up time BEECH";
  }
  else if (time == naptime)
  {
    image="https://i.redd.it/4tw9ieyw6a231.png";
    messageText = "Yo nap time BEECH";
  }
  else if (time < noon)
  {
    image="https://i.redd.it/5w81qp8nk2r51.jpg";
    messageText="Good morning, PEEPO be smiling on you!";
  }
  else if (time >= evening)
  {
    image = "https://ih1.redbubble.net/image.1095272731.3292/flat,750x,075,f-pad,750x1000,f8f8f8.jpg";
    messageText="Good evening, have a hot cocoa on PEEPO!";
  }
  else
  {
    image="https://ih1.redbubble.net/image.1079152139.1012/st,small,507x507-pad,600x600,f8f8f8.jpg";
    messageText = "Good afternoon, PEEPO be chillin...";
  }
  console.log(messageText);
  timeEventJS.innerText = messageText;
  peepoImage.src = image;

  showCurrentTime();
};

updateClock();

// get the clock to implement once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the partytime button to work (LEETTTTTSSSS GOOOOO!!!!!)
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
  if (partytime < 0)
  {
    partytime = new Date().getHours();
    partyTimeButton.innerText = "Party Over! Get back to work!";
    partyTimeButton.style.backgroundColor = "#FFC300";
  }
  else
  {
    partytime = -1;
    partyTimeButton.innerText = "It's party time baybeeeee!!!!";
    partyTimeButton.style.backgroundColor = "#FF5733";
  }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

// activates wake up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
  wakeuptime = wakeUpTimeSelector.value;
}

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// activates lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
  lunchtime = lunchTimeSelector.value;
}

lunchTimeSelector.addEventListener("change", lunchEvent);

// activates nap time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function()
{
  naptime = napTimeSelector.value;
}

napTimeSelector.addEventListener("change", napEvent);
