function afficheElements() {

  const margin = 20;
  // visibility bon/mauvais
  const elemType = Math.floor(Math.random()*2);
  let enabled, disabled;

  if(elemType === 0) {
    enabled = $("#bon");
    disabled = $("#mauvais")
  } else {
    enabled = $("#mauvais");
    disabled = $("#bon");
  }
  disabled.hide();
  enabled.show();
  // 0 top 1 right 2 bottom 3 left
  const side = Math.floor(Math.random() * 4);
  const fromX = Math.floor(Math.random()*(window.innerWidth - 2*margin))+margin;

  if(side === 0) { // top
    enabled.css("top", "0").css("left",fromX);
    enabled.css("animation-name", "fly-from-top");
    enabled.show();
  } else if (side === 2) { // bottom
    enabled.css("bottom", "0").css("left",fromX);
    enabled.css("animation-name", "fly-from-bottom");
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
