window.addEventListener('load', function () {
  const notification = document.getElementById('notification');
  const button = document.getElementById('confirm-btn1');
  const audio = document.getElementById('background-music');

  if (notification && button && audio) {
    notification.style.display = 'flex';

    button.addEventListener('click', function () {
      notification.classList.add('hide');

      setTimeout(() => {
        notification.style.display = 'none';
        audio.play().catch(err => {
          alert("Trình duyệt chặn phát nhạc. Hãy click lại lần nữa.");
        });
      }, 500);
    });
  }
});