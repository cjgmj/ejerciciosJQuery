(function () {
  function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, "").replace(
      /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
      function (m, key, value) {
        // callback
        vars[key] = value !== undefined ? value : "";
      }
    );

    if (param) {
      return vars[param] ? vars[param] : null;
    }
    return vars;
  }

  $(document).ready(function () {
    const id = $_GET("id");

    $.ajax({
      type: "GET",
      url: `php/servicios/get.alumnos.php?id=${id}`,
      dataType: "json",
    })
      .done(function (data) {
        console.log("Correcto!");

        console.log(data); // Se imprime en consola la api

        const alumno = data.alumnos[0];

        $("#txtId").val(alumno.id);
        $("#txtNombre").val(alumno.nombre);
        $("#cmbEstado").val(alumno.estado);
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Fallo!");

        console.log(errorThrown);
      })
      .always(function () {
        console.log("Completo!");
      });

    $("#frmData").on("submit", function (e) {
      e.preventDefault();

      const formulario = $(this);
      const dataSerializada = formulario.serialize();

      $.ajax({
        type: "POST",
        url: "php/servicios/post.guardaralumno.php",
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
  });
})();
