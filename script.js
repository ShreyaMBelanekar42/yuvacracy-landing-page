window.onload = function () {
  var loader = document.getElementById("loader");
  loader.style.display = "none";
};

var upcomingBtn = document.getElementById("upcomingBtn");
var recentBtn = document.getElementById("recentBtn");
var toggleValue = true;


upcomingBtn.addEventListener("click", function () {
  toggleValue = true;
  updateData(toggleValue);
  toggleButtonStyles();
});

recentBtn.addEventListener("click", function () {
  toggleValue = false;
  updateData(toggleValue);
  toggleButtonStyles();
});


var swiperWrapper = document.getElementsByClassName("swiper-wrapper")[0];
var upcomingData = [
  {
    title: "Science, technology, engineering, and mathematics Education",
    url: "/assets/1.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Online",
  },
  {
    title: "Deep Analysis of Indian Budget 2023-24 ",
    url: "/assets/2.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Online",
  },
  {
    title: "Advantage & Disadvantage of Education System of India",
    url: "/assets/3.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Online",
  },
  {
    title: "College Education is not enough to get job in India",
    url: "/assets/4.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Online",
  },
  {
    title: "Why now Skill is preferred over Experience ",
    url: "/assets/5.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Online",
  },
  {
    title: "Science, technology, engineering, and mathematics Education",
    url: "/assets/1.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Online",
  },
  {
    title: "Deep Analysis of Indian Budget 2023-24 ",
    url: "/assets/2.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Online",
  },
  {
    title: "Advantage & Disadvantage of Education System of India ",
    url: "/assets/3.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Online",
  },
  {
    title: "College Education is not enough to get job in India",
    url: "/assets/4.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Online",
  },
  {
    title: "Why now Skill is preferred over Experience ",
    url: "/assets/5.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Online",
  },
];

var recentData = [
  {
    title: "Why now Skill is preferred over Experience ",
    url: "/assets/5.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Offline",
  },
  {
    title: "College Education is not enough to get job in India",
    url: "/assets/4.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Offline",
  },
  {
    title: "Advantage & Disadvantage of Education System of India ",
    url: "/assets/3.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Offline",
  },
  {
    title: "Deep Analysis of Indian Budget 2023-24 ",
    url: "/assets/2.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Offline",
  },
  {
    title: "Science, technology, engineering, and mathematics Education",
    url: "/assets/1.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Offline",
  },
  {
    title: "Why now Skill is preferred over Experience ",
    url: "/assets/5.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Offline",
  },
  {
    title: "College Education is not enough to get job in India",
    url: "/assets/4.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Offline",
  },
  {
    title: "Advantage & Disadvantage of Education System of India ",
    url: "/assets/3.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Offline",
  },
  {
    title: "Deep Analysis of Indian Budget 2023-24 ",
    url: "/assets/2.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Offline",
  },
  {
    title: "Science, technology, engineering, and mathematics Education",
    url: "/assets/1.png",
    date: "25 May 2023",
    time: "9 AM-12 PM",
    type: "Offline",
  },
];

var swiper = null;

function updateData(toggleValue) {
  var data = toggleValue ? upcomingData : recentData;
  mapData(data);
}

function mapData(data) {
  if (swiper) {
    swiper.destroy();
    swiper = null;
  }
  swiperWrapper.innerHTML = "";
  var slides = data.map(function (item) {
    var slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `
      <img class="w-[100%] rounded-t-[1rem] xl:object-cover h-[11rem]  " src=${item.url} alt="" srcset="" />
        <div class="px-[1rem] py-[1rem] flex flex-col gap-[.8rem] " >
          <h2 class=" text-primary font-nunito font-[800] text-[1.3rem] " >${item.title}</h2>
            <div class="flex flex-row justify-between" >
              <h3 class="text-primary_1 font-[600] text-[.9rem]" >${item.date}</h3>
              <p class="text-primary_1 font-[800] mr-[1.5rem] text-[.9rem]" >${item.type}</p>
            </div>
        <div class="flex justify-between " >
    <button class="mt-[1rem] button rounded-[.5rem] md_phone:w-[12rem] w-[8rem]  h-[3rem]">Register</button>
        <div class=" flex flex-col justify-end gap-[.5rem] " >
          <i class="fa-solid fa-calendar-days text-primary_2 opacity-80 flex justify-center text-[1.45rem] "></i>
          <p class="text-primary_1 font-[600] text-[.9rem]" >${item.time}</p>
      </div>
    </div>
</div>
    `;
    return slide;
  });

  slides.forEach(function (slide) {
    swiperWrapper.appendChild(slide);
  });

  swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    speed: 400,
    spaceBetween: 80,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1080: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
}

function toggleButtonStyles() {
  if (toggleValue) {
    upcomingBtn.classList.add("bg-primary", "text-white");
    recentBtn.classList.remove("bg-primary", "text-white");
    upcomingBtn.classList.remove("bg-gray-100", "text-primary");
    recentBtn.classList.add("bg-gray-100", "text-primary");
  } else {
    upcomingBtn.classList.remove("bg-primary", "text-white");
    recentBtn.classList.add("bg-primary", "text-white");
    upcomingBtn.classList.add("bg-gray-100", "text-primary");
    recentBtn.classList.remove("bg-gray-100", "text-primary");
  }
}

updateData(toggleValue);