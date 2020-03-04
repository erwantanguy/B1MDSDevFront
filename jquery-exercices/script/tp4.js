/*
 *	Formation jQuery
 *	TP 4 : �v�nements
*/

// Encapsulation :
(function ($) {

	// Au chargement de la page :
	$(document).ready(function(){
	
		/*
			EXEMPLE 
			Classe "active" sur les items cliqu�s dans le menu par onglet
		*/
		
		// Variables contenant l'ensemble des liens du menu par onglet :
		var $ongletItems = $(".onglets a") ;
		
		// Fonction d�clench�es quand on clique sur l'un de ces items
		$ongletItems.click(function(){
			
			// On enl�ve la classe sur tous les items
			$ongletItems.removeClass("active") ;
			
			// On met la classe active sur l'item qui a �t� cliqu�
			$(this).addClass("active") ;
			
			// Annule l'action par d�faut
			return false ;
			
		});
	
		/*
			EXERCICE 1
			Cacher les tableaux.
			Quand on clique sur un onglet, le tableau li� appara�t.
			Le cas �ch�ant, les autres tableaux disparaissent.
			Astuce :
			$cible.css("display","none") cache un �l�ment et $cible.css("display","block") le remontre (pour un �l�ment de type bloc).
		*/
		var tables = $("table").css("display","none");
                //console.log(tables);
                
                $ongletItems.click(function(){
                    //var $clique = $(this);
                    //console.log($clique);
                    //$("table").css("display","none");
                    //selecteur = $clique.attr("href");
                    //console.log(selecteur);
                    //tables.filter(selecteur).css("display","block");
                    tables.css("display","none").filter($(this).attr("href")).css("display","block");
                    return false;
                });
                $ongletItems.eq(0).click() ;
		/*
			EXERCICE 2
			Dans le conteneur (�div#conteneur�), ajouter l'�l�ment suivant :
			<div id="loupe"></div>
			Masqu� par d�faut, cet �l�ment appara�t quand on survole une cellule. Il affiche alors le contenu de la cellule.		
		*/
                        var $loupe = $('<div id="loupe"></div>').appendTo('#conteneur').css('display','none');
                        //$('#conteneur').append('<div id="loupe"></div>');
                        $('td').hover(
                                function(){
//                                    $loupe.css('display','block');
//                                    var $text = $(this).text();
//                                    console.log($text);
//                                    $loupe.text($text);
                                    $loupe.css('display','block').text($(this).text());
                                },
                                function(){
                                    $loupe.css('display','none');
                                }
                    );
		/*
			EXERCICE 3
			Quand une cellule est survol�e, les cellules de la m�me ligne et de la m�me colonne prennent la classe on.
			La cellule survol�e prend la classe active.
			Astuce :
			On retrouve les cellules d'une m�me colonne gr�ce � leur attribut headers. 
			En effet, sa valeur est l'identifiant de la t�te de la colonne.
		*/
               
               $('table').each(function(){
                   var letableau = $(this);
                   letableau.find('td').hover(
                        function(){
                            var $td = $(this);
                            var $headers = $td.attr("headers") ;
                            //console.log($headers);
                            letableau.find('[headers='+$headers+']').addClass('on');
                            letableau.find('#'+$headers).addClass('on');
                            
                            $td.closest("tr").children().addClass('on');
                            
                            $td.addClass('active');                            
                        },
                        function(){
                            letableau.find('th,td').removeClass('on').removeClass('active');
                        }
                    );
               });
		
	}); // Fin des instructions envoy�es au chargement de la page
	
})(jQuery); // Fin de l'encapsulation
