document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector("#desktop-video");
    const mobileVideo = document.querySelector("#mobile-video");
    
    if (window.innerWidth <= 768) {
        mobileVideo.load();
    } else {
        video.load();
    }
});

//coundown

function countdown() {
    const countDate = new Date("October 18, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);
  
    // Update numbers
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  
    // Calculate percentage for stroke-dashoffset
    const daysPercent = (days / 365) * 283;
    const hoursPercent = (hours / 24) * 283;
    const minutesPercent = (minutes / 60) * 283;
    const secondsPercent = (seconds / 60) * 283;
  
    // Set stroke-dashoffset for each circle
    document.getElementById("days-circle").style.strokeDashoffset = 283 - daysPercent;
    document.getElementById("hours-circle").style.strokeDashoffset = 283 - hoursPercent;
    document.getElementById("minutes-circle").style.strokeDashoffset = 283 - minutesPercent;
    document.getElementById("seconds-circle").style.strokeDashoffset = 283 - secondsPercent;
  }
  
  setInterval(countdown, 1000);
  

  //popup

  document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'flex';
});

document.querySelector('.popup-content .close-button').addEventListener('click', function() {
    document.getElementById('popupForm').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('popupForm')) {
        document.getElementById('popupForm').style.display = 'none';
    }
});
