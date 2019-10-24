function initialSetup0() {
  if (document.getElementById("whoami") != null) {
    setTimeout(function () {
      document.getElementById('whoami').style.display = 'inline-block';


    }, 1000);
  }
}
initialSetup0();

function initialSetup() {
  if (document.getElementById("ls") != null) {
    setTimeout(function () {
      document.getElementById('ls').style.display = 'inline-block';
      document.getElementById('whoami').style.borderRight = 'none';

    }, 1750);
  }
}

function initialSetup2() {
  if (document.getElementById("parag") != null) {
    setTimeout(function () {
      document.getElementById('amine2').style.display = 'inline-block';
      document.getElementById('parag').style.display = 'inline-block';
    }, 2000);
  }
}
initialSetup2();


initialSetup();

function rect() {
  if (document.getElementById("rect") != null) {
    setTimeout(function () {
      document.getElementById('rect').style.borderRight = '5px solid #fff';
      document.getElementById('ls').style.borderRight = 'none';

    }, 3100);
  }
}
rect();


function initialSetup1() {
  if (document.getElementById("lis") != null) {
    setTimeout(function () {
      document.getElementById('amine3').style.display = 'inline-block';
      document.getElementById('lis').style.display = 'inline-block';
    }, 3200);
  }
}
initialSetup1();



$(document).ready(function () {
  $("#app1").click(function () {
    $("#gallery").toggle("400");
  });

});




