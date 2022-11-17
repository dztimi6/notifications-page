"use script";

const readAllBtn = document.getElementById("read-all-btn");
const notificationCount = document.getElementById("notification-number");
const unreadMessage = document.querySelectorAll(".unread");
const redDot = document.querySelectorAll(".sign");

const readMessage = function () {
  for (let i = 0; i < unreadMessage.length; i++) {
    unreadMessage[i].classList.remove("unread");
    console.log(unreadMessage[i]);
  }
};

const removeDot = function () {
  for (let i = 0; i < redDot.length; i++) {
    redDot[i].classList.add("hidden");
    console.log(redDot[i]);
  }
};

document.onclick = function (event) {
  if (event.target.id === "read-all-btn") {
    readMessage();
    removeDot();
    notificationCount.textContent = "0";
  }
};
