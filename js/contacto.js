$(document).ready(function(){

    //Formulario de contacto
    $.validate({
      lang: "es"
    });

    //Selector de tema
    var theme = $("#theme");
  
    $("#to-green").click(function(){
      theme.attr("href", "css/green.css");
    });
  
    $("#to-blue").click(function(){
      theme.attr("href", "css/blue.css");
    });
  
    $("#to-red").click(function(){
      theme.attr("href", "css/red.css");
    });
  
  // Scroll arriba de la web
    $(".subir").click(function(){
      $("html").animate({scrollTop: 0}, 500);
    });
  
  //Login falso
    $("#login form").submit(function(){
       var form_name = $("#form_name").val();
  
       localStorage.setItem("form_name", form_name);
  
    });
    
    var form_name = localStorage.getItem("form_name");
  
    if (form_name != null && form_name != "undefined") {
      var about_parrafo = $("#about p");
  
      about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
      about_parrafo.append("<br><a href='#' id='logout'>Cerrar sesión</a>");
  
      $("#login").hide();
  
      $("#logout").click(function(){
        localStorage.clear();
        location.reload();
      });
    }
  
  
  
  });
  
  