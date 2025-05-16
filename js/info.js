document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('open-info');
  const infoText = openBtn.querySelector('.info-text');
  const infoIcon = openBtn.querySelector('.info-icon');
  const letterContent = document.getElementById('letter-content');
  const confirmBtn = document.getElementById('confirm-btn2');
  const title = document.getElementById('title');
  const content = document.getElementById('content');
  const buttons = document.querySelectorAll('.action-button');

  const pages = {
    1: {
      title: 'INFORMATION',
      content: 'Name: Lê Quốc Khánh<br>Nickname: Tricker Lỏ, Kazuto<br>Height/Weight: 1M65/44Kg<br>Date of Birth: 17/04<br>Hometown: Đà Nẵng'
    },
    2: {
      title: 'OCCUPATION',
      content: '1: Học sinh<br>2: Gamer<br>3: Coder<br>4: Cuber<br>5: Editor'
    },
    3: {
      title: 'INTEREST',
      content: '1: Chơi game (AoV, HoK, Zsm, Genshin)<br>2: Đọc truyện tranh (Manwa, Manhua, Manga)<br>3: Đọc tiểu thuyết (Ln, Wn)<br>4: Xem phim<br>5: Edit video<br>6: Chơi rubik<br>7: Viết code'
    },
    4: {
      title: 'CONTACTS',
      content: 'Chưa gắn =))'
    }
  };

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  let currentButton = null;

  openBtn.addEventListener('click', () => {
    openBtn.classList.add('expand');
    infoText.style.display = 'none';

    setTimeout(() => {
      letterContent.classList.add('show');
    }, 100);
  });

  confirmBtn.addEventListener('click', () => {
    letterContent.classList.remove('show');

    setTimeout(() => {
      openBtn.classList.remove('expand');
      infoText.style.display = 'inline';
    }, 300);

    title.textContent = 'KONNICHIWA❤';
    content.innerHTML = 'Tôi là Quốc Khánh, 1 thằng otaku vô dụng chỉ biết ngày đêm ở trong nhà xem anime nhưng muốn vượt qua mọi thử thách để đến với thành công🗿🗿🗿';

    if (currentButton) {
      currentButton.classList.remove('clicked');
      currentButton.style.color = '';
      currentButton = null;
    }
  });

  function updatePage(pageId) {
    const page = pages[pageId];
    title.textContent = page.title;
    content.innerHTML = page.content;

    if (currentButton) {
      currentButton.classList.remove('clicked');
      currentButton.style.color = '';
    }

    currentButton = document.querySelector(`[data-page="${pageId}"]`);
    const randomColor = getRandomColor();
    currentButton.classList.add('clicked');
    currentButton.style.color = randomColor;
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const pageId = button.getAttribute('data-page');
      if (button === currentButton) {
        currentButton.classList.remove('clicked');
        currentButton.style.color = '';
        title.textContent = 'KONNICHIWA❤';
        content.innerHTML = 'Tôi là Quốc Khánh, 1 thằng otaku vô dụng chỉ biết ngày đêm ở trong nhà xem anime nhưng muốn vượt qua mọi thử thách để đến với thành công🗿🗿🗿';
        currentButton = null;
      } else {
        updatePage(pageId);
      }
    });
  });
});