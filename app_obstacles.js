function afficheElements() {

  var fromX = Math.floor(Math.random()*3)+5;
  var fromY = Math.floor(Math.random()*3)+5;
	var toX = Math.floor(Math.random()*500)+20;
	var toY = Math.floor(Math.random()*300)+20;

  var elemType = Math.floor(Math.random()*2);

  if (elemType == 0) {
    $('#bon').css('top',fromY).css('left',fromX);
		$('#bon').css('transform', translate3d(toX + "px," + toY + "px, 0 px"));
    $('#bon').show();
    $('#mauvais').css('display','none');
  }
  else {
    $('#mauvais').css('top',elemY).css('left',elemX);
    $('#mauvais').show();
    $('#bon').css('display','none');
  }

};

setInterval(afficheElements, 2000);
