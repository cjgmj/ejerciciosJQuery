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
          let content = "<tr>";
          content += `<td>${element.id}</td>`;
          content += `<td>${element.nombre}</td>`;
          content += '<td class="text-center">';
          content += `<a href="actualizar.html?id='${element.id}'" class="btn btn-primary">`;
          content += '<i class="fa fa-edit"></i>';
          content += "</a>";
          content += "</td>";
          content += '<td class="text-center">';
          content += `<a href="" data-id="${element.id}" class="btn btn-danger">`;
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
})();
