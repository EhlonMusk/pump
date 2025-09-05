let musicStatus = "on";

// SPLASH

document.documentElement.style.overflow = "hidden";
document.body.scroll = "no";
const song = document.querySelector("audio");

// MUSIC PLAYER

document.querySelector(".pauseMusic").onclick = player;

const collapseMusic = () => {
  document.querySelector(".musicDescription").className =
    "musicDescription collapsed";

  document.querySelector(".pumpAlbum").className = "pumpAlbum collapsed";
};

const expandMusic = () => {
  document.querySelector(".musicDescription").className = "musicDescription";
  document.querySelector(".pumpAlbum").className = "pumpAlbum";
};

// RAVE ON/OFF

const raveOff = () => {
  // strobelights
  document.querySelector(".rave").className = "rave off";
  document.querySelector(".rave2").className = "rave2 off";
  // crowd
  document.querySelector(".crowd-1").className = "crowd-1 off";
  document.querySelector(".crowd-2").className = "crowd-2 off";
  document.querySelector(".crowd-3").className = "crowd-3 off";
  // main section
  document.querySelector(".mainSection").className = "mainSection off";
  document.querySelector(".pepeDJ").className = "pepeDJ off";
  // speakers - main
  document.querySelector(".speakerLeftTop").className = "speakerLeftTop off";
  document.querySelector(".speakerLeftBottom").className =
    "speakerLeftBottom off";
  document.querySelector(".speakerRightTop").className = "speakerRightTop off";
  document.querySelector(".speakerRightBottom").className =
    "speakerRightBottom off";
  // speakers - Header
  document.querySelector(".speakerLeftOne").className = "speakerLeftOne off";
  document.querySelector(".speakerLeftTwo").className = "speakerLeftTwo off";
  document.querySelector(".speakerRightOne").className = "speakerRightOne off";
  document.querySelector(".speakerRightTwo").className = "speakerRightTwo off";
};

const raveOn = () => {
  // strobelights
  document.querySelector(".rave").className = "rave";
  document.querySelector(".rave2").className = "rave2";
  // crowd
  document.querySelector(".crowd-1").className = "crowd-1";
  document.querySelector(".crowd-2").className = "crowd-2";
  document.querySelector(".crowd-3").className = "crowd-3";
  // main section
  document.querySelector(".mainSection").className = "mainSection";
  document.querySelector(".pepeDJ").className = "pepeDJ";
  // speakers - main
  document.querySelector(".speakerLeftTop").className = "speakerLeftTop";
  document.querySelector(".speakerLeftBottom").className = "speakerLeftBottom";
  document.querySelector(".speakerRightTop").className = "speakerRightTop";
  document.querySelector(".speakerRightBottom").className =
    "speakerRightBottom";
  // speakers - header
  document.querySelector(".speakerLeftOne").className = "speakerLeftOne";
  document.querySelector(".speakerLeftTwo").className = "speakerLeftTwo";
  document.querySelector(".speakerRightOne").className = "speakerRightOne";
  document.querySelector(".speakerRightTwo").className = "speakerRightTwo";
};

// SPLASH

const closeSplash = () => {
  document.querySelector(".backdropsplash").className =
    "backdropsplash disabled";
};

document.querySelector(".enterlogo").onclick = (e) => {
  closeSplash();
  song.play();
  collapseMusic();
  document.documentElement.style.overflow = "scroll";
  document.body.scroll = "yes";
};

// document.querySelector(".backdropsplash").onclick = (e) => {
//   closeSplash();
//   document.documentElement.style.overflow = "scroll";
//   document.body.scroll = "yes";
// };

// MUSIC PLAYER

function player(event) {
  const clicked = event.target;
  clicked.classList.toggle("playMusic");
  const song = document.querySelector("audio");
  if (song.paused) {
    song.play();
    collapseMusic();
    raveOn();
    musicStatus = "on";
  } else {
    song.pause();
    expandMusic();
    raveOff();
    makeItStop();
    musicStatus = "off";
  }
}

// END OF SONG CHANGE

song.addEventListener("ended", () => {
  document.querySelector(".pauseMusic").classList.toggle("playMusic");
  expandMusic();
  raveOff();
  makeItStop();
  musicStatus = "off";
});
