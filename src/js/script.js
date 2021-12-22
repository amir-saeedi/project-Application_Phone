/////////////////////////////////////
// owl library for Carouse
const carouselOwl = function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
};
// astart Owl
const section3 = document.querySelector(".section-3");
const startOwl = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    carouselOwl();
    observer.unobserve(entry.target);
  }
};
const section_3_Observer = new IntersectionObserver(startOwl, {
  root: null,
  threshold: 0.15,
});
section_3_Observer.observe(section3);
//////////////////////////////////
// tooltip options
const footerTooltip = function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
};
footerTooltip();
/////////////////////////////////
// fade text
const moreText = function () {
  $(function () {
    $(".paragraph_more").fadeToggle(0);
    $(".click_close_text").fadeToggle(0);
    $(".click_more_text").click(function () {
      $(this).fadeToggle(0);
      $(".paragraph_more").fadeToggle(1500);
      $(".click_close_text").fadeToggle(1500);
    });
    $(".click_close_text").click(function () {
      $(this).fadeToggle(0);
      $(".paragraph_more").fadeToggle(0);
      $(".click_more_text").fadeToggle(1500);
    });
  });
};
moreText();
///////////////////////////
// Reveal section
const sections = document.querySelectorAll(".section");
const articelImg = document.querySelector(".articel_img");
const articelText = document.querySelector(".articel_text");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove("section--hidden");
    if (entry.target.classList.contains("section_articel")) {
      articelImg.classList.add("animate__backInLeft");
      articelImg.classList.add("animate__slow");
      articelText.classList.add("animate__backInRight");
      articelText.classList.add("animate__slow");
    }
    observer.unobserve(entry.target);
  }
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
sections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
//////////////////////////
// Sticky navigation
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (enteries) {
  const [entry] = enteries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
const stackyObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
stackyObserver.observe(header);
