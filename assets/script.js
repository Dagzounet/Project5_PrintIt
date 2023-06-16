// ici je définis un tableau appelé "slides" qui contient les différentes images et leurs textes
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Je récupère les éléments nécessaires dans mon HTML : ici la baniere et son texte, les fleches, les points.
const banner = document.getElementById("banner");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

const dotsContainer = document.getElementById('dots_container'); // je récupère le container pour mes dots.
dotsContainer.classList.add('dots'); // j'ajoute la class "dots" pour les positioner correctement (flex, absolute, bottom).

for (let i=0; i < 4; i++) { //création d'une boucle, afin de répété 4 fois l'opération pour avoir 4 points.
const dot = document.createElement('span'); // je créer la constant "dot" qui créer des span dans le html.
dot.classList.add('dot'); // j'ajoute la class "dot" à "dot" donc chacun des span crée ci dessus.
dotsContainer.appendChild(dot); // ici j'assigne "dot" comme enfant de "dotsContainer".
}

const dots = document.querySelectorAll(".dot"); // création de la constante "dots" qui récupère les dot nouvellement crée dans le html.
const tagLine = document.querySelector("#banner p");

let currentSlide = 0; // Je créer un index pour la diapositive actuelle

// Création d'une fonction pour mettre à jour le diaporama :
function updateSlide() {

	//creation constante pour les slides :
  const slide = slides[currentSlide];

  // Mise à jour de l'image et de son texte :
  document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slide.image;
  tagLine.innerHTML = slide.tagLine;

  // Mise à jour des points qui s'aligne sur l'index par un égal à currentSlide:
  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentSlide); //si l'index est bien égal, alors le dot_selected disparait puis apparait avec le toggle.
  });
}

updateSlide (); // j'appelle immédiatement la fonction après sa création pour avoir le dot_selected sur ma première slide.

// Événement clic sur la flèche de gauche (si la slide actuel est égale à 0, alors définir la variable à -1 pour la précédente, sinon retirer 1)
arrowLeft.addEventListener("click", () => {
  if (currentSlide === 0) { //si on est sur la première diapo et qu'on veut aller sur la dernière alors le -1 permet d'aller sur l'index de fin du tableau
    currentSlide = slides.length - 1;
  } else { //sinon, on soustrait 1 à la variable pour passer à la précédente.
    currentSlide--;
  }
  updateSlide(); // lancement de la fonction précédement défini.
});

// Événement clic sur la flèche de droite (si la slide actuel est égale à -1, alors définir à 0 pour la suivante, sinon ajouter 1)
arrowRight.addEventListener("click", () => {
  if (currentSlide === slides.length - 1) { //idem ici si la dernière diapositive est affiché, pour pouvoir repasser à la 1ere la variable est défini sur 0
    currentSlide = 0;
  } else { //sinon on ajoute 1 à la variable pour passer à la suivante
    currentSlide++;
  }
  updateSlide(); // lancement de la fonction précédement défini.
});
