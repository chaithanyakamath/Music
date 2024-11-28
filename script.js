// intialize the var
let songIndex = 0;
audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgreassBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif =  document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Balam Pichkari", filepath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    {songName:"Beete Lamhei", filepath: "songs/2.mp3", coverPath: "covers/bl.jpg" },
    {songName:"Khuda Janne", filepath: "songs/3.mp3", coverPath: "covers/KJ.jpg" },
    {songName:"Meh Parindha", filepath: "songs/4.mp3", coverPath: "covers/pa.jpg" },
    {songName:"Not A Teaser(Theme)", filepath: "songs/5.mp3", coverPath: "covers/ss.jpg" },
    {songName:"Tuje kitna Chahne Lage", filepath: "songs/6.mp3", coverPath: "covers/tkc.jpg" },
    {songName:"Tarasti hai nigaei", filepath: "songs/7.mp3", coverPath: "covers/tn.jpg" },
];

songItem.forEach((element,i) =>{    
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// play-pause function
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity  = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity  = 0;
        }
    })

// event listener
audioElement.addEventListener("timeupdate", ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgreassBar.value = progress;    
})

myProgreassBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgreassBar.value* audioElement.duration/100;
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.classList.add('fa-circle-play');
    element.classList.remove('fa-circle-pause');
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e);
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    });
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0; 
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0; 
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
