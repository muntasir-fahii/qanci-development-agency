var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 1;
  const slides = document.querySelectorAll(".slide-item");
  const slideWidth = slides[0].offsetWidth + 10;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  slideContainer.appendChild(firstClone);
  slideContainer.prepend(lastClone);

  const allSlides = document.querySelectorAll(".slide-item");
  slideContainer.style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;

  function updateSlider() {
    slideContainer.style.transition = "transform 0.5s ease-in-out";
    slideContainer.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
  }

  nextBtn.addEventListener("click", function () {
    if (currentIndex >= allSlides.length - 1) {
      setTimeout(() => {
        slideContainer.style.transition = "none";
        currentIndex = 1;
        slideContainer.style.transform = `translateX(-${
          currentIndex * slideWidth
        }px)`;
      }, 500);
    }
    currentIndex++;
    updateSlider();
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex <= 0) {
      setTimeout(() => {
        slideContainer.style.transition = "none";
        currentIndex = allSlides.length - 2;
        slideContainer.style.transform = `translateX(-${
          currentIndex * slideWidth
        }px)`;
      }, 500);
    }
    currentIndex--;
    updateSlider();
  });
});
