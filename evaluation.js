$(document).ready(function(){
//    console.log($('#trois article').width());

// je récupère l'ensemble des onglets dans une variable
    var $LesOnglets = $("#onglets li") ;
// J'affiche l'onglet actif en fonction du click
    $LesOnglets.click(function(){
        // je rend non actif d'abord l'onglet précédemment actif
        $LesOnglets.removeClass("active");
        // je rends actif l'onglet cliqué = valeur dans $(this)
        $(this).addClass("active");
        return false;
    });
// Je cache toutes les zones
    $tables = $("#trois,#videos,#table").css("display","none"); // ou .hide()
// j'affiche la zone correspondant à l'onglet en fonction du click
    $LesOnglets.click(function() {
        // je mets les données du click dans une variables
	var $clicked = $(this) ;
        // je chache toutes les zones
        $tables.css("display","none") ; // ou .hide()
        // je récupère l'attribut ciblé      
        selecteur = $clicked.attr("data-cible") ;
        // j'affiche la zone correspond à l'attribut ciblé
        $tables.filter(selecteur).css("display","flex") ;
        // $tables.css("display","none").filter($(this).attr("data-cible")).css("display","block") ;
        return false ;
    });
    // j'affiche par défaut le premier onglet
    $LesOnglets.eq(0).click() ;
    
    // je récupère la largeur des blocs et je leur donne cette largeur en hauteur
    $('#trois article').height($('#trois article').width());
    
    // dans le html, chaque titre à un attribut data-id qui correspond à l'id de la vidéo >>>> je réalise un click pour mettre en place une action
    $('#videos nav li').click(function(){
        //je mets dans une variable attribut data-id du li cliqué
        var video = $(this).attr('data-id');
//        console.log(video);
        // je mets dansune variable le lien youtube avec le nouvel id
        var urlVideo = "https://www.youtube.com/embed/"+video;
//        console.log(urlVideo);
//        console.log($('#videos article iframe').attr('src'));
        // j'insère la nouvelle url de la vidéo dans l'attribut src de l'iframe 
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