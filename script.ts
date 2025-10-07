const playBtn = document.getElementById('playBtn') as HTMLButtonElement;
const iframe = document.getElementById('iframe') as HTMLIFrameElement;

const LINK_VIDEO = 'https://youtube.com/embed/nRbuLixWH1E?si=sm4CMpWYblVO5ISB';


playBtn.addEventListener('click', () => {
    iframe.src = `${LINK_VIDEO}`;
    iframe.width = '600';
    iframe.height = '600';
    iframe.hidden = false;
})


