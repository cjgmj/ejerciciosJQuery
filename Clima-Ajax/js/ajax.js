(function () {
  var latitude = 40.4167;
  var longitude = -3.70325;

  const mostrarDatos = function (data) {
    const url = `img/${data.weather[0].icon}.png`;
    $(".imgClima").attr("src", url);

    const temperatura = Math.round(data.main.temp);
    $(".lblTemperatura").html(`${temperatura}&#176;`);

    $(".divLoading").fadeOut(200, () => $(".divInfo").fadeIn(200));
  };

  $.ajax({
    type: "GET",
    url:
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0",
    dataType: "jsonp",
  })
    .done(function (data) {
      console.log("Correcto!");
      console.log(data); // Se imprime en consola la api

      mostrarDatos(data);
    })
    .fail(function () {
      console.log("Fallo!");
    })
    .always(function () {
      console.log("Completo!");
    });
})();
