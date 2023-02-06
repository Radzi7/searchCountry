"use strict";

const toast = document.querySelector(".toast"),
  notif = document.querySelector(".notif"),
  submitForm = document.querySelector("#submitform"),
  taskTitle = document.querySelector("#task"),
  doneTask = document.querySelector("#done"),
  progressTask = document.querySelector("#progress"),
  mainList = document.querySelector(".list"),
  delTask = document.querySelectorAll(".del"),
  editTask = document.querySelectorAll(".edit"),
  checkTask = document.querySelectorAll(".check");

//=============== TASK LIST =====================
let task = [
  { id: Date.now(), title: "Lorem ipsum", status: true },
  { id: Date.now(), title: "Lorem lorem lorem", status: false },
  { id: Date.now(), title: "Ipsum ipsum ipsum", status: true },
];

function renderTaskList(tasklist) {
  if (tasklist.length) {
    tasklist.forEach((task) => {
      const taskItem = createElement(
        "li",
        "w-full p-3 flex justify-between shadow-lg bg-white rounded-md mb-3",
        `<p class="text-xl text-[#5a5a5a]">${task.title}</p>
    <div class="brn-group flex justify-between">
    <i  data-del="${
      task.id
    }" class="del bx bx-trash text-2xl text-red-400 active:text-red-800 mx-2 cursor-pointer"></i>
    <i  data-edit="${
      task.id
    }" class="edit bx bx-edit text-2xl text-sky-400 active:text-sky-800 mx-2 cursor-pointer"></i>
    <i  data-check="${task.id}" class="check bx bx-check-circle text-2xl ${
          task.status
            ? "text-green-600 active:text-green-800"
            : "text-black active:text-[#3a3a3a]"
        } mx-2 cursor-pointer"></i>
    </div>`
      );
      mainList.append(taskItem);
    });
  } else {
    mainList.innerHTML =
      "<h2 class='text-center text-xl text-red-500'>NOT FOUND !</h2>";
  }
}

renderTaskList(task);
