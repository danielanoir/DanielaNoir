function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

$(document).ready(function () {
  //your code here
  $(".projects").show();
  $(".about").hide();





  function showAbout(){
    $(".about").show();
    $(".projects").hide();
  }
  function showProjects(){
    $(".projects").show();
    $(".about").hide();
  }

  $("#aboutLink").click(function(){
    showAbout();
  });

  $("#projectLink").click(function(){
    showProjects();
  });

  //If screen size is less than 500px, show icons
  function showIcons(){
    if (window.screen.width <= 500) {
      $("h1").css("margin", "auto");
      $(".sidebar").css("margin", "auto");
      $(".doodleRetire").show();
      $(".doodleMonty").show();
      $(".doodleCondos").show();
    } else {
      //if screen size is more than 500px hover icons on and off
      hoverDoodles();
    }
  }
  showIcons();

//show doodles on hover
function hoverDoodles(){
  $(".titleRetire").hover(
    function() {
      $(".doodleRetire").show();
    }, function() {
      $(".doodleRetire").hide();
    }
  );
  $(".titleMonty").hover(
    function() {
      $(".doodleMonty").show();
      //after 1 second change image to car with lights on
    }, function() {
      $(".doodleMonty").hide();
    }
  );
  $(".titleCondos").hover(
    function() {
      $(".doodleCondos").show();
    }, function() {
      $(".doodleCondos").hide();
    }
  );
}
// function myFunction() {
//   var x = $(".sidebar");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

});
