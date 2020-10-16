(function() {
    const mover = function(dir) {
        const $cajaRoja = $(".cajaRoja");
        $cajaRoja.clearQueue();

        const $cajaAzul = $(".cajaAzul");
        const tl = new TimelineMax();

        switch (dir) {
            case "arr":
                $cajaRoja.animate({
                    top: "-=50px"
                }, 200);

                tl.to($cajaAzul,
                    0.2, // Duración en segundos
                    {
                        y: "-=50px"
                    });
                break;
            case "aba":
                $cajaRoja.animate({
                    top: "+=50px"
                }, 200);

                tl.to($cajaAzul, 0.2, {
                    y: "+=50px"
                });
                break;
            case "izq":
                $cajaRoja.animate({
                    left: "-=50px"
                }, 200);

                tl.to($cajaAzul, 0.2, {
                    x: "-=50px"
                });
                break;
            case "der":
                $cajaRoja.animate({
                    left: "+=50px"
                }, 200);

                tl.to($cajaAzul, 0.2, {
                    x: "+=50px"
                });
                break;
            default:
                $cajaRoja.animate({
                    left: "0px",
                    top: "0px",
                    width: "50px",
                    height: "50px",
                }, 450).css({
                    backgroundColor: "red"
                });

                tl.to($cajaAzul, 0.45, {
                    x: "0px",
                    y: "0px",
                    width: "50px",
                    height: "50px",
                    backgroundColor: "blue"
                });
        }
    };

    $(document).on("keypress", function(e) {
        const keyCode = e.keyCode;

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

    $("#btnAncho").on("click", () => {
        const $cajaRoja = $(".cajaRoja");
        $cajaRoja.clearQueue();

        const $cajaAzul = $(".cajaAzul");
        const tl = new TimelineMax();

        $cajaRoja.animate({
            width: "+=150px",
            height: "+=150px"
        }, 500).css({
            backgroundColor: "blue"
        });

        tl.to($cajaAzul, 0.5, {
            width: "+=150px",
            height: "+=150px"
                // backgroundColor: "red"
        }).to($cajaAzul, 0.3, { backgroundColor: "red" },
            "-=0.3" // Se resta este tiempo al indicado
        ); // Se ejecuta cuando acaba la primera animación
    });

    $(".btnMover").on("click", function() {
        const dir = $(this).data("dir");

        mover(dir);
    });
})();