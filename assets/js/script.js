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

function toggle(event){
  const button = document.querySelector("button");

  // Prevent default link behavior
  
  event.preventDefault();
  event.stopPropagation();

  // Get the closest parent element with the class 'doctor-card'
  var doctorCard = event.currentTarget.closest('.doctor-card');
  var wishes = doctorCard.querySelector(".wishes");
  var video = wishes.querySelector("video");
  
  // Toggle the active class on the wishes container
  wishes.classList.toggle("active");
  
  // Pause the video and reset its current time if the wishes container is not active
  if (!wishes.classList.contains("active")) {
    video.pause();
    video.currentTime = 0;
  }
  if (audio.paused) {
    audio.play();
    button.style.backgroundImage = "url('./assets/images/music.png')";
    button.classList.add('rotating');
   }else{
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

var i = 0;
var txt = '"God Plans are the Best Plans."';
var speed = 80;
function typeWriter(){
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Initialize modal functionality when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeModal);