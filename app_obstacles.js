$(document).keydown(function(e){

  if (e.which == 39) {// Vers la droite
  posX = parseInt($('#soucoupe').css('left'));
  if (posX < 470)
    $('#soucoupe').css('left', posX+30);
  }

  if (e.which == 37) { // Vers la gauche
	posX = parseInt($('#soucoupe').css('left'));
  if (posX > 20)
  	$('#soucoupe').css('left', posX-30);
  }

  if (e.which == 40) { // Vers le bas
  posY = parseInt($('#soucoupe').css('top'));
  if (posY < 230)
    $('#soucoupe').css('top', posY+30);
	}

  if (e.which == 38) { // Vers le haut
  posY = parseInt($('#soucoupe').css('top'));
  if (posY > 20)
    $('#soucoupe').css('top', posY-30);
	}

  if (e.which == 36) {// Vers le haut et la gauche
  posX = parseInt($('#soucoupe').css('left'));
  posY = parseInt($('#soucoupe').css('top'));
  if ((posY > 20) && (posX > 20))
    $('#soucoupe').css('left', posX-30).css('top', posY-30);
  }

  if (e.which == 33) { // Vers le haut et la droite
  posX = parseInt($('#soucoupe').css('left'));
  posY = parseInt($('#soucoupe').css('top'));
  if ((posY > 20) && (posX < 470))
    $('#soucoupe').css('left', posX+30).css('top', posY-30);
  }

  if (e.which == 35) { // Vers le bas et la gauche
  posX = parseInt($('#soucoupe').css('left'));
  posY = parseInt($('#soucoupe').css('top'));
  if ((posX > 20) && (posY < 230))
    $('#soucoupe').css('left', posX-30).css('top', posY+30);
	}

  if (e.which == 34) { // Vers le bas et la droite
  posX = parseInt($('#soucoupe').css('left'));
  posY = parseInt($('#soucoupe').css('top'));
  if ((posY < 230) && (posX < 470))
    $('#soucoupe').css('left', posX+30).css('top', posY+30);
  }

});
