function afficheElements() {

  const margin = 20;
  // VISIBILITE BON / MAUVAIS
  const elemType = Math.floor(Math.random()*2); //tirage aléatoire d'un nombre entre 0 et 2
  let enabled, disabled;

  if(elemType === 0) {
    enabled = $("#bon"); // si l'élément tiré est égal à 0 la var enabled = bon
    disabled = $("#mauvais")
  } else {
    enabled = $("#mauvais"); // si l'élément tiré n'est pas égal à 0 la var enabled = mauvais
    disabled = $("#bon");
  }
  disabled.hide(); //disabled est cachée
  enabled.show();// enabled est montrée

  // DEFINITION DES DIRECTIONS
  // 0:top, 1:right, 2:bottom, 3:left
  const side = Math.floor(Math.random() * 4);// tirage aléatoire d'un nombre entre 0 et 4 qui définira le point de départ
  const fromX = Math.floor(Math.random()*(window.innerWidth - 2*margin))+margin;//tirage aléatoire d'un nombre entre 20 (margin) et 980 (largeur de la fenêtre - margin) afin de définir une position horizontale
  const fromY = Math.floor(Math.random()*(window.innerHeight - 2*margin))+margin;

  if(side === 0) { // top
    enabled.css("top", "0").css("left",fromX);
    enabled.css("animation-name", "fly-from-top");
    enabled.show();
  } else if (side === 1) { // right
    enabled.css("right", "0").css("top",fromY);
    enabled.css("animation-name", "fly-from-right");
    enabled.show();
  } else if (side === 2) { // bottom
    enabled.css("bottom", "0").css("left",fromX);
    enabled.css("animation-name", "fly-from-bottom");
    enabled.show();
  } else if (side === 3) { // left
    enabled.css("left", "0").css("top",fromY);
    enabled.css("animation-name", "fly-from-left");
    enabled.show();
  }



/*  $("img").click(function(){

    var fly = $(this).attr("fly");

    $("img").load(fly);
    $(this).addClass("fly");

});

$(document).addEventListener("click", function() {
  $("img").attr("class", "fly");
});*/

// $(function() {
//  $("#jeu").click(function() {
//    $("normal").toggleClass("fly");
//  });
// });

  // if (elemType == 0) {
  //
	// 	$("#bon").css("top", "5").css("left",fromX);
  //   $("#bon").show();
  //   $("#mauvais").hide();
	// 	}
	// 	else {
  //   $("#mauvais").css("top","5").css("left",fromX);
  //   $("#mauvais").show();
  //   $("#bon").hide();
	// 	}
};

setInterval(afficheElements, 1000);
