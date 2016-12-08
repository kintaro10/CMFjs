
var container = document.getElementByID("container");
var asteroide = document.getElementByID("image1");
var diametreImg = parseFloat(getComputedStyle(asteroide).width);
var vitesse = 10;

function deplacerAsteroide () {
	var xAsteroide = parseFloat(getComputedStyle(asteroide).left);
	asteroide.style.left = (xAsteroide + vitesse) + "px";
	requestAnimationFrame(deplacerAsteroide);
}

requestAnimationFrame(deplacerAsteroide);



