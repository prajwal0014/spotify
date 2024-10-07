
console.log("welcome to spotify"); 
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let songs=[
    
        {songName:"Let-Me-Love-You",filePath:"songs/1.mp3",coverpath:"cover.jpg"},
        {songName:"Babuaan",filePath:"songs/8.mp3",coverpath:"cover2.jpg"},
        {songName:"Aaj Ki Raat",filePath:"songs/2.mp3",coverpath:"cover3.jpg"},
        {songName:"Rajaji-Ke-Dilwa",filePath:"songs/3.mp3",coverpath:"cover4.jpg"},
        {songName:"Cooler Kurti Me Laga La",filePath:"songs/4.mp3",coverpath:"cover5.jpg"},
        {songName:"saj-Ke-Sawar-Ke",filePath:"songs/5.mp3",coverpath:"cover6.jpeg"},
        {songName:"saj-Ke-Sawar-Ke",filePath:"songs/6.mp3",coverpath:"cover7.jpg"},
        {songName:"saj-Ke-Sawar-Ke",filePath:"songs/7.mp3",coverpath:"cover7.jpg"},
    
]

songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src= songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innertext= songs[i].songName;
    
});

// audioElement.play();
// handle play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause')
        masterPlay.classList.add('fa-play')
        gif.style.opacity = 0;
    }
})
// listen to event
audioElement.addEventListener('timeupdate',()=>{  
// update seelbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

let makeAllPlays = ()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{
songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
})