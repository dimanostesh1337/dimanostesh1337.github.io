
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
    },

    // when window width is >= 640px
    640: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  },
  on: {
    init: function () {
      checkArrow();
    },
    resize: function () {
      checkArrow();
    }
  }
});

function checkArrow() {
  const swiperPrev = document.querySelector('.swiper-button-prev');
  const swiperNext = document.querySelector('.swiper-button-next');
  if (window.innerWidth < 640) {
    swiperPrev.style.display = 'None';
    swiperNext.style.display = 'None';
  }
}

const blocks = document.querySelectorAll('.service__item');

for (let i = 0; i < blocks.length; i++) {
  blocks[i].onmouseenter = function () {
    let option = this.childNodes[1].childNodes[5];
    option.style.display = 'block';
    window.setTimeout(
      function () {
        option.style.opacity = '1'
      }, 200)
    window.setTimeout(
      function () {
        option.classList.remove('disabled');
      }, 300)
  }

  blocks[i].onmouseleave = function () {
    let option = this.childNodes[1].childNodes[5];
    option.style.display = 'none';
    option.classList.add('disabled');
    window.setTimeout(
      function () {
        option.style.opacity = '0'
      }, 200)
  }
}


const projects = document.querySelectorAll('.projects__item');

for (let i = 0; i < projects.length; i++) {
  projects[i].onmouseenter = function () {
    let info = this.childNodes[5];
    info.style.display = 'flex';
    window.setTimeout(
      function () {
        info.style.opacity = '0.8'
      }, 200)
    window.setTimeout(
      function () {
        info.classList.remove('disabled');
      }, 300)
  }

  projects[i].onmouseleave = function () {
    let info = this.childNodes[5];
    window.setTimeout(
      function () {
        info.style.opacity = '0'
      }, 200)
    window.setTimeout(
      function () {
        info.classList.add('disabled');
      }, 300)
    info.style.display = 'none';
  }
}

const header_menu = document.querySelector('.header__menu');
document.querySelector('.header__menu-btn').onclick = (e) => {
  header_menu.classList.toggle('header__menu--disabled');
  document.querySelector('body').classList.toggle('shadow');
}