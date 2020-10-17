(function () {
  let actual = 0;
  const ancho = 600;

  const $slideshow = $(".slideshow ul");
  const slides = $slideshow.find("li").length; // Calcula el total de slides
  const $puntos = $(".slideshowButtons");

  $puntos.find("div").eq(0).css({
    backgroundColor: "#58167d",
  });

  const interval = setInterval(() => mover("sig"), 1500);

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

    tl.to($slideshow, 1.2, {
      marginLeft: margen,
      ease: Elastic.easeOut.config(1, 0.75),
    })
      .to(
        $puntoActual,
        0.5,
        {
          backgroundColor: "#58167d",
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
})();
