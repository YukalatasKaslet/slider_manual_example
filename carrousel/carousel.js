 $(function() {
 // almacenar slider en una variable
 var slider    = $('.frames');
 // almacenar botones en una variable
 var siguiente = $('#next_frame');
 var anterior  = $('#previous_frame');

 //mover ultima imagen al pricipio de las imágenes
 $('.frames li:last').insertBefore('.frames li:first');

 //para posicionar en la que era la primer imagen
 slider.css('margin-left', '-'+100+'%');

 function moverDerecha(){
    slider.animate(
      {marginLeft:'-'+200+'%'},
      700,
      function(){
          //la primer imagen pasa a ser la última
          $('.frames li:first').insertAfter('.frames li:last');
          //el margen vuelve a ser del -100%
          slider.css('margin-left', '-'+100+'%');
    });
 }


 function moverIzquierda(){
    slider.animate(
      {marginLeft:0},
      700,
      function(){
          //la última imagen pasa a ser la primera
          $('.frames li:last').insertBefore('.frames li:first');
          //el margen vuelve a ser del -100%
          slider.css('margin-left', '-'+100+'%');
    });
 }


 siguiente.click(function(){
  moverDerecha();
 });

 anterior.click(function(){
  moverIzquierda();
 });



});






/* Comentarios de aprendizaje

  ul:first trae el primer "ul" que encuentra
  li:first trae el primer "li" que encuentra







*/