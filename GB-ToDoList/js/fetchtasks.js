let tasks = [];
let counter = 1;
class Task {
  constructor(name) {
    this.name = name;
    this.id = counter;
    counter++;
    tasks.push({ nome: this.name, id: this.id });
  }
}
const checkTasks = (task) => {
  const tasksContainer = document.getElementById("tasks");
  const newTask = document.createElement("div");
  newTask.classList = "task";
  const text = document.createElement("p");
  text.appendChild(document.createTextNode(`${task.name}`));
  const btn = document.createElement("button");
  btn.classList = "actionbutton";
  btn.innerHTML = "Remover";
  btn.addEventListener("click", () => {
    tasksContainer.removeChild(newTask);
    tasks = tasks.filter((taskitem) => {
      return taskitem.id != task.id;
    });
    alert(`Removed Task ${task.name}`);
  });
  newTask.appendChild(text);
  newTask.appendChild(btn);
  tasksContainer.appendChild(newTask);
};
const createTask = document.getElementById("taskcreate");
const taskName = document.getElementById("taskname");
createTask.addEventListener("click", () => {
  if (taskName.value != "") {
    let task = new Task(taskName.value);
    checkTasks(task);
  } else {
    alert("Insira um nome para a tarefa");
  }
});
