// Визначення функції, яка буде викликана при прокручуванні сторінки
window.onscroll = function() {
  // Отримання елементу з контентом
  var content = document.getElementById("content");
  
  // Перевірка, чи прокручено сторінку вниз
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // Якщо так, то додати клас 'highlighted' до контенту
    content.classList.add("highlighted");
  } else {
    // Інакше видалити клас 'highlighted'
    content.classList.remove("highlighted");
  }
};

// comment

"use strict";

const  userId = {
  name: null,
  identify: null,
  image: null,
  message: null,
  date: null
}

const userComment = document.querySelector(".usercomment");
const publishbtn = document.getElementById("publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");

userComment.addEventListener("input", e => {
  if(!userComment.value) {
    publishbtn.setAttribute("disabled", "disabled");
    publishbtn.classList.remove("abled")
  }else {
    publishbtn.removeAttribute("disabled")
    publishbtn.classList.add("abled")
  }
})


function addComment() {
  console.log("click btn post comment");
  if(!userComment.value) return;
  userId.name = userName.value;
  if(userId.name === "Anonymous") {
    userId.identify = false;
    userId.image = "../photos/user.png"
  }
  else{
    userId.identify = true;
    userId.image = "../photos/user.png"
  }

  userId.message = userComment.value;
  userId.date = new Date().toLocaleString();
  let published =
  `<div class="parents">
   <!-- <img src="${userId.image}"> -->
    <div>
     <h1>${userId.name}</h1>
     <p>${userId.message}</p>
     <div class="engagements"><img src="like.png" alt=""><img src="share.png" alt=""></div>
     <span class="date">${userId.date}</span>
    </div>
  </div>`;

  comments.innerHTML += published;
  userComment.value = "";

  let commentsNum = document.querySelector(".parents").length;
  document.getElementById("comment").textContent = commentsNuml
}

publishbtn.addEventListener("click", addComment)

// galary
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Show the first slide initially
showSlide(currentSlide);


/* COMMENT */

const commentBox = require('commentbox.io');

commentBox('my-project-id');