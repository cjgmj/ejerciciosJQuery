(function() {
    const $cajaRoja = $(".cajaRoja"); // Comienza el nombre con $ para indicar que es un objeto completo de jQuery

    const mover = function(dir) {
        $cajaRoja.clearQueue(); // Se limpia la cola para evitar que se siga moviendo una vez dejado de pulsar

        switch (dir) {
            case "arr":
                $cajaRoja.animate({
                    top: "-=50px" // Se le resta a la posición vertical que tenga
                }, 200); // El 200 indica la velocidad con la que realizará el movimiento
                break;
            case "aba":
                $cajaRoja.animate({
                    top: "+=50px" // Se le suma a la posición vertical que tenga
                }, 200);
                break;
            case "izq":
                $cajaRoja.animate({
                    left: "-=50px" // Se le resta a la posición horizontal que tenga
                }, 200);
                break;
            case "der":
                $cajaRoja.animate({
                    left: "+=50px" // Se le suma a la posición horizontal que tenga
                }, 200);
                break;
            default:
                $cajaRoja.animate({
                    left: "0px",
                    top: "0px"
                }, 1000);
        }
    };

    $(document).on("keypress", function(e) {
        const keyCode = e.keyCode;
        // console.log(keyCode);

        switch (keyCode) {
            case 119:
                mover("arr");
                break;
            case 115:
                mover("aba");
                break;
            case 100:
                mover("der");
                break;
            case 97:
                mover("izq");
                break;
            default:
                mover("res");
        }
    });

    $(".btnMover").on("click", function() {
        const dir = $(this).data("dir");

        mover(dir);
    });

    // Animar tamaño
    $("#btnSize").on("click", () => {
        $cajaRoja.animate({
                width: "+=100px",
                height: "+=100px"
            }, () => { // Función que se ejecutará al terminar la animación
                console.log("Acabó la animación");
                // $cajaRoja.animate({ //Se puede concatenar
                //     top: "-=10px"
                // });
            })
            .animate({ // Función anterior concatenada
                width: "-=100px",
                height: "-=100px"
                    // backgroundColor: "green" // No se puede animar el color
            })
            // .css({ // Para cambiar el color usamos css
            //     backgroundColor: "green"
            // });
            .animate({
                opacity: 0.1
            }, 1500, function() {
                $(this).remove();
            });
    });
})();