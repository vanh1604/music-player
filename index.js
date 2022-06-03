const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const chooseSong = document.getElementsByClassName("item-list");

//musi
const songs = [
  {
    name: "Khách Mời",
    displayName: "Khách Mời",
    artist: "Trương Viễn",
  },
  {
    name: "Chang",
    displayName: "Em không Hiểu",
    artist: "Chang",
  },
  {
    name: "CuKak",
    displayName: "Tình Ca Tình Ta",
    artist: "CuKak",
  },
  {
    name: "H2K",
    displayName: "Hương Hoa Phai Tàn",
    artist: "H2K",
  },
];

let isPlaying = false;
//play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}
playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

function loadSong(song) {
  console.log("song", song);
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
  // console.log(song.displayName);
  for (let i = 0; i < chooseSong.length; i++) {
    // console.log(chooseSong[i].innerText);
    if (song.displayName == chooseSong[i].innerText) {
      chooseSong[i].style.color = "rgb(116, 238, 230)";
    } else {
      chooseSong[i].style.color = "black";
    }
  }
  playSong()
}

//current Song
let songIndex = 0;
//previous song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}
//next song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}
//on load
loadSong(songs[songIndex]);
//update progrress bả and time
// function updateProgressBar(e) {
//   if (isPlaying) {
//     const { duration, currentTime } = e.srcElement;
//     const progressPercent = (currentTime / duration) * 100;
//     progress.style.width = `${progressPercent}%`;
//     //caculate
//     const durationMinutes = Math.floor(duration / 60);
//     let durationSeconds = Math.floor(duration % 60);
//     if (durationSeconds < 10) {
//       durationSeconds = `0${durationSeconds}`;
//     }
//     durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
//     //delay
//     if (durationSeconds) {
//       durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
//     }
//     //caculate
//     const currentMinutes = Math.floor(currentTime / 60);
//     let currentSeconds = Math.floor(currentTime % 60);
//     if (currentSeconds < 10) {
//       currentSeconds = `0${currentSeconds}`;
//     }
//     currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
//   }
// }
// //setProgressBar
// function setProgressBar(e) {
//   const width = this.clientWidth;
//   const clickX = e.offsetX;
//   const { duration } = music;
//   music.currentTime = (clickX / width) * duration;
// }

//event listener
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);
music.addEventListener("ended", nextSong);
  // chooseSong[1].addEventListener("click", ()=> {
  //   console.log(chooseSong[1].textContent);
  // //   let result = songs.filter((displayName)=> {
  // //     console.log(displayName);
  // //     displayName == chooseSong[1].innerHTML
  // //   })
  // //   console.log(result);
  // //   loadSong(result)}
  // });
function changeSongOnClick(songName) {
  let result = songs.filter((song) => song.displayName == songName)
  console.log(result);
  loadSong(result[0])
}