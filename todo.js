var myDiv;
var built = false;

document.getElementById("ent").onclick = () => {
  addNewToDo(document.getElementById("userName").value);
  document.getElementById("userName").value = "";
}
document.getElementById("todo-remove-button").onclick = () => box();
document.getElementById("bb5").onclick = () => mainMenu();


function addNewToDo(inner) {
  let arr = getCookie("todolist").split("!@#$%^&*");
  arr.push(inner);
  addCookie("todolist", arr.join("!@#$%^&*"));
  addToToDoList(inner);
}

function box() {
	var subarr = myDiv.children;
  var i = subarr.length - 2;
	while (i >= 0) {
		if (subarr[i].checked) {
			const index = arr.indexOf(subarr[i].value);
			arr.splice(index, 1);
			myDiv.removeChild(subarr[i]);
			myDiv.removeChild(subarr[i]);
		}
    i -= 2;
	}
  addCookie("todolist", arr.join("!@#$%^&*"));
}

function setToDoList() {
  document.getElementById("MainMenu").hidden = true;
  document.getElementById("SetupTimer").hidden = true;
  document.getElementById("TimerOn").hidden = true;
  document.getElementById("abortedScreen").hidden = true;
  document.getElementById("ToDoList").hidden = false;
  if (!built) {
    myDiv = document.createElement("div");
    document.getElementById("cboxes").appendChild(myDiv);
    const things = getCookie("todolist").split("!@#$%^&*");
    console.log(things);
    if (things.length != 1) {
      for (let i = 0; i < things.length; i += 1) {
        addToToDoList(things[i]);
      }
    }
    built = true;
  }
}

function addToToDoList(inner) {
  let check = document.createElement("INPUT");
  check.setAttribute("type", "checkbox");
  check.name = inner;
  let label = document.createElement("LABEL");
  label.innerText = inner + "\n";
  label.className = "boxes";
  label.name = inner;
  myDiv.appendChild(check);
  myDiv.appendChild(label);
}
