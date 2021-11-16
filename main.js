const inputText = document.querySelector(".input-text");
const inputBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");

// EVENT
todoList.addEventListener("click", (e) => {
  if (e.target.className === "done-btn") {
    e.target.parentNode.classList.toggle("done");
    const element = e.target.parentNode;
    // console.log(element);
    ceheckStatusForDone(element);
  } else {
    return;
  }
});
todoList.addEventListener("click", (e) => {
  if (e.target.className === "delete-btn") {
    e.target.parentNode.remove();
    checkStatus();
  } else {
    return;
  }
});

inputBtn.addEventListener("click", function createLi(event) {
  event.preventDefault();
  getList();
});

//DEFINE FUNCTIOM
function getList() {
  if (inputText.value === "") {
    return;
  }
  const li = document.createElement("li");
  li.classList.add("item");
  const div = document.createElement("div");
  div.textContent = inputText.value;
  div.classList.add("text-box");
  li.appendChild(div);

  const doneButton = document.createElement("button");
  doneButton.classList.add("done-btn");
  doneButton.textContent = "done";
  li.appendChild(doneButton);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "delete";
  li.appendChild(deleteButton);
  todoList.appendChild(li);

  checkStatus();

  inputText.value = "";
}

function checkStatus() {
  const $item = document.querySelectorAll(".item");
  const $remain = document.querySelector(".remain");
  let thingsToDo = $item.length;
  $remain.textContent = thingsToDo;
}

function ceheckStatusForDone(element) {
  console.log(element);
  let current = 0;
  const $item = document.querySelectorAll(".item");
  const $remain = document.querySelector(".remain");
  let thingsToDo = $item.length;
  if (element.classList.contains("done")) {
    current = thingsToDo--;
    $remain.textContent = current;
  } else {
    thingsToDo = $item.length;
  }
  // console.log(thingsToDo
  $remain.textContent = thingsToDo;
}
