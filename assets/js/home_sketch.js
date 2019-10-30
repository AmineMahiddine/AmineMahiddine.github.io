
// Terminal animation

function initialSetup0() {
  if (document.getElementById("whoami") != null) {
    setTimeout(function() {
      document.getElementById('whoami').style.display = 'inline-block';
     
        
    }, 1000);
  }
}
initialSetup0();

function initialSetup() {
  if (document.getElementById("ls") != null) {
    setTimeout(function() {
      document.getElementById('ls').style.display = 'inline-block';
        document.getElementById('whoami').style.borderRight = 'none';
        document.getElementById('amine2').style.display = 'inline-block';
        document.getElementById('parag').style.display = 'inline-block';

    }, 1800);
  }
}


initialSetup();



function initialSetup1() {
  if (document.getElementById("lis") != null) {
    setTimeout(function() {
      document.getElementById('amine3').style.display = 'inline-block';
      document.getElementById('lis').style.display = 'inline-block';
    }, 2900);
  }
}
initialSetup1();



function rect() {
  if (document.getElementById("rect") != null) {
    setTimeout(function() {
      document.getElementById('rect').style.borderRight = '5px solid #fff';
document.getElementById('ls').style.borderRight = 'none';
        
    }, 2900);
  }
}

rect();
 $(document).ready(function() {
   $( "#app" ).click(function() {
  $( "#gallery" ).toggle( "400" );
});

    });




// home Page animation 

$('.btn1, .btn2 ,.btn3 ').click(function (e) {
  e.preventDefault();                   // prevent default anchor behavior
  var goTo = this.getAttribute("href"); // store anchor href

  setTimeout(function(){
       window.location = goTo;
  },500);  


  function animateLeft(obj, from, to) {
    if (from <= to) {
      obj.style.visibility = 'hidden';
      return;
    }
    else {
      var box = obj;
      box.style.marginLeft = from + "px";
      setTimeout(function () {
        animateLeft(obj, from - 10, to);
      }, 0)
    }
  }

  function animateTop(obj, from, to) {
    if (from <= to) {
      obj.style.visibility = 'hidden';
      return;
    }
    else {
      var box = obj;
      box.style.marginTop = from + "px";
      setTimeout(function () {
        animateTop(obj, from - 10, to);
      }, 50)
    }
  }

  function animateMe() {
    animateLeft(document.getElementById('side-nav1'), 0 , -60);
  }
  function animateMe2() {
    animateTop(document.getElementById('topPanel'), 0 , -20);
  }
animateMe();
animateMe2();

});


