// 1. Modifier le titre et le sous-titre
function changeTitles() {
  const title = document.querySelector("h1");
  title.textContent = "Ce que j'ai appris à THP";

  const subtitle = document.querySelector("p.lead");
  subtitle.textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
changeTitles();

// 2. Modifier les boutons CTA
function changeCallToActions() {
  const mainBtn = document.querySelector(".btn-primary");
  mainBtn.textContent = "OK je veux tester !";
  mainBtn.setAttribute("href", "http://www.thehackingproject.org");

  const secBtn = document.querySelector(".btn-secondary");
  secBtn.textContent = "Non Merci";
  secBtn.setAttribute("href", "https://www.pole-emploi.fr/accueil/");
}
changeCallToActions();

// 3. Modifier le logo Album
function changeLogoName() {
  const logo = document.querySelector(".navbar-brand strong");
  logo.textContent = "The THP Experience";
  logo.style.fontSize = "2em";
}
changeLogoName();

// 4. Ajouter les images dans les cards
function populateImages() {
  const imagesArray = [
    "https://img.icons8.com/color/480/000000/html-5.png",
    "https://img.icons8.com/color/480/000000/css3.png",
    "https://img.icons8.com/color/480/000000/javascript.png",
    "https://img.icons8.com/color/480/000000/ruby-programming-language.png",
    "https://img.icons8.com/color/480/000000/bootstrap.png",
    "https://img.icons8.com/color/480/000000/github.png",
    "https://i.imgur.com/bJE9Pka.png",
    "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4",
    "https://img.icons8.com/color/480/000000/heroku.png"
  ];

  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    const img = card.querySelector("img");
    if(img) img.setAttribute("src", imagesArray[i]);
  });
}
populateImages();

// 5. Modifier le texte des 3 premières cards
function changeCardsText() {
  const cardsText = document.querySelectorAll(".card .card-text");
  const texts = [
    "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web",
    "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML",
    "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
  ];

  for(let i = 0; i < 3; i++) {
    cardsText[i].textContent = texts[i];
  }
}
changeCardsText();

// 6. Changer les boutons "View" en verts
function changeViewButtons() {
  const buttons = document.querySelectorAll(".card .btn");
  buttons.forEach(btn => {
    if(btn.textContent.trim() === "View") {
      btn.classList.remove("btn-outline-secondary");
      btn.classList.add("btn-success");
    }
  });
}
changeViewButtons();

// 7. Supprimer les 3 dernières cards
function deleteLastCards() {
  const cards = document.querySelectorAll(".album .row .col-md-4");
  // Supprimer du dernier au premier pour éviter les problèmes d'indices
  for(let i = cards.length - 1; i >= cards.length - 3; i--) {
    cards[i].remove();
  }
}
deleteLastCards();

// 8. Déplacer la 3ème card dans une nouvelle row (après la suppression, vérifie qu'elle existe)
function changeViewPyramid() {
  const row = document.querySelector(".album .row");
  const newRow = document.createElement("div");
  newRow.classList.add("row");
  row.after(newRow);

  const thirdCard = row.querySelectorAll(".col-md-4")[2];
  if(thirdCard) newRow.appendChild(thirdCard);
}
changeViewPyramid();
