(function () {
  $.ajax({
    type: "GET",
    url: "http://www.json-generator.com/api/json/get/ceMshLpYaG?indent=2",
    dataType: "json",
  })
    // Función que se ejecuta al acabar la petición correctamente
    .done((data) => {
      console.log("Terminado correctamente");

      const personas = data;

      for (const persona of personas) {
        let tags = "";

        for (const tag of persona.tags) {
          tags += `<span class="badge badge-primary ml-1">${tag}</span>`;
        }

        let html = "<tr>";
        html += `<td>${persona.name}</td>`;
        html += `<td>${persona.age}</td>`;
        html += `<td>${tags}</td>`;
        // html += `<td>${persona.tags.join(", ")}</td>`; // Tags sin estilo
        html += "</tr>";

        $(".table").append(html);
      }
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
