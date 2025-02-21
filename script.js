document.addEventListener("DOMContentLoaded", function () {
  const logosSlide = document.querySelector(".logos-slide");
  const logosContainer = document.querySelector(".logos");

  // Clone the slide to create an infinite loop effect
  const clone = logosSlide.cloneNode(true);
  logosContainer.appendChild(clone);

  // Ensure the container has the correct width
  function updateWidth() {
    const totalWidth = logosSlide.scrollWidth;
    logosContainer.style.width = `${totalWidth * 2}px`;
  }

  updateWidth();
});

// slider

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

// slider mobile

// faq

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const accordionItem = this.parentElement;
    const content = accordionItem.querySelector(".accordion-content");
    const toggleIcon = this.querySelector(".accordion-toggle img");

    // Close all other accordions
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("active");
        item.querySelector(".accordion-content").style.display = "none";
        item.querySelector(".accordion-toggle img").src =
          "./assets/down-arrow.png";
      }
    });

    // Toggle the clicked accordion
    if (content.style.display === "block") {
      content.style.display = "none";
      accordionItem.classList.remove("active");
      toggleIcon.src = "./assets/down-arrow.png";
    } else {
      content.style.display = "block";
      accordionItem.classList.add("active");
      toggleIcon.src = "./assets/up-arrow.png";
    }
  });
});

// responsive functions

//navbar
