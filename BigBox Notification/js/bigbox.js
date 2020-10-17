(function () {
  // Crea una función jQuery
  $.bigbox = function (opciones, callback) {
    opciones = $.extend(
      {
        fa: "fa-thumbs-o-up",
        titulo: undefined,
        contenido: undefined,
        boton: "Aceptar",
      },
      opciones
    );

    if (opciones.titulo === undefined || opciones.contenido === undefined) {
      alert("El título y el contenido son obligatorios");
      return;
    }

    const animarEntrada = function () {
      const $fondo = $(".bigbox-fondo");
      const $bigbox = $(".bigbox-contenedor");

      const anchoPantalla = $(window).width();
      const altoPantalla = $(window).height();

      const anchoBigbox = $bigbox.width();
      const altoBigbox = $bigbox.height();

      // Mostrar BigBox en el centro de la pantalla
      $bigbox.css({
        top: altoPantalla / 2 - altoBigbox / 2,
        left: anchoPantalla / 2 - anchoBigbox / 2,
      });

      var tl = new TimelineMax();
      tl.to($fondo, 0.5, { opacity: 0.3 })
        .to($bigbox, 0.5, { opacity: 1 }, "-=0.5")
        .from($bigbox, 0.8, { ease: Bounce.easeOut, y: "-=20" }, "-=0.5"); // Baja desde arriba
    };

    const animarSalida = function () {
      const $fondo = $(".bigbox-fondo");
      const $bigbox = $(".bigbox-contenedor");

      var tl = new TimelineMax();
      tl.to($fondo, 0.3, { opacity: 0 }).to(
        $bigbox,
        0.3,
        { opacity: 0, onComplete: eliminarBigbox },
        "-=0.3"
      );
    };

    const eliminarBigbox = function () {
      const $fondo = $(".bigbox-fondo");
      const $bigbox = $(".bigbox-contenedor");

      $fondo.remove();
      $bigbox.remove();
    };

    let contenido = '<div class="bigbox-fondo"></div>';

    contenido += '<div class="bigbox-contenedor" align="center">';
    contenido += '<div class="bigbox-cerrar"><i class="fa fa-times"></i></div>';
    contenido += `<div class="bigbox-circulo"><i class="fa ${opciones.fa} fa-3x"></i></div>`;
    contenido += '<div class="bigbox-contenido">';
    contenido += `<span class="bigbox-titulo">${opciones.titulo}</span>`;
    contenido += `<span class="bigbox-texto">${opciones.contenido}</span>`;
    contenido += "</div>";
    contenido += `<button class="bigbox-boton">${opciones.boton}</button>`;
    contenido += "</div>";

    $("body").append(contenido);

    $(".bigbox-cerrar").on("click", () => {
      animarSalida();

      if (typeof callback == "function") {
        callback("boton-cerrar");
      }
    });

    $(".bigbox-boton").on("click", () => {
      animarSalida();

      if (typeof callback == "function") {
        callback("boton-principal");
      }
    });

    animarEntrada();
  };
})();
