// storage.js
// Add input and button
// when clicked
    // get the content of the input
    // if there is input content, insert it on local storage
// Add a new function to our javascript file called setUser
    // should be called when the page loads
    // should check to see if a user name has already been set in localStorage
    // If it finds one it should get it and render it to the page.
// <label for="userName">Enter Name</label>
// <input name="userName" id="userName" />
// <button id="submitName">Enter</button>

let tasks = [];
const nameButton = document.querySelector("#submitName");

function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span> 
      </div>
    </li>`
}
// data-action attributes help us identify what action to take when an icon is clicked
// html lets you create attributes on the fly based on the state of the data
// do data- and the name of the attribute you want to create
function renderTasks(tasks) {
  // get the list element from the DOM
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
  const html = tasks.map(taskTemplate).join("");
  listElement.innerHTML = html;
}

function newTask() {
  // get the value entered into the #todo input
  const task = document.querySelector("#todo").value;
  // add it to our arrays tasks
  tasks.push({ detail: task, completed: false });
  // render out the list
  renderTasks(tasks);
}

function removeTask(taskElement) {
  // Notice how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );
  taskElement.remove();
}

function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector('p').innerText
  );
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  taskElement.classList.toggle("strike");
  console.log(tasks);
}

function manageTasks(e) {
  // did they click the delete or complete icon?
  console.log(e.target);
  const parent = e.target.closest("li");
  if (e.target.dataset.action === "delete") {
    removeTask(parent);
  }
  if (e.target.dataset.action === "complete") {
    completeTask(parent);
  }
}










function setUserName() {
  const nameInput = localStorage.getItem("userName");
  if (nameInput) {
    document.querySelector("userName").innerText = nameInput;
  }
}

function userNameHandler() {
  const nameInput = document.querySelector("#userName").value;
  localStorage.setItem("userName", nameInput);
  setUserName();
  renderTasks(tasks);
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);
nameButton.addEventListener("click", userNameHandler);

// render  the initial list of tasks (if any) when the page loads
setUserName();


// function init() {
//   // when the page loads:
//   // check for local storage for a second time
//   const name = localStorage.getItem(name)
//     if(name) {
//       document.querySelector(".user").textContent = name;
//     }
//   renderTasks(tasks);
// }
// Add your event listeners here

   // // get the content of the input
    // const name = document.querySelector("#userName");
    // // if there is input content, insert it on local storage
    // if (nameInput.value) {
    //     // instert name into local storage
    //     localStorage.setItem("name", nameInput.value);
    //     document.querySelector(".user").textContent = nameInput.value;
