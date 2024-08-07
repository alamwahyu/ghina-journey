'use strict';



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

const id = document.getElementById("id");
const name = document.getElementById("name");
const wish = document.getElementById("wish");
const addBtn = document.getElementById("addBtn")

// // Token API bot Telegram
// const token = '7137553258:AAG11zgRvStTzEmcn9mvolFYem2JNNecx8w';

// // Fungsi untuk meminta pembaruan dari bot API menggunakan long polling
// function getUpdates() {
//     fetch(`https://api.telegram.org/bot7137553258:AAG11zgRvStTzEmcn9mvolFYem2JNNecx8w/getUpdates`)
//         .then(response => response.json())
//         .then(data => {
//             // Cek apakah ada pesan baru
//             if (data.result.length > 0) {
//                 const message = data.result[0].message.text;
//                 // Tampilkan pesan di halaman web
//                 document.getElementById('messagetele').innerText = message;
//             }
//         })
//         .catch(error => console.error('Error:', error));
// }

// // Panggil fungsi getUpdates setiap 5 detik
// setInterval(getUpdates, 30000);



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");
var audio = document.getElementById('background-music');

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);

// function toggle(event){
//   const button = document.querySelector("button");

//   // Prevent default link behavior
  
//   event.preventDefault();
//   event.stopPropagation();

//   // Get the closest parent element with the class 'doctor-card'
//   var doctorCard = event.currentTarget.closest('.doctor-card');
//   var wishes = doctorCard.querySelector(".wishes");
//   var video = wishes.querySelector("video");
  
//   // Toggle the active class on the wishes container
//   wishes.classList.toggle("active");
  
//   // Pause the video and reset its current time if the wishes container is not active
//   if (!wishes.classList.contains("active")) {
//     video.pause();
//     video.currentTime = 0;
//   }
//   if (audio.paused) {
//     audio.play();
//     button.style.backgroundImage = "url('./assets/images/music.png')";
//     button.classList.add('rotating');
//    }else{
//     audio.pause();
//     button.style.backgroundImage = "url('./assets/images/play.png')";
//     button.classList.remove('rotating');
//    }
// }

function toggle(event) {
  const button = document.querySelector("button");

  // Prevent default link behavior
  event.preventDefault();
  event.stopPropagation();

  // Get the closest parent element with the class 'doctor-card'
  var doctorCard = event.currentTarget.closest('.doctor-card');
  var wishes = doctorCard.querySelector(".wishes");
  var iframe = wishes.querySelector("iframe");

  // Toggle the active class on the wishes container
  wishes.classList.toggle("active");

  // Pause the video and reset its current time if the wishes container is not active
  if (!wishes.classList.contains("active")) {
      var src = iframe.src;
      iframe.src = src; // This will reload the iframe to stop the video
  }

  if (audio.paused) {
      audio.play();
      button.style.backgroundImage = "url('./assets/images/music.png')";
      button.classList.add('rotating');
  } else {
      audio.pause();
      button.style.backgroundImage = "url('./assets/images/play.png')";
      button.classList.remove('rotating');
  }
}

/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

  // Function to toggle play/pause
function togglePlay(button) {
    if (audio.paused) {
         audio.play();
         button.style.backgroundImage = "url('./assets/images/music.png')";
         button.classList.add('rotating');
        } else {
         audio.pause();
         button.style.backgroundImage = "url('./assets/images/play.png')";
         button.classList.remove('rotating');
        }
    }

        // Remove 'muted' attribute to start playing sound when user interacts
        window.addEventListener('click', function() {
            if (audio.muted) {
                audio.muted = false;
            }
        });

        // Autoplay music when page loads
        window.addEventListener('load', function() {
          const button = document.querySelector("button");
          audio.play();
          button.style.backgroundImage = "url('./assets/images/music.png')";
          button.classList.add('rotating');
      });


function timeAgo(date) {
            const now = new Date();
            const secondsPast = (now.getTime() - date.getTime()) / 1000;
            if (secondsPast < 60) {
                return `${Math.round(secondsPast)} detik yang lalu`;
            } else if (secondsPast < 3600) {
                return `${Math.round(secondsPast / 60)} menit yang lalu`;
            } else if (secondsPast <= 86400) {
                return `${Math.round(secondsPast / 3600)} jam yang lalu`;
            } else {
                const day = date.getDate();
                const month = date.toDateString().match(/ [a-zA-Z]*/)[0].trim();
                const year = date.getFullYear() == now.getFullYear() ? "" : ` ${date.getFullYear()}`;
                return `${day} ${month}${year}`;
            }
        }

// Function to open the modal
function openModal(event, element) {
  event.preventDefault(); // Prevent the default action (navigation)
  var modal = document.getElementById("myModal");
  var modalBody = document.getElementById("modalBody");

  // Get the content from data-content attribute of the clicked element
  var content = element.getAttribute("data-content");

  // Set the content of the modal body
  modalBody.innerHTML = `<p class="card-text">${content}</p>`;

  // Display the modal
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Function to initialize event listeners for closing modal by clicking outside of it
function initializeModal() {
  var modal = document.getElementById("myModal");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          closeModal();
      }
  }
}

var j = 0;
var txt = '"God Plans are the Best Plans."';
var speed = 80;
function typeWriter(){
  if (j < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(j);
    j++;
    setTimeout(typeWriter, speed);
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Set the date we're counting down to
var countDownDate = new Date("August 12, 2024 06:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in elements with respective IDs
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerText = "0";
    document.getElementById("hours").innerText = "0";
    document.getElementById("minutes").innerText = "0";
    document.getElementById("seconds").innerText = "0";
  }
}, 1000);

// Initialize modal functionality when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeModal);

