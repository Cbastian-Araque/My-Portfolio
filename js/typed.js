const typed = new Typed('.typed', {
//     strings: [
//     '<i class="front">Desarrollador Web</i>', 
//     '<i class="front">Front-End</i>',
//     '<i class="front">JavaScript</i>',
//     '<i class="front">HTML5 y CSS3</i>',
//     '<i class="front">Autodidacta</i>'
// ],

stringsElement: '#escritura', //ID del elemento con las cadenas de texto a mostrar
typeSpeed: 75, // Velocidad para cada letra (milisegundos)
startDelay: 300, //Tiempo de retraso en inciar, aplica al momento de reiniciar
backSpace: 300,  //Velocidad para borrar una letra
smartBackspace: true,   //Elimina solamente las palabras nuevas de una cadena de texto
shuffle: false, //Para hacer que la escritura sea aleatoria
backDelay: 1500, //Tiempo de espera despues de escribir una palabra
loop: true, //Para repetir el array de palabras (es decir el string)
loopCount: false,   // Cantidad de veces que se repite el array (false = infinite)
showCursor: true,   //Para mostrar el cursor palpitando
cursorChar: '|', //Carácter para el cursos palpitante
contentTyped: 'html',

});
