/// <reference types="@types/youtube" />

let player: YT.Player;
let lastSelectedIndex = -1;

(window as any).onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        height: '608',
        width: '608',
        videoId: randomClip(LINK_VIDEO),
        playerVars: {
            'autoplay': 1,
            'controls': 0,
        },
    });
}

const playBtn = document.getElementById('playBtn') as HTMLButtonElement;
const when = document.getElementsByClassName('when')[0] as HTMLHeadingElement

const LINK_VIDEO =
[
 'nRbuLixWH1E',
 '0bd3Zgf964k',
 'rdPfJx64CO0',
];

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
    if (videoId === '0bd3Zgf964k'){
        when.classList.add('active')
    } else {
        when.classList.remove('active')
    }
})
