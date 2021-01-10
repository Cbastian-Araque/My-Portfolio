$(document).ready(function(){
    var about = {
        padre: $('#desplazamiento'),
        numeroSlide: $('#desplazamiento').children('.slide').length,
        posicion: 1
    }

    about.padre.children('.slide').first().css({
        'left': 0
    });

    var altoAbout = function(){
        var alto = about.padre.children('.slide').outerHeight();

        about.padre.css({
            'height': alto + 'px'
        });

        // console.log(alto);
    }

    altoAbout();

    $(window).resize(function(){
        altoAbout();
    });

    //----------------------------------------
    //------- Slide
    //----------------------------------------

    //flecha o boton siguiente
    $('#next').on('click', function(e){
        e.preventDefault();


        //esto hará que la clase activa cambie de a el slide siguiente
        if(about.posicion < about.numeroSlide){
            //los slides inician desde la derecha
            about.padre.children().not('.active').css({
                'left': '100%'
            });
            // La clase active cambiara entre los slides
            $('#desplazamiento .active').removeClass('active').next().addClass('active').animate({
            'left': '0'
            });

            //para que los slides se vayan desplazando hacia la izquierda al presionar el boton derecho
            $('#desplazamiento .active').prev().animate({
                'left': '-100%'
            });

            //la posicion irá cambiando, incrementando en 1
            about.posicion = about.posicion + 1;
        } else {

            // El último slide se animará hacia la izquierda
            $('#desplazamiento .active').animate({
                'left': '-100%'
            })

            about.padre.children().not('.active').css({
                'left': '100%'
            });

            //se elimina la clase active, para reiniciar la posicion cuando llegue al máximo de sliders
            $('#desplazamiento .active').removeClass('active');
            about.padre.children('.slide').first().addClass('active').animate({
                'left': '0'
            });

            about.posicion = 1;
        }

        
    });

    //flecha o boton anterior
    $('#prev').on('click', function(e){
        e.preventDefault();

        if(about.posicion > 1){
            about.padre.children().not('.active').css({
                'left': '-100%'
            });
            $('#desplazamiento .active').animate({
                'left': '100%'
            });

            $('#desplazamiento .active').removeClass('active').prev().addClass('active').animate({
                'left': 0
            });

            about.posicion = about.posicion - 1;

        }else{
            about.padre.children().not('.active').css({
                'left': '-100%'
            });
            
            $("#about .active").animate({
                'left': '100%'
            });

            $("#about .active").removeClass('active');
            about.padre.children().last().addClass('active').animate({
                'left': 0
            });

            about.posicion = about.numeroSlide;
        }

    });
});