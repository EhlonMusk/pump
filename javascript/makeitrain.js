let moneyStatus = "off";

const wowSound = new Audio("wow.mp3");

const makeItRain = () => {
  document.querySelector(".moneyContainer").className =
    "moneyContainer enabled";
  document.querySelector(".animationContainer").className =
    "animationContainer enabled";
  document.querySelector(".speakerLeftTop").className =
    "speakerLeftTop enabled";
  moneyStatus = "on";
  wowSound.play();
};

const makeItStop = () => {
  document.querySelector(".moneyContainer").className = "moneyContainer";
  document.querySelector(".animationContainer").className =
    "animationContainer";
  document.querySelector(".speakerLeftTop").className = "speakerLeftTop off";
  document.querySelector(".speakerLeftOne").className = "speakerLeftOne off";
  moneyStatus = "off";
};

document.querySelector(".speakerLeftTop").onclick = (e) => {
  if (moneyStatus == "on" && musicStatus == "off") {
    makeItStop();
    song.play();
    raveOn();
    collapseMusic();
  } else if (moneyStatus == "off" && musicStatus == "off") {
    makeItRain();
    song.play();
    raveOn();
    collapseMusic();
    document.querySelector(".pauseMusic").classList.toggle("playMusic");
    document.querySelector(".speakerLeftTop").className =
      "speakerLeftTop enabled";
    musicStatus = "on";
  } else if (moneyStatus == "off") {
    makeItRain();
  } else {
    makeItStop();
    expandMusic();
    collapseMusic();
    document.querySelector(".speakerLeftTop").className = "speakerLeftTop";
  }
};

document.querySelector(".speakerLeftOne").onclick = (e) => {
  if (moneyStatus == "on" && musicStatus == "off") {
    makeItStop();
    song.play();
    raveOn();
    collapseMusic();
  } else if (moneyStatus == "off" && musicStatus == "off") {
    makeItRain();
    song.play();
    raveOn();
    collapseMusic();
    document.querySelector(".pauseMusic").classList.toggle("playMusic");
    document.querySelector(".speakerLeftOne").className =
      "speakerLeftOne enabled";
    musicStatus = "on";
  } else if (moneyStatus == "off") {
    makeItRain();
  } else {
    makeItStop();
    expandMusic();
    collapseMusic();
    document.querySelector(".speakerLeftOne").className = "speakerLeftOne";
  }
};
