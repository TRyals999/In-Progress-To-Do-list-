const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const filterButtons = document.querySelectorAll('.filters button');

let tasks = [];

function loadTasks(){
	const saved = localStorage.getItem("tasks");
	const parsed = saved ? JSON.parse(saved) : [];
	tasks = Array.isArray(parsed) ? parsed : [];
}


function saveTasks(){
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

let currentFilter = "all";

function renderTasks(filter = "all") {

	taskList.innerHTML = "";

	tasks.forEach((task, index) => {
		if(
			filter === "all" ||
			(filter === "active" && !task.completed) ||
			(filter === "completed" && task.completed)
			
			){

			const li = document.createElement("li");
		li.textContent = task.text;

		if(task.completed){
			li.style.textDecoration = "line-through";
		}

		li.addEventListener("click", () => {
			toggleTasks(index);
		})

		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "Delete";

		deleteBtn.addEventListener("click", (e) => {
			e.stopPropagation();
			deleteTask(index);
		});

		li.appendChild(deleteBtn);
		taskList.appendChild(li);
		}
	});
}
	

function addTask(){

	const text = taskInput.value.trim();
	if(text === '') return;
	tasks.push({ text, completed: false });
	taskInput.value = '';
	saveTasks();
	renderTasks(currentFilter);
}

function deleteTask(index){
	tasks.splice(index, 1);
	saveTasks();
	renderTasks(currentFilter);
}

function toggleTask(index){
	tasks[index].completed = !tasks[index].completed;
	saveTasks();
	renderTasks(currentFilter);
}



addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => {
	if(e.key === 'Enter') addTask();
});

filterButtons.forEach(btn => {
	btn.addEventListener('click', () => {
		currentFilter = btn.dataset.filter;
		renderTasks(currentFilter);
	});
});

// Load tasks on page load
loadTasks();
renderTasks(currentFilter);