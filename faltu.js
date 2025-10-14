document.addEventListener("DOMContentLoaded", function () {
  // 🔴 FAQ Toggle Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  // 🔵 Tabs Logic
  const tabItems = document.querySelectorAll('.tab-item');
  const tabContentItems = document.querySelectorAll('.tab-content-item');

  function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
  }

  function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
  }

  function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
  }

  tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
  });

  // 🟢 Button Redirect Logic
  const buttons = document.querySelectorAll(".btn.btn-rounded");
  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      window.location.href = "secondpage.html";
    });
  });

  // 🟣 Carousel Logic
  const track = document.querySelector('.carousel-track');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  let currentSlide = 0;
  const itemsPerSlide = 5;
  const itemWidth = 220;
  const totalItems = track ? track.children.length : 0;
  const maxSlide = Math.ceil(totalItems / itemsPerSlide) - 1;

  function updateCarousel() {
    const offset = currentSlide * itemsPerSlide * itemWidth;
    track.style.transform = `translateX(-${offset}px)`;
  }

  if (rightArrow && leftArrow && track) {
    rightArrow.addEventListener('click', () => {
      if (currentSlide < maxSlide) {
        currentSlide++;
        updateCarousel();
      }
    });

    leftArrow.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateCarousel();
      }
    });
  }
});
