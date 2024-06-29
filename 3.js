document.addEventListener("DOMContentLoaded", function () {
  const submit = document.getElementById("form");
  submit.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo();
  });
});

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("penulis").value;
  const year = document.getElementById("tahun").value;
  const isComplete = document.getElementById("isCompleted");

  let isCompleted;
  if (isComplete.checked) {
    isCompleted = true;
  } else {
    isCompleted = false;
  }
  const generateId = GenerateID();
  const BookObjek = Generate(generateId, title, author, year);
  books.push(BookObjek); //memasukan book onjek ke books
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function Generate(id, title, author, year, isComplete) {
  return {
    id,
    title,
    author,
    year,
    isComplete,
  };
}

function GenerateID() {
  return +new Date();
}

const books = [];
const RENDER_EVENT = "render_event";

function listBook(BookObjek) {
  const textpenulis = document.createElement("p");
  textpenulis.innerHTML = `${BookObjek.title} - ${BookObjek.year}`;

  const textAuthor = document.createElement("p");
  textAuthor.innerText = `${BookObjek.author}`;
  textpenulis.classList.add("itempenulis");

  const textContainer = document.createElement("div");
  textContainer.classList.add("itemText");
  textContainer.append(textpenulis, textAuthor);

  const container = document.createElement("div");
  container.classList.add("item", "shadow"); // menambahkan class bisa lebih dari dua
  container.append(textContainer); //menjadikan text container sbg child
  container.setAttribute("id", `todo-${BookObjek.id}`);

  const containertombol = document.createElement("div");
  containertombol.classList.add();

  if (BookObjek.isComplete) {
    const trashButton = document.createElement("button");
    trashButton.classList.add();
    trashButton.addEventListener("click", function () {
      removeBookFromCompleted(BookObjek.id);
    });

    const undoButton = document.createElement("button");
    undoButton.classList.add();
    undoButton.addEventListener("click", function () {
      undoBookFromCompleted(BookObjek.id);
    });
  } else {
    const checkButton = document.createElement("button");
    checkButton.classList.add("green");
    checkButton.innerHTML = `<i class="fa-solid fa-square-check"></i>`;

    checkButton.addEventListener("click", function () {
      addBookToCompleted(BookObjek.id);
    });
    const trashButton = document.createElement("button");
    trashButton.classList.add();
    trashButton.addEventListener("click", function () {
      removeBookFromCompleted(BookObjek.id);
    });
    containertombol.append(checkButton, trashButton);
    container.append(Container2);
  }
  return container;
}

function removeBookFromCompleted() {}
