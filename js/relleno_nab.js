$(document).ready(function(){
  var al = $("#home").offset().top;
   $(window).scroll(function(){
      var barra = $(window).scrollTop();
      var position = barra * 0.05;
      if(barra > (al/2)){
         $(".nab").addClass("solid");
      }else{
        $(".nab").removeClass("solid");
      }
   });
});