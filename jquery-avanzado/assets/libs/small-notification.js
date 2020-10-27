(function ($) {
  $(document).ready(function () {
    let contenido = '<div id="small-top-left-container"></div>';
    $("body").append(contenido);
  });

  $.smallBox = function (ajustes) {
    ajustes = $.extend(
      {
        titulo: "Hola Mundo",
        contenido: "Saludos, soy un plugin!",
        img: "assets/img/ball.png",
      },
      ajustes
    );

    console.log(ajustes);

    let contenido = '<div class="small-box">';
    contenido += '<div class="row">';
    contenido += '<div class="col-md-4">';
    contenido += `<img src="${ajustes.img}" />`;
    contenido += "</div>";
    contenido += '<div class="col-md-8">';
    contenido += `<h4>${ajustes.titulo}</h4>`;
    contenido += `<p>${ajustes.contenido}</p>`;
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";

    $("#small-top-left-container").append(contenido);
  };
})(jQuery);
