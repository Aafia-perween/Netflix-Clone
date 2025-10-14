const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});



const buttons = document.querySelectorAll(".btn.btn-rounded");
buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    window.location.href = "secondpage.html";
  });
});



const track = document.querySelector('.carousel-track');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  let currentSlide = 0;
  const itemsPerSlide = 5;
  const itemWidth = 220; // 200px + 20px margin
  const totalItems = track.children.length;
  const maxSlide = Math.ceil(totalItems / itemsPerSlide) - 1;

  function updateCarousel() {
    const offset = currentSlide * itemsPerSlide * itemWidth;
    track.style.transform = `translateX(-${offset}px)`;
  }

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


