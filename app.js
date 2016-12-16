// trainée sexy

(function batCursor() {

  var width = window.innerWidth;
  var height = window.innerHeight;
  var cursor = {x: width/2, y: width/2};
  var particles = [];

  function init() {
    bindEvents();
    attachInitialParticleStyles();
    loop();
  }

  function bindEvents() {
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize(e) {
    width = window.innerWidth;
    height = window.innerHeight;
  }

  function onTouchMove(e) {
    if( e.touches.length > 0 ) {
      for( var i = 0; i < e.touches.length; i++ ) {
        addParticle(e.touches[i].clientX, e.touches[i].clientY);
      }
    }
  }

  function onMouseMove(e) {
    cursor.x = e.clientX;
    cursor.y = e.clientY;

    addParticle( cursor.x, cursor.y);
  }

  function addParticle(x, y) {
    var particle = new Particle();
    particle.init(x, y);
    particles.push(particle);
  }

  function updateParticles() {
    for( var i = 0; i < particles.length; i++ ) {
      particles[i].update();
    }

    for( var i = particles.length - 1; i >= 0; i-- ) {
      if( particles[i].lifeSpan < 0 ) {
        particles[i].die();
        particles.splice(i, 1);
      }
    }

  }

  function loop() {
    requestAnimationFrame(loop);
    updateParticles();
  }

  function Particle() {

    this.lifeSpan = 200;

    this.init = function(x, y) {

      this.velocity = {
        x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 2),
        y: (-2.5 + (Math.random() * -1))
      };

      this.position = {x: x -1, y: y -1 };

      this.element = document.createElement('span');
      this.element.className = "particle-santa"
      this.update();

      document.body.appendChild(this.element);
    };

    this.update = function() {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      this.velocity.x += (Math.random() < 0.5 ? -1 : 1) * 2 / 75;
      this.velocity.y -= Math.random() / 600;
      this.lifeSpan--;

      this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + ( 0.2 + (250 - this.lifeSpan) / 250) + ")";
    }

    this.die = function() {
      this.element.parentNode.removeChild(this.element);
    }
  }

  function attachInitialParticleStyles() {

    var initialStyles = [
           ".particle-santa {",
           "position: absolute;",
           "display: block;",
           "pointer-events: none;",
           "z-index: 10000000;",
           "width: 20px;",
           "height: 20px;",
           "background-size: contain;",
           "background-image: url(pic's/santa.png);",
          "}"].join('');

    var style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = initialStyles;
    document.getElementsByTagName('head')[0].appendChild(style)
  };

  init();
})();

// mouseOver allez salut !
let cpt = 0;

function mouseOver(el) {
  if (el.classList.contains("goodplanet")) {
    el.style.display = "none" ;
    cpt++;
    document.getElementById("score").innerHTML = "Baclette : "+cpt;
  }
  else if (el.classList.contains("badplanet")) {
    el.style.display ="none" ;
    alert("You lost, try again !");
  }
}


// compteur de points

function compteur() {

  let score = document.getElementById("score");
}
