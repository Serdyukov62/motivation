let currentVideoIndex = 0;
let lastVideoIndex = 0;

const playBtn = document.getElementById('playBtn') as HTMLButtonElement;
const moreContainer = document.getElementById('moreContainer') as HTMLDivElement
const player = document.getElementById('player') as HTMLVideoElement

const LINK_VIDEO =
[
 './video/1.mp4',
 './video/2.mp4',
 './video/3.mp4',
];

function createPositionForMore() {
    const newP = document.createElement('p');
    const topValue = Math.random() * (60 - 10) + 10;
    const leftValue = Math.random() * (80 - 10) + 10;
    const transformValue = Math.random() * (-50 - 10) + 10;
    const count = moreContainer.querySelectorAll('p').length;

    newP.className = 'more';
    newP.textContent = 'more?';
    newP.style.top = `${topValue}rem`
    newP.style.left = `${leftValue}rem`
    newP.style.transform = `rotate(${transformValue}deg)`


    switch (true) {
        case (count > 9):
            newP.style.fontSize = '11rem';
            break;
        case (count > 6):
            newP.style.fontSize = '7rem';
            break;
        case (count > 3):
            newP.style.fontSize = '5rem';
            break;
        default:
            break;
    }

    moreContainer.appendChild(newP);
}

function getRandomIndexExceptPrev(prev: number, max: number) {
    let randomIndex: number;
    do {
        randomIndex = Math.floor(Math.random() * max);
    } while (randomIndex === prev && max > 1);
    return randomIndex;
}

playBtn.addEventListener('click', () => {
    const nextIndex = getRandomIndexExceptPrev(lastVideoIndex, LINK_VIDEO.length);
    lastVideoIndex = nextIndex;
    player.src = LINK_VIDEO[nextIndex] || '';
    player.load();
    player.play();
    createPositionForMore()
})
