const books = {};
let counter = 0;
function add() {
  let mydiv = document.querySelectorAll("section > div > div ");
  mydiv.forEach((item) => {
    item.style.backgroundColor = "lightgray";
  });
  let input = document.getElementById("newbook");
  let inputValue = input.value;
  if (inputValue.length === 0) return;
  else {
    counter++;
    books[inputValue] = inputValue;
    console.log(books);
    let newdiv = document.createElement("div");
    newdiv.style.borderRadius = "8px";
    newdiv.style.padding = "8px";
    newdiv.style.backgroundColor = "lightgray";
    newdiv.style.color = "darkslateblue";
    newdiv.style.display = "flex";
    newdiv.style.justifyContent = "space-between";
    newdiv.style.alignItems = "center";
    document.getElementById("bookwrapper").appendChild(newdiv);
    let number = document.createElement("span");
    number.innerText = counter;
    newdiv.appendChild(number);
    let text = document.createElement("span");
    text.innerText = books[inputValue];
    newdiv.appendChild(text);
    let close = document.createElement("span");
    close.style.padding = "3px";
    close.style.cursor = "pointer";
    close.setAttribute("class", "material-symbols-outlined");
    close.innerText = "close";
    close.setAttribute("id", "remove");
    close.setAttribute("onclick", "deletebook(this)");
    newdiv.appendChild(close);
    input.value = "";
  }
}
function deletebook(s) {
  s.parentElement.remove();
  console.log(books);
  counter--;
}
function search() {
  let mydiv = document.querySelectorAll(
    "section > div > div > span:nth-of-type(2)"
  );
  let searchInput = document.getElementById("search");
  mydiv.forEach((item) => {
    item.parentElement.style.backgroundColor = "lightgray";
  });

  mydiv.forEach((item) => {
    if (item.innerText === searchInput.value) {
      item.parentElement.style.backgroundColor = "pink";
    }
  });
  searchInput.value = "";
}
