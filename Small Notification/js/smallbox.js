(function () {
  $.smallbox = function (opciones) {
    opciones = $.extend(
      {
        titulo: undefined,
        subtitulo: undefined,
        contenido: undefined,
        fa: "fa-envelope-o",
        img: undefined,
        timeout: 3000,
      },
      opciones
    );

    const eliminarSmallbox = function () {
      $(".smallbox-contenedor").remove();
    };

    const animarEntrada = function () {
      const $smallbox = $(".smallbox-contenedor");

      const tl = new TimelineMax();
      tl.from($smallbox, 1.6, {
        x: "+=100px",
        ease: Bounce.easeOut,
      }).from(
        $smallbox,
        1.0,
        {
          opacity: 0,
        },
        "-=1.3"
      );
    };

    const animarSalida = function () {
      const $smallbox = $(".smallbox-contenedor");

      const tl = new TimelineMax();
      tl.to($smallbox, 1.0, {
        x: "+=100px",
      }).to(
        $smallbox,
        1.0,
        {
          opacity: 0,
          onComplete: eliminarSmallbox,
        },
        "-=1"
      );
    };

    let html = '<div class="smallbox-contenedor">';
    html += '<div class="smallbox-foto">';
    html += `<img src="${opciones.img}" />`;
    html += "</div>";
    html += '<div class="smallbox-contenido" align="center">';
    html += '<div class="smallbox-textoContenedor" align="left">';
    html += `<span class="smallbox-titulo">${opciones.titulo}</span>`;
    html += `<span class="smallbox-subtitulo">${opciones.subtitulo}</span>`;
    html += "</div>";
    html += '<div class="smallbox-pico"></div>';
    html += '<div class="smallbox-colorCaja">';
    html += '<div class="smallbox-colorTexto">';
    html += opciones.contenido;
    html += "</div>";
    html += '<div class="smallbox-colorIcono">';
    html += `<i class="fa ${opciones.fa} fa-2x"></i>`;
    html += "</div>";
    html += "</div>";
    html += '<div class="smallbox-sombra"></div>';
    html += "</div>";
    html += "</div>";

    $("body").append(html);

    animarEntrada();

    setTimeout(() => {
      animarSalida();
    }, opciones.timeout);
  };
})();
