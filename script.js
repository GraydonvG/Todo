var button = document.getElementById("enter");
var ul = document.querySelector("ul");
var userinput = document.getElementById("userinput");

function inputLength() {
  return userinput.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var textNode = document.createTextNode(userinput.value);
  var span = document.createElement("span");
  span.appendChild(textNode);
  li.appendChild(span);
  ul.appendChild(li);
  userinput.value = "";
  span.onclick = toggleDone;

  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete");
  deleteBtn.innerText = "Delete";
  li.appendChild(deleteBtn);
  deleteBtn.onclick = removeParent;
}

function addItemBtn() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addItemKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

function removeParent(eForEvent) {
  eForEvent.target.parentNode.remove();
}

function toggleDone(anotherEvent) {
  anotherEvent.target.classList.toggle("done");
}

button.addEventListener("click", addItemBtn);
userinput.addEventListener("keypress", addItemKeypress);
