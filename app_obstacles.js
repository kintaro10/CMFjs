function afficheElements() {

  var fromX = Math.floor(Math.random()*500)+20;
  var fromY = Math.floor(Math.random()*3)+5;
	var toX = Math.floor(Math.random()*500)+20;
	var toY = Math.floor(Math.random()*300)+20;

  var elemType = Math.floor(Math.random()*2);

  if (elemType == 0) {
		var depart = Math.floor(Math.random()*2);

		if (depart == 0) {
    $('#bon').css('top', "5").css('left',fromX);
    $('#bon').show();
    $('#mauvais').css('display','none');
		}
		else {
    $('#bon').css('bottom', "5").css('left',fromX);
    $('#bon').show();
    $('#mauvais').css('display','none');
		}
  }
  else {
    $('#mauvais').css('top',"5").css('left',fromX);
    $('#mauvais').show();
    $('#bon').css('display','none');
  }

};

setInterval(afficheElements, 1000);
