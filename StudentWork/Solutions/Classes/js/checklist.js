"use strict";

var todoList = document.querySelector('.todo-list');
var todoForm = document.querySelector('.add-todo');
var removeList = document.querySelector('.remove-list');

  

//short circuit "or" tries to get from Web Storage, then JSON
var items = JSON.parse(localStorage.getItem('todoList')) || [
	{
    title: 'Learn JavaScript',
    done: false
  },
	{
    title: 'TypeScript',
    done: false
  }
  
];


function addTodo(e) {
  //e.preventDefault();
  var title = this.querySelector('[name=item]').value;
  var todo = {
    title: title,
    done: false
  };
  items.push(todo);
  saveTodos();
  this.reset();
  event.preventDefault();
}

function createList() {
  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var listTarget = arguments[1];

  listTarget.innerHTML = list.map(function (item, i) {
    return '<li><input type="checkbox" id="todo' + i + '" data-index="' + i + '"' + (item.done ? 'checked' : '') + ' /><label for="todo' + i + '">' + item.title + '<span class="remove" data-index="' + i + '">X</span></li>';
  }).join('');
}

function toggleDone(e) {
  //if(!e.target.matches('input')) return;
  var el = e.target;
  //dataset gets all data- attributes
  var index = el.dataset.index;
  items[index].done = !items[index].done;
  saveTodos();
}

function removeSingle(e) {
  if (e.target.className != "remove") {
  return;
saveTodos();  
  }
  
  var el = e.target;
  var index = el.dataset.index;
  items.splice(index, 1);
  saveTodos();
}

function saveTodos() {
  localStorage.setItem('todoList', JSON.stringify(items));
  createList(items, todoList);
}

function removeData() {
  items = [];
  localStorage.removeItem('todoList');
  createList(items, todoList);
 
}


todoList.addEventListener('click', toggleDone);
todoList.addEventListener('click', removeSingle);
todoForm.addEventListener('submit', addTodo);
removeList.addEventListener('click', removeData);

// Init list
createList(items, todoList);

//ES6
/*
"use strict";
const todoList = document.querySelector('.todo-list');
const todoForm = document.querySelector('.add-todo');
const removeList = document.querySelector('.remove-list');

let items = JSON.parse(localStorage.getItem('todoList')) 

|| [
	{
    title: 'Learn JavaScript',
    done: false
  }
  
  ,
	{
    title: 'TypeScript',
    done: false
  }
  
];

function addTodo(e) {
  //e.preventDefault();
  const title = (this.querySelector('[name=item]')).value;
  const todo = {
    title,
    done: false
  };
  items.push(todo);
  saveTodos();
  this.reset();
  event.preventDefault();
}

function createList(list = [], listTarget) {
  listTarget.innerHTML = list.map((item, i) => `<li>
      <input type="checkbox" id="todo${i}" data-index="${i}"
             ${item.done ? 'checked' : ''} />
      <label for="todo${i}">${item.title}
				<span data-index="${i}">X</span>
			</label>
    </li>`).join('');
}

function toggleDone(e) {
  //if(!e.target.matches('input')) return;
  const el = e.target;
  //dataset gets all data- attributes
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  saveTodos();
}

function removeSingle(e) {
  if(!e.target.matches('span')) return;
  const el = e.target;
  const index = el.dataset.index;
  items.splice(index, 1);
  saveTodos();
	//if(items.length === 0) {
		//removeList.classList.add('hidden');
	//}
}

function saveTodos() {
  localStorage.setItem('todoList', JSON.stringify(items));
  createList(items, todoList);
	//showRemoveButton();
}

function removeData() {
	items = [];
	localStorage.removeItem('todoList');
	createList(items, todoList);
	//removeList.classList.add('hidden');
}

//function showRemoveButton() {
	//if(items.length > 1) return;
	//removeList.classList.remove('hidden');
//}

todoList.addEventListener('click', toggleDone);
todoList.addEventListener('click', removeSingle);
todoForm.addEventListener('submit', addTodo);
removeList.addEventListener('click', removeData);

// Init list
createList(items, todoList);
*/
