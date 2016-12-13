function spawnPlanet() {

  const margin = 20;
  // VISIBILITE BON / MAUVAIS
  const elemType = Math.floor(Math.random()*2); //tirage aléatoire d'un nombre entre 0 et 2

  let newPlanet = document.createElement('div').addClass("fly");

  if(elemType === 0) {
    newPlanet = url ("solar_system.png");
  } else {
    newPlanet = url("saturn.png");
  }

div.appendchild(newPlanet);

  // DEFINITION DES DIRECTIONS
  // 0:top, 1:right, 2:bottom, 3:left
  const side = Math.floor(Math.random() * 4);// tirage aléatoire d'un nombre entre 0 et 4 qui définira le point de départ
  const fromX = Math.floor(Math.random()* (window.innerWidth - 2*margin))+margin;//tirage aléatoire d'un nombre entre 20 (margin) et 980 (largeur de la fenêtre - margin) afin de définir une position horizontale
  const fromY = Math.floor(Math.random()*(window.innerHeight - 2*margin))+margin;

  if(side === 0) { // top
    newPlanet.css("top", "0").css("left",fromX);
    newPlanet.css("animation-name", "fly-from-top");
    newPlanet.show();
  } else if (side === 1) { // right
    newPlanet.css("right", "0").css("top",fromY);
    newPlanet.css("animation-name", "fly-from-right");
    newPlanet.show();
  } else if (side === 2) { // bottom
    newPlanet.css("bottom", "0").css("left",fromX);
    newPlanet.css("animation-name", "fly-from-bottom");
    newPlanet.show();
  } else if (side === 3) { // left
    newPlanet.css("left", "0").css("top",fromY);
    newPlanet.css("animation-name", "fly-from-left");
    newPlanet.show();
  }


};

setInterval(spawnPlanet, 2000);
