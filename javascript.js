const inputText = document.getElementById('inputText');
const addItem = document.getElementById('addItem');
const listUl = document.getElementById('activity');

addItem.addEventListener('click',()=>{
  let ul = document.getElementById('activity');
  let li = document.createElement('li');
  li.textContent = inputText.value;
  addButtons(li);
  ul.appendChild(li);
  inputText.value = ' ';
});

function addButtons(li){
  let removeB = document.createElement('button');
  removeB.textContent = "remove";
  removeB.className = "remove";
  li.appendChild(removeB);

  let successB = document.createElement('button');
  successB.textContent = "successful";
  successB.className = "success";
  li.appendChild(successB);
};

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'success') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      let done = document.getElementById('done');
      done.appendChild(li);
    }  
  } 
});