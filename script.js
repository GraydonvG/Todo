const button = document.getElementById('enter');
const ul = document.querySelector('ul');
const userinput = document.getElementById('userinput');

const inputLength = () => userinput.value.length;

const toggleDone = (event) => event.target.classList.toggle('done');

const removeParent = (event) => event.target.parentNode.remove();

function createListElement() {
  const li = document.createElement('li');
  const textNode = document.createTextNode(userinput.value);
  const span = document.createElement('span');
  span.appendChild(textNode);
  li.appendChild(span);
  ul.appendChild(li);
  userinput.value = '';
  span.onclick = toggleDone;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'delete');
  deleteBtn.innerText = 'Delete';
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

button.addEventListener('click', addItemBtn);
userinput.addEventListener('keypress', addItemKeypress);
