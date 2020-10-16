(function () {
  let actual = 0;
  const ancho = 600;

  const $slideshow = $(".slideshow ul");
  const slides = $slideshow.find("li").length; // Calcula el total de slides

  const interval = setInterval(() => mover("sig"), 1500);

  const mover = function (dir, click) {
    if (click) {
      clearInterval(interval);
    }

    dir === "sig" ? actual-- : actual++;

    if (actual > 0) {
      actual = (slides - 1) * -1;
    } else if (actual <= slides * -1) {
      actual = 0;
    }

    const margen = actual * ancho;

    // Con jQuery
    // $slideshow.animate(
    //   {
    //     marginLeft: margen,
    //   },
    //   400
    // );

    // Con TweenMax
    const tl = new TimelineMax();

    tl.to($slideshow, 1.2, {
      marginLeft: margen,
      ease: Elastic.easeOut.config(1, 0.75),
    });
  };

  $(".btnSlide").on("click", function () {
    const dir = $(this).data("mov");
    mover(dir, true);
  });
})();
