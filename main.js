let one = document.querySelector(".one");
let Two = document.querySelector(".Two");
let Three = document.querySelector(".Three");
let stats = true;

window.addEventListener("scroll", function () {
  if (this.scrollY >= 1300) {
    if (stats === true) {
      Two.style.transform = " skewy(5deg) translatey(0)";
      Three.style.transform = "skewy(-5deg) translatey(0)";
      one.style.opacity = "1";
      Two.style.opacity = "1";
      Three.style.opacity = "1";
      stats = false;
    } else {
      Two.style.transform = "skewy(100deg) translatey(600)";
      Three.style.transform = "skewy(10deg) translatey(600)";
      stats = true;
    }
  }
});

let prime = document.querySelectorAll(".prime");
let oneText = document.querySelector(".one-text");
let text = document.querySelector(".text");
let TwoText = document.querySelector("#parg");
let ThreeText = document.querySelector(".three-text");
prime.forEach(function (e, bigtext) {
  e.addEventListener("mouseover", function (c) {
    TwoText.textContent = e.alt;
    text.style.opacity = "1";
  });
});

let bar = document.querySelector(".nav");
let icons = document.querySelector(".icons");

// عند تغيير حجم الشاشة
window.addEventListener("resize", function () {
  if (window.innerWidth > 767) {
    // إزالة الكلاس للشاشات الكبيرة
    bar.classList.remove("bar");
  }
});

// عند النقر على الأيقونة
icons.onclick = function () {
  if (window.innerWidth <= 767) {
    // إضافة أو إزالة الكلاس فقط للشاشات الصغيرة
    bar.classList.toggle("bar");
  }
};

let firstNews = document.querySelector(".first-news");
let newsTwo = document.querySelector(".news-two");
let threeTwo = document.querySelector(".three-two");
let btn = document.querySelectorAll(".btn");
let pressCount = 0; // عداد لمعرفة عدد الضغطات

btn.forEach(function (e) {
  e.onclick = function () {
    pressCount++; // زياد العد عند كل ضغط

    if (pressCount === 1) {
      // الضغط الأول: إخفاء الجزء الأول و إظهار الجزء الثاني
      firstNews.classList.add("hide-news");
      firstNews.classList.remove("show-news");
      newsTwo.classList.add("show-news");
      newsTwo.classList.remove("hide-news");
      threeTwo.classList.add("hide-news");
      threeTwo.classList.remove("show-news");
    } else if (pressCount === 2) {
      // الضغط الثاني: إخفاء الجزء الثاني و إظهار الجزء الثالث
      newsTwo.classList.add("hide-news");
      newsTwo.classList.remove("show-news");
      threeTwo.classList.add("show-news");
      threeTwo.classList.remove("hide-news");
    } else if (pressCount === 3) {
      // الضغط الثالث: إظهار الجزء الأول و إخفاء الجزء الثالث
      firstNews.classList.add("show-news");
      firstNews.classList.remove("hide-news");
      threeTwo.classList.add("hide-news");
      threeTwo.classList.remove("show-news");

      pressCount = 0; // إعادة العد بعد الضغط الثالث
    }
  };
});

let info = document.querySelector(".info");

let subtitles = document.querySelector(".subtitle");
let btnBot = document.querySelectorAll(".btn-bot button");
btnBot.forEach(function (e) {
  e.addEventListener("click", function () {
    let one = e.closest(".big").querySelector(".subtitle");
    let two = e.closest(".big").querySelector("img");
    one.classList.toggle("top");
    two.classList.toggle("trnsform");
  });
});
