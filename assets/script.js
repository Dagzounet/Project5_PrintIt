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

//variables pour chaque fleche que je recupere dans mon html :

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

//variables pour les points que je recupere dans mon html :

const dot = document.querySelector('.dot');
const currentDot = document.querySelector('.dot_selected');

//Events que j'assigne à mes variable, execution du contenu defini, ici console log, au clic :

leftArrow.addEventListener('click', () => {
	console.log("fleche gauche clique");
});

rightArrow.addEventListener('click', () => {
	currentDot.classList.remove('dot_selected');
	console.log("fleche droite clique");
});