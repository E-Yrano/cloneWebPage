const toDoLists= document.querySelector('#toDoListForm');
const toDoListsInput= toDoLists.querySelector("input");
const toDoListBtn= toDoLists.querySelector("button");
const userToDoList= toDoLists.querySelector("#userToDoList");
let toDos = [];
if (localStorage.getItem('toDos') != null){
    toDos= JSON.parse(localStorage.getItem('toDos'));
    toDos.forEach(paintToDoList);
};

function delList(event){
    const doList = event.target.parentElement;
    doList.classList.add('fade-out');
    localStorage.setItem('toDos', (JSON.stringify(toDos.filter(lists => lists.id != doList.id))))
    toDos = JSON.parse(localStorage.getItem('toDos'));
    doList.remove();
};

function paintToDoList(item){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    delBtn.addEventListener('click', delList);
    span.innerText = item.text;
    delBtn.innerText = "✔";
    delBtn.className = "checkBtn";
    li.id = item.id;
    li.classList.add('fade-in');
    li.appendChild(span);
    li.appendChild(delBtn);
    userToDoList.appendChild(li);
};

function submitToDoList(){
    const userInput= toDoListsInput.value;
    if (userInput===''){
        return;
    }
    else {
        const toDoObj = {
            text : userInput,
            id : Date.now()
        };
        toDos.push(toDoObj);
        localStorage.setItem('toDos', JSON.stringify(toDos));
        userToDoList.innerHTML = '';
        toDos.forEach(paintToDoList);
    };
};

toDoListBtn.addEventListener('click', submitToDoList);
