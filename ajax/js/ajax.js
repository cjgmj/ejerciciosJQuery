(function () {
  $("#frmData").on("submit", function (e) {
    e.preventDefault();

    const formulario = $(this);
    const dataSerializada = formulario.serialize();

    $.ajax({
      type: "POST",
      url: "php/servicios/post.alumnos.php",
      dataType: "json",
      data: dataSerializada,
    })
      .done(function (data) {
        console.log("Correcto!");

        console.log(data); // Se imprime en consola la api
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Fallo!");

        console.log(errorThrown);
      })
      .always(function () {
        console.log("Completo!");
      });
  });
})();
