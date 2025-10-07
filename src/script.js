const playBtn = document.getElementById('playBtn');
const iframe = document.getElementById('iframe');
const LINK_VIDEO = 'https://youtube.com/embed/nRbuLixWH1E?si=sm4CMpWYblVO5ISB';
//         player.playVideo();
//     }
// });
playBtn.addEventListener('click', () => {
    iframe.src = `${LINK_VIDEO}`;
    iframe.width = '600';
    iframe.height = '600';
    iframe.hidden = false;
});
export {};
