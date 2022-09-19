const button = document.getElementById("enter");
const ul = document.querySelector("ul");
const userinput = document.getElementById("userinput");

const inputLength = () => userinput.value.length;

const createListElement = () => {
  const li = document.createElement("li");
  const textNode = document.createTextNode(userinput.value);
  const span = document.createElement("span");
  span.appendChild(textNode);
  li.appendChild(span);
  ul.appendChild(li);
  userinput.value = "";
  span.onclick = toggleDone;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete");
  deleteBtn.innerText = "Delete";
  li.appendChild(deleteBtn);
  deleteBtn.onclick = removeParent;
};

const addItemBtn = () => {
  if (inputLength() > 0) {
    createListElement();
  }
};

const addItemKeypress = (event) => {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
};

const removeParent = (eForEvent) => eForEvent.target.parentNode.remove();

const toggleDone = (anotherEvent) => anotherEvent.target.classList.toggle("done");

button.addEventListener("click", addItemBtn);
userinput.addEventListener("keypress", addItemKeypress);
