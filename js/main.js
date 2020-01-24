$(document).ready(function(){

  var fecha = new Date();
  var dia = fecha.getDate();
  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  var mes = fecha.getMonth();
  var year = fecha.getFullYear();


    $('#galeria').bxSlider({
        auto: true,
        autoControls: true,
        mode: 'horizontal',
        captions: true,
        slideWidth: 1200,
        pager: true,
        pause: 3000
      });

      var posts = [
        {
          title: 'Prueba de titulo 1',
          date: "Publicado el "+dia+" de "+meses[mes]+" del "+year,
          content: "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aliquam quis felis consectetur, viverra lacus in, finibus est. Maecenas at interdum justo, vitae varius turpis. Nullam tincidunt a odio lacinia malesuada. Cras finibus eget turpis nec consectetur. Vivamus vitae vehicula justo. Integer finibus sapien nulla, blandit molestie arcu aliquet vel. Integer sed ligula vestibulum mi eleifend semper a eleifend quam. Aliquam semper auctor tellus at consectetur.\nProin ac lobortis erat. Donec pellentesque imperdiet risus, eget sollicitudin tellus ullamcorper a. Etiam arcu dui, hendrerit vel sodales dapibus, eleifend sed orci. Proin eleifend elementum feugiat. Curabitur consectetur aliquet libero quis sagittis. Phasellus et turpis sed urna finibus efficitur vel id purus. Nunc eu augue augue. Mauris lobortis molestie dolor. Ut mollis sem vitae ipsum convallis, in lacinia risus finibus. Sed finibus, nulla in pulvinar commodo, nunc justo viverra nibh, in sodales leo erat nec mauris."
        },
        {
          title: 'Prueba de titulo 2',
          date: "Publicado el "+dia+" de "+meses[mes]+" del "+year,
          content: "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aliquam quis felis consectetur, viverra lacus in, finibus est. Maecenas at interdum justo, vitae varius turpis. Nullam tincidunt a odio lacinia malesuada. Cras finibus eget turpis nec consectetur. Vivamus vitae vehicula justo. Integer finibus sapien nulla, blandit molestie arcu aliquet vel. Integer sed ligula vestibulum mi eleifend semper a eleifend quam. Aliquam semper auctor tellus at consectetur.\nProin ac lobortis erat. Donec pellentesque imperdiet risus, eget sollicitudin tellus ullamcorper a. Etiam arcu dui, hendrerit vel sodales dapibus, eleifend sed orci. Proin eleifend elementum feugiat. Curabitur consectetur aliquet libero quis sagittis. Phasellus et turpis sed urna finibus efficitur vel id purus. Nunc eu augue augue. Mauris lobortis molestie dolor. Ut mollis sem vitae ipsum convallis, in lacinia risus finibus. Sed finibus, nulla in pulvinar commodo, nunc justo viverra nibh, in sodales leo erat nec mauris."
        },
        {
          title: 'Prueba de titulo 3',
          date: "Publicado el "+dia+" de "+meses[mes]+" del "+year,
          content: "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aliquam quis felis consectetur, viverra lacus in, finibus est. Maecenas at interdum justo, vitae varius turpis. Nullam tincidunt a odio lacinia malesuada. Cras finibus eget turpis nec consectetur. Vivamus vitae vehicula justo. Integer finibus sapien nulla, blandit molestie arcu aliquet vel. Integer sed ligula vestibulum mi eleifend semper a eleifend quam. Aliquam semper auctor tellus at consectetur.\nProin ac lobortis erat. Donec pellentesque imperdiet risus, eget sollicitudin tellus ullamcorper a. Etiam arcu dui, hendrerit vel sodales dapibus, eleifend sed orci. Proin eleifend elementum feugiat. Curabitur consectetur aliquet libero quis sagittis. Phasellus et turpis sed urna finibus efficitur vel id purus. Nunc eu augue augue. Mauris lobortis molestie dolor. Ut mollis sem vitae ipsum convallis, in lacinia risus finibus. Sed finibus, nulla in pulvinar commodo, nunc justo viverra nibh, in sodales leo erat nec mauris."
        },
        {
          title: 'Prueba de titulo 4',
          date: "Publicado el "+dia+" de "+meses[mes]+" del "+year,
          content: "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aliquam quis felis consectetur, viverra lacus in, finibus est. Maecenas at interdum justo, vitae varius turpis. Nullam tincidunt a odio lacinia malesuada. Cras finibus eget turpis nec consectetur. Vivamus vitae vehicula justo. Integer finibus sapien nulla, blandit molestie arcu aliquet vel. Integer sed ligula vestibulum mi eleifend semper a eleifend quam. Aliquam semper auctor tellus at consectetur.\nProin ac lobortis erat. Donec pellentesque imperdiet risus, eget sollicitudin tellus ullamcorper a. Etiam arcu dui, hendrerit vel sodales dapibus, eleifend sed orci. Proin eleifend elementum feugiat. Curabitur consectetur aliquet libero quis sagittis. Phasellus et turpis sed urna finibus efficitur vel id purus. Nunc eu augue augue. Mauris lobortis molestie dolor. Ut mollis sem vitae ipsum convallis, in lacinia risus finibus. Sed finibus, nulla in pulvinar commodo, nunc justo viverra nibh, in sodales leo erat nec mauris."
        },
        {
          title: 'Prueba de titulo 5',
          date: "Publicado el "+dia+" de "+meses[mes]+" del "+year,
          content: "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aliquam quis felis consectetur, viverra lacus in, finibus est. Maecenas at interdum justo, vitae varius turpis. Nullam tincidunt a odio lacinia malesuada. Cras finibus eget turpis nec consectetur. Vivamus vitae vehicula justo. Integer finibus sapien nulla, blandit molestie arcu aliquet vel. Integer sed ligula vestibulum mi eleifend semper a eleifend quam. Aliquam semper auctor tellus at consectetur.\nProin ac lobortis erat. Donec pellentesque imperdiet risus, eget sollicitudin tellus ullamcorper a. Etiam arcu dui, hendrerit vel sodales dapibus, eleifend sed orci. Proin eleifend elementum feugiat. Curabitur consectetur aliquet libero quis sagittis. Phasellus et turpis sed urna finibus efficitur vel id purus. Nunc eu augue augue. Mauris lobortis molestie dolor. Ut mollis sem vitae ipsum convallis, in lacinia risus finibus. Sed finibus, nulla in pulvinar commodo, nunc justo viverra nibh, in sodales leo erat nec mauris."
        },
        {
          title: 'Prueba de titulo 6 ',
          date: "Publicado el "+dia+" de "+meses[mes]+" del "+year,
          content: "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aliquam quis felis consectetur, viverra lacus in, finibus est. Maecenas at interdum justo, vitae varius turpis. Nullam tincidunt a odio lacinia malesuada. Cras finibus eget turpis nec consectetur. Vivamus vitae vehicula justo. Integer finibus sapien nulla, blandit molestie arcu aliquet vel. Integer sed ligula vestibulum mi eleifend semper a eleifend quam. Aliquam semper auctor tellus at consectetur.\nProin ac lobortis erat. Donec pellentesque imperdiet risus, eget sollicitudin tellus ullamcorper a. Etiam arcu dui, hendrerit vel sodales dapibus, eleifend sed orci. Proin eleifend elementum feugiat. Curabitur consectetur aliquet libero quis sagittis. Phasellus et turpis sed urna finibus efficitur vel id purus. Nunc eu augue augue. Mauris lobortis molestie dolor. Ut mollis sem vitae ipsum convallis, in lacinia risus finibus. Sed finibus, nulla in pulvinar commodo, nunc justo viverra nibh, in sodales leo erat nec mauris."
        }

      ]
  //console.log(posts);

  posts.forEach((item, index)=>{
    var post =`
    <article class="post">
      <h2>${item.title}</h2>
      <span class="date">${item.date}</span>
      <p>
          ${item.content}
      </p>
      <a href="#" class="button-more">Leer más</a>
    </article>
    `;

    $("#posts").append(post);
    //console.log(post);
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

