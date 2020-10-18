(function () {
  let sbContador = 0;

  $.sbNotification = function (opciones) {
    opciones = $.extend(
      {
        img: undefined,
        titulo: undefined,
        subtitulo: undefined,
        color: "#58167d",
        fa: "fa-comments-o",
        timeout: 3500,
      },
      opciones
    );

    const eliminarContenido = function (sbID) {
      $(`#${sbID}`).find("div").remove();
    };

    const eliminarNotificacion = function (sbID) {
      $(`#${sbID}`).remove();
    };

    const animarEntrada = function (sbID) {
      const $sb = $(`#${sbID}`);

      const tl = new TimelineMax();
      tl.from($sb, 1, { x: "+=100px", ease: Bounce.easeOut }).from(
        $sb,
        1,
        { opacity: 0 },
        "-=1"
      );
    };

    const animarSalida = function (sbID) {
      const $sb = $(`#${sbID}`);

      const tl = new TimelineMax();
      tl.to($sb, 1, { x: "+=200px" })
        .to(
          $sb,
          1,
          {
            opacity: 0,
            onComplete: eliminarContenido,
            onCompleteParams: [sbID],
          },
          "-=1"
        )
        .to($sb, 0.8, {
          height: "0px",
          marginTop: "0px",
          onComplete: eliminarNotificacion,
          onCompleteParams: [sbID],
        });
    };

    sbContador++;
    const sbID = "sbID-" + sbContador;

    if ($(".sb-top-right").length === 0) {
      let html = '<div class="sb-top-right"></div>';
      $("body").append(html);
    }

    let html = `<div id="${sbID}" class="sb-body" style="background-color: ${opciones.color}">`;

    if (opciones.img !== undefined) {
      html += '<div class="sb-foto">';
      html += `<img src="${opciones.img}">`;
      html += "</div>";
    }

    html += '<div class="sb-contenido" align="right">';
    html += "<span>";
    html += `<span class="sb-titulo">${opciones.titulo}</span>`;
    html += "<br />";
    html += opciones.subtitulo;
    html += "</span>";
    html += "</div>";
    html += '<div class="sb-icon">';
    html += `<i class="fa ${opciones.fa}"></i>`;
    html += "</div>";
    html += "</div>";

    console.log(html);

    $(".sb-top-right").append(html);

    animarEntrada(sbID);

    setTimeout(function () {
      animarSalida(sbID);
    }, opciones.timeout);
  };
})();
