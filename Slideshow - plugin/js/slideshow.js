(function () {
  $.slideshow = function (opciones) {
    opciones = $.extend(
      {
        divDestino: ".slideshow",
        interval: 1500,
        ancho: 600,
        slides: [],
        color: "#ba007c",
        velocidadAnimacion: 1200,
      },
      opciones
    );

    if (opciones.slides.length === 0) {
      alert("Los slides son necesarios.");
      return;
    }

    opciones.velocidadAnimacion = opciones.velocidadAnimacion / 1000;

    let actual = 0;
    const ancho = opciones.ancho;
    const slides = opciones.slides.length;

    // Creación del slideshow
    let contenido = "<ul>";

    for (const slide of opciones.slides) {
      contenido += `<li><img src="${slide}" /></li>`;
    }

    contenido += "</ul>";

    $(opciones.divDestino).append(contenido);

    const $slideshow = $(`${opciones.divDestino} ul`);

    // Creación de los botones
    contenido = '<div class="slideshowButtons">';
    for (let i = 0; i < opciones.slides.length; i++) {
      contenido += `<div data-idx="${i}" class="slideButton"></div>`;
    }
    contenido += "</div>";

    $(opciones.divDestino).append(contenido);

    const $puntos = $(".slideshowButtons");

    $puntos.find("div").eq(0).css({
      backgroundColor: opciones.color,
    });

    const interval = setInterval(() => mover("sig"), opciones.interval);

    const mover = function (dir, click) {
      dir === "sig" ? actual-- : actual++;

      if (actual > 0) {
        actual = (slides - 1) * -1;
      } else if (actual <= slides * -1) {
        actual = 0;
      }

      moverPorPunto(actual, click);
    };

    const moverPorPunto = function (actual, click) {
      if (click) {
        clearInterval(interval);
      }

      const margen = actual * ancho;
      const idx = Math.abs(actual);
      const $puntoActual = $puntos.find("div").eq(idx);
      const $demasPuntos = $puntos.find("div").not($puntoActual); // Encuentra todos los divs excluyendo el indicado

      const tl = new TimelineMax();

      tl.to($slideshow, opciones.velocidadAnimacion, {
        marginLeft: margen,
        ease: Elastic.easeOut.config(1, 0.75),
      })
        .to(
          $puntoActual,
          0.5,
          {
            backgroundColor: opciones.color,
          },
          "-=1.2"
        )
        .to(
          $demasPuntos,
          0.5,
          {
            backgroundColor: "#a1a1a1",
          },
          "-=1.2"
        );
    };

    $(".slideButton").on("click", function () {
      const idx = $(this).data("idx") * -1;
      moverPorPunto(idx, true);
    });

    $(".btnSlide").on("click", function () {
      const dir = $(this).data("mov");
      mover(dir, true);
    });
  };
})();
