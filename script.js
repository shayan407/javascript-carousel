let cardsContainer = document.getElementById("cards-container");
let prevBtn = document.getElementById("prev");
let currentCardInfo = document.getElementById("current-card");
let nextBtn = document.getElementById("next");

let counter = 0;
let cards = [];

let cardData = [
  {
    src: "https://picsum.photos/id/248/1000/1000",
  },
  {
    src: "https://picsum.photos/id/260/1000/1000",
  },
  {
    src: "https://picsum.photos/id/270/1000/1000",
  },
];

function createCards() {
  cardData.forEach((data, index) => createCard(data, index));
}

function createCard(data, index) {
  let card = document.createElement("div");
  card.classList.add(
    "card",
    "text-3xl",
    "top-0",
    "left-0",
    "h-[100%]",
    "w-[100%]",
    "absolute",
    "flex",
    "items-center",
    "justify-center",
    "overflow-hidden",
  );
  if (index === 0) {
    card.classList.add("active");
  }
  card.innerHTML = `
        <div class="text"><img src="${data.src}" alt=""></div>
    `;
  cards.push(card);
  cardsContainer.appendChild(card);
  currentCard();
}

function currentCard() {
  currentCardInfo.innerHTML = `${counter + 1} / ${cardData.length}`;
}

nextBtn.addEventListener("click", () => {
  cards[counter].classList.remove("active");
  cards[counter].classList.add("left");

  counter++;
  if (counter > cardData.length - 1) {
    counter = 0;
  }

  cards[counter].classList.add("active");
  cards[counter].classList.remove("right");

  setTimeout(() => {
    cards.forEach((card) => card.classList.remove("left", "right"));
  }, 300);

  currentCard();
});

prevBtn.addEventListener("click", () => {
  cards[counter].classList.remove("active");
  cards[counter].classList.add("right");

  counter--;
  if (counter < 0) {
    counter = cardData.length - 1;
  }

  cards[counter].classList.add("active");
  cards[counter].classList.remove("left");

  setTimeout(() => {
    cards.forEach((card) => card.classList.remove("left", "right"));
  }, 300);

  currentCard();
});

createCards();