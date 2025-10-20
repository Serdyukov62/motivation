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

function addParagraph(topValue: number,leftValue: number,transformValue: number) {
    const count = moreContainer.querySelectorAll('p').length;
    const newP = document.createElement('p');

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
    newP.className = 'more';
    newP.textContent = 'more?';
    newP.style.top = `${topValue}px`;
    newP.style.left = `${leftValue}px`;
    newP.style.transform = `rotate(${transformValue}deg)`;
    return newP;
}

function createPositionForMore() {
    if (moreContainer.querySelectorAll('p').length > 11){
        return;
    }
    const blockWidth = 120;
    const blockHeight = 40;
    const leftValue = Math.random() * (window.innerWidth - blockWidth);
    const topValue = Math.random() * (window.innerHeight - blockHeight);
    const transformValue = Math.random() * (-50 - 10) + 10;

    if ((leftValue + blockWidth < window.innerWidth) && (topValue + blockHeight < window.innerHeight)) {
        moreContainer.appendChild(addParagraph(topValue,leftValue,transformValue));
    }
}

function getRandomIndexExceptPrev(prev: number, max: number) {
    let randomIndex: number;
    do {
        randomIndex = Math.floor(Math.random() * max);
    } while (randomIndex === prev && max > 1);
    return randomIndex;
}

function addSrc() {
    const nextIndex = getRandomIndexExceptPrev(lastVideoIndex, LINK_VIDEO.length);
    lastVideoIndex = nextIndex;
    player.src = LINK_VIDEO[nextIndex] || '';
}

addSrc();

playBtn.addEventListener('click', () => {
    addSrc();
    player.load();
    player.play();
    createPositionForMore()
})
