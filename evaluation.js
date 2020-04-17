$(document).ready(function(){
//    console.log($('#trois article').width());
    var $LesOnglets = $("#onglets li") ;
    $LesOnglets.click(function(){
        $LesOnglets.removeClass("active");
        $(this).addClass("active");
        return false;
    });
    $tables = $("#trois,#videos,#table").css("display","none") ;
    $LesOnglets.click(function() {
	var $clicked = $(this) ;
        $tables.css("display","none") ;
        selecteur = $clicked.attr("data-cible") ;
        $tables.filter(selecteur).css("display","flex") ;
        // $tables.css("display","none").filter($(this).attr("data-cible")).css("display","block") ;
        return false ;
    });
    $LesOnglets.eq(0).click() ;
    $('#trois article').height($('#trois article').width());
    $('#videos nav li').click(function(){
        var video = $(this).attr('data-id');
//        console.log(video);
        var urlVideo = "https://www.youtube.com/embed/"+video;
//        console.log(urlVideo);
//        console.log($('#videos article iframe').attr('src'));
        $('#videos article iframe').attr('src', urlVideo);
    });
    var $loupe = $("<div id=\"loupe\"></div>").css("display","none").appendTo($("#table"));
    $("td").hover(
        function(){
            $loupe.css("display","block").text($(this).text());
        },
        function(){
            $loupe.css("display","none");
        }
    );
});