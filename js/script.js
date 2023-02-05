const overlayButton = document.querySelector(".hero__button");

const addBookButton = document.getElementById("overlay__addBook");

const overlay = document.querySelector(".overlay");

const bookList = document.querySelector(".books-list");

const overlayExit = document.getElementById("overlay__exit");

let isHidden = 0;

/*/////////////////// Variables for the overlay inputs //////////////////*/

const overlayTitle = document.getElementById("overlay__title");

const overlayAuthor = document.getElementById("overlay__author");

const overlayPages = document.getElementById("overlay__pages");

const overlayNotes = document.getElementById("overlay__notes");

const overlayIsread = document.getElementById("overlay__isread");

/*/////////////////// Show the overlay screen /////////////////////////////*/

overlayButton.addEventListener("click", () => {
  if (isHidden == 0) {
    overlay.style.visibility = "visible";
  }
});

/*/////////////////// Event listener to create card ////////////////////////*/

addBookButton.addEventListener("click", () => {
  if (
    overlayTitle.value != "" ||
    overlayAuthor.value != "" ||
    overlayPages.value != ""
  ) {
    createCard();
    overlayUtilities.clean();
  }
});

/*/////////////////// Object Creator for books/////////////////////////////*/

function bookCreator(title, author, pages, notes, isread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.notes = notes;
  this.read = isread;
}

/*/////////////////// Creates card in the dom /////////////////////////////*/

function createCard() {
  const book = new bookCreator(
    overlayTitle.value,
    overlayAuthor.value,
    overlayPages.value,
    overlayNotes.value,
    overlayIsread.checked
  );

  let numberOfCards =
    document.getElementById("cardContainer").childElementCount;

  const newCard = document.createElement("div");
  newCard.setAttribute("id", `book${numberOfCards}`);
  newCard.classList.add("card");

  const cardBackGround = document.createElement("div");
  cardBackGround.classList.add("card__background");
  newCard.appendChild(cardBackGround);

  const cardHeader = document.createElement("h1");
  cardHeader.classList.add("header");
  cardHeader.classList.add("card__header");
  cardHeader.textContent = book.title;
  cardBackGround.appendChild(cardHeader);

  const cardAuthor = document.createElement("h2");
  cardAuthor.classList.add("body-text");
  cardAuthor.classList.add("card-author");
  cardAuthor.textContent = book.author;
  cardBackGround.appendChild(cardAuthor);

  const cardPages = document.createElement("p");
  cardPages.classList.add("body-text");
  cardPages.textContent = "Pages: " + book.pages;
  cardBackGround.appendChild(cardPages);

  const cardNotes = document.createElement("p");
  cardNotes.classList.add("body-text");
  cardNotes.textContent = "Notes: " + book.notes;
  cardBackGround.appendChild(cardNotes);

  const cardRead = document.createElement("p");
  cardRead.classList.add("body-text");
  cardRead.textContent = "Read: ";

  const cardCheckbox = document.createElement("input");
  cardCheckbox.type = "checkbox";
  cardCheckbox.classList.add("card__checkbox");
  cardCheckbox.checked = book.read;

  cardRead.appendChild(cardCheckbox);
  cardBackGround.appendChild(cardRead);
  newCard.appendChild(cardBackGround);
  bookList.appendChild(newCard);
}

/*/////////////////// Exit button for overlay /////////////////////////////*/

overlayExit.addEventListener("click", () => {
  overlayUtilities.clean();
});

const overlayUtilities = {
  clean: function () {
    overlayAuthor.value = "";
    overlayTitle.value = "";
    overlayPages.value = "";
    overlayNotes.value = "";
    overlayIsread.checked = false;
    overlay.style.visibility = "hidden";
  },
};
