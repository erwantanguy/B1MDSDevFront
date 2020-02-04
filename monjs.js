$(document).ready(function(){
    //$('h1').hide(5000);
    
  for ( var i = 0; i < 5; i++ ) {
    $( '<div class="col-1">' ).appendTo( '#effets' );
  }
    $('#test').click(function() {
      $( "#effets div" ).show(2000);
      $( "#tests div" ).show(2000);
    });
     $( "#effets div" ).click(function() {
      $( this ).hide(2000, function() {
        //$( this ).remove();
      });
    });

    $('#box1').click(function(){
        $(this).css('background-color','pink').hide(4000);
    });
    $('#box2').click(function(){
        $(this).css('background-color','purple').fadeOut(2000);
    });
    $('#box3').click(function(){
        $(this).css('background-color','blue').slideUp(4000);
    });    
    
    $('#animate div').click(function(){
        $(this).animate({
            "left":"300px"
        }, 3000);
        $(this).animate({
            "top":"-300px"
        }, 4000).css('background-color','yellow');
        
//        $(this).animate({
//            "left":"300px",
//            "top":"-300px"
//        }, 2000);
        
    });
    
    $('li:nth-child(4)').addClass('alerte');
    $('#no-alerte').click(function(){
        $('li').removeClass();
    });
    $('li a').click(function(){
        $(this).parent('li').removeClass();
    });
    var i = $('li').length + 1;
    console.log('i = ' + i);
    //alert(i);
    $('#plus').click(function(){
        $('<li>ligne ' + i + '</li>').appendTo('ul');
        i++;
        if(i > 1){
            $('#moins').show();
        }
        console.log(i);
    });
    $('#moins').click(function(){
        if(i > 1){
            $('li:last').remove();
            i--;
            if(i == 1){
                $(this).hide();
            }
        }
        console.log(i);
    });
    
    //TOGGLE EFFECTS
    $('#theToggle').click(function(){
        //$('#maBoite').toggle(2000);
        $('#maBoite').toggleClass('bordure');
    });
    $('#toggle p').click(function(){
        $(this).toggleClass('highlight');
    });
    $('#toggle p').hover(function(){
        $('#maBoite').toggleClass('vert');
    });
    
});
//https://github.com/erwantanguy/B1MDSDevFront