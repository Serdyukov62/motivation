/// <reference types="@types/youtube" />

let player: YT.Player;
let lastSelectedIndex = -1;

(window as any).onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: randomClip(LINK_VIDEO),
        playerVars: {
            'autoplay': 1,
            'controls': 0,
        },
    });
}

const playBtn = document.getElementById('playBtn') as HTMLButtonElement;
const moreContainer = document.getElementById('moreContainer') as HTMLDivElement

const LINK_VIDEO =
[
 'nRbuLixWH1E',
 '0bd3Zgf964k',
 'rdPfJx64CO0',
];

function createPositionForMore() {
    const newP = document.createElement('p');
    const topValue = Math.random() * (60 - 10) + 10;
    const leftValue = Math.random() * (80 - 10) + 10;
    const transformValue = Math.random() * (-50 - 10) + 10;


    newP.className = 'more';
    newP.textContent = 'more?';
    newP.style.top = `${topValue}rem`
    newP.style.left = `${leftValue}rem`
    newP.style.transform = `rotate(${transformValue}deg)`


    moreContainer.appendChild(newP);
}

const randomClip = (clipList: string[]) => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * clipList.length);
    } while (randomIndex === lastSelectedIndex && clipList.length > 1);

    lastSelectedIndex = randomIndex;
    return clipList[randomIndex];
}

playBtn.addEventListener('click', () => {
    const videoId = randomClip(LINK_VIDEO)
    if (videoId != undefined)
    player.loadVideoById(videoId)
    createPositionForMore()
})
