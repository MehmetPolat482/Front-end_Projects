
let ulliDom = document.querySelector("#list");
let taskInput = document.querySelector("#task");
let li = document.querySelector("#list li")

document.addEventListener("DomContentLoaded", displayLocalStorage())

liveToastBtn.addEventListener("click", newList)

function newList(){
    if(taskInput.value){
        createList(taskInput.value)
        getLocalStorage(taskInput.value)
        taskInput.value = ""
    }else{
        $(".error").toast("show")
    }
}
function createList(todo){
    const ulliDOM = document.createElement("li")
    ulliDOM.innerHTML = todo
    list.appendChild(ulliDOM)

    const closeBtn = document.createElement("span")
    closeBtn.classList.add("close")
    closeBtn.textContent = "\u00D7"
    ulliDOM.append(closeBtn)
    
    closeBtn.onclick = removeList
    $(".success").toast("show")
    ulliDOM.onclick = finishToDo
}
function removeList(){
    this.parentElement.remove()
    deleteLocalStorage(this.previousSibling.textContent)
}

function finishToDo(){
    this.classList.toggle("checked")
}

function getLocalStorage(){
    let todo;
    if(localStorage.getItem("todos") === null){
        todo = [];
    }else{
        todo = JSON.parse(localStorage.getItem("todos"))
    }
    return todo;
}

function displayLocalStorage(){
    const todos = getLocalStorage()
    todos.forEach(todo => {
        createList(todo)
    });
}

function deleteLocalStorage(text){
    let todos = getLocalStorage()
    todos.forEach((todo, index) => {
        if(todo === text){
            todos.splice(index, 1)
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos))
}


//ALERT FOR EMPTY MESSAGE
function NewElement(){

    try{
        if(document.querySelector("#task").value == ""){
            throw "Lütfen boş bırakmayınız";
        }
    }
    catch(err){
        alert(err);
    }
}