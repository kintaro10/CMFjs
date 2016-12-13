function afficheElements() {

  var fromX = Math.floor(Math.random()*500)+20;
  var fromY = Math.floor(Math.random()*3)+5;

  var elemType = Math.floor(Math.random()*2);

/*  $("img").click(function(){

    var fly = $(this).attr("fly");

    $("img").load(fly);
    $(this).addClass("fly");

});

$(document).addEventListener("click", function() {
  $("img").attr("class", "fly");
});*/

$(function() {
 $("#jeu").click(function() {
 $("normal").toggleClass("fly");
 });
});

  if (elemType == 0) {

		$("#bon").css("top", "5").css("left",fromX);
    $("#bon").show();
    $("#mauvais").css("display","none");
		}
		else {
    $("#mauvais").css("top","5").css("left",fromX);
    $("#mauvais").show();
    $("#bon").css("display","none");
		}
};

setInterval(afficheElements, 1000);
