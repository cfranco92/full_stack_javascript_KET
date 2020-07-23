import MediaPlayer from './mediaplayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay()
    ],
});

const playButton = document.querySelector("#playbutton");
const muteButton = document.querySelector("#muteButton");
playButton.onclick = () => player.play();
muteButton.onclick = () => player.mute();