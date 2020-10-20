import Swal from "sweetalert2";

(function () {
  $(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "php/servicios/get.alumnos.php",
      dataType: "json",
    })
      .done(function (data) {
        console.log("Correcto!");

        console.log(data); // Se imprime en consola la api
        if (data.error) {
          alert("Hay un error");
          return;
        }

        data.alumnos.forEach(function (element, index) {
          let content = `<tr id="fila${element.id}">`;
          content += `<td>${element.id}</td>`;
          content += `<td>${element.nombre}</td>`;
          content += '<td class="text-center">';
          content += `<a href="actualizar.html?id='${element.id}'" class="btn btn-primary">`;
          content += '<i class="fa fa-edit"></i>';
          content += "</a>";
          content += "</td>";
          content += '<td class="text-center">';
          content += `<a href="" data-nombre="${element.nombre}" data-id="${element.id}" class="btn btn-danger btnEliminar">`;
          content += '<i class="fa fa-trash-o"></i>';
          content += "</a>";
          content += "</td>";
          content += "</tr>";

          $("#tblRegistros").append(content);
        });
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Fallo!");

        console.log(errorThrown);
      })
      .always(function () {
        console.log("Completo!");
      });
  });

  // Borrar en base de datos
  const borrarRegistro = function (id) {
    $.ajax({
      type: "POST",
      url: `php/servicios/post.eliminaralumno.php?id=${id}`,
      dataType: "json",
    })
      .done(function (data) {
        console.log("Correcto!");

        console.log(data); // Se imprime en consola la api

        $(`#fila${id}`).remove();
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log("Fallo!");

        console.log(errorThrown);
      })
      .always(function () {
        console.log("Completo!");
      });
  };

  // Capturar evento en elemento dinámico
  $("body").on("click", ".btnEliminar", function (e) {
    e.preventDefault();

    const id = $(this).data("id");

    console.log(id);

    Swal.fire({
      title: "¿Está seguro?",
      text: `Vas a borrar al alumno ${$(this).data("nombre")}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelmButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarRegistro(id);
        Swal.fire("¡Eliminado!", "El alumno ha sido eliminado", "success");
      }
    });
  });
})();
