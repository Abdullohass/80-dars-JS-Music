const rasm = document.getElementById("rasm");
const nomi = document.getElementById("nomi");
const singer = document.getElementById("singer");
const select = document.getElementById("select");
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const pause = document.getElementById("stop");
const next = document.getElementById("next");
const audio = document.getElementById("audio");
let curentIndex = 0;
const musicsData = [
    {
        name: "Atirgullar Ochdi Chiroy",
        rasmi: "./img/bahor.jpg",
        singer: "Jasur Jabborov",
        music: "./music/Bahor.mp3"
    },
    {
        name: "Glory Glory Man United",
        rasmi: "./img/MYU.png",
        singer: "Болельщики Манчестер Юнайтед",
        music: "./music/MYU.mp3"
    },
    {
        name: "Gel Bana",
        rasmi: "./img/Mustafa Sandal.jpg",
        singer: "Mustafa Sandal",
        music: "./music/Mustafa Sandal.m4a"
    },
    {
        name: "Men o'zimni sevaman",
        rasmi: "./img/Tohir Mahkamov.jpg",
        singer: "Tohir Mahkamov",
        music: "./music/Tohir Mahkamov.mp3"
    },
    {
        name: "Sen Meniki Emassan",
        rasmi: "./img/Ummon.jpg",
        singer: "Ummon Guruhi",
        music: "./music/Ummon.mp3"
    },
]

function getMusics() {
    select.innerHTML = '';
    musicsData.forEach((e, i) => {
        const option = document.createElement("option");
        option.textContent = e.singer + " : " + e.name;
        option.value = i;
        select.appendChild(option);
    })
    audio.src = musicsData[curentIndex].music;
}
getMusics()


function changeMusic() {
    rasm.src = musicsData[curentIndex].rasmi;
    nomi.textContent = musicsData[curentIndex].name;
    singer.textContent = musicsData[curentIndex].singer;
    audio.src = musicsData[curentIndex].music;
    select.value = curentIndex;
}


select.addEventListener("change", () => {
    curentIndex = +select.value;
    changeMusic();
})

function playAudio() {
    play.style.display = "none";
    pause.style.display = "block";
    audio.play();
}

function pauseAudio() {
    play.style.display = "block";
    pause.style.display = "none";
    audio.pause();
}

play.addEventListener("click", () => {

    playAudio();
})

pause.addEventListener("click", () => {
    pauseAudio();
})

next.addEventListener("click", () => {
    curentIndex = (curentIndex + 1) % musicsData.length;
    changeMusic();
})

prev.addEventListener("click", () => {
    curentIndex = (curentIndex - 1 + musicsData.length) % musicsData.length;
    changeMusic();
})

audio.addEventListener('timeupdate', () => {
    const foiz = (audio.currentTime / audio.duration) * 100;
    progress.value = foiz;
})

audio.addEventListener('loadedmetadata', () => {
    progress.max = 100;
})
progress.addEventListener('input', (e) => {
    const vaqti = (e.target.value / 100) * audio.duration;
    audio.currentTime = vaqti;
})
