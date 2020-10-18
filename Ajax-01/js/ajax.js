(function () {
  $.ajax({
    type: "GET",
    url: "http://www.json-generator.com/api/json/get/cfYVkBbcmW?indent=2",
    dataType: "json",
  })
    // Función que se ejecuta al acabar la petición correctamente
    .done((data) => {
      console.log("Terminado correctamente");

      const persona = data;

      console.log(persona);

      $("#foto").attr("src", data.picture);
      $("#txtNombre").val(data.name);
      $("#txtDireccion").val(data.address);
      $("#txtTelefono").val(data.phone);
      $("#txtGenero").val(data.gender);
    })
    // Función que se ejecuta al acabar la petición con errores
    .fail(() => {
      console.log("Terminado con errores");
    })
    // Función que se ejecuta al acabar
    .always(() => {
      console.log("Terminado");
    });
})();
