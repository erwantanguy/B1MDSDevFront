/*
 *	Formation jQuery
 *	TP 1 : S�lection et style
*/

// Encapsulation :
(function ($) {

	// Au chargement de la page :
	$(document).ready(function(){
	
		/*
			EXEMPLE :
			Aligner � gauche la premi�re ligne du <thead>
		*/
               
              //AJOUTER une ligne
		var illeetvilaine = '<tr id="dep35"><td headers="reg23nom">Ille et Vilaine</td><td headers="reg23t4">45</td><td headers="reg23t3">23</td><td headers="reg23t2">80</td><td headers="reg23t1">60</td></tr>';               
               $(illeetvilaine).appendTo($('#reg23'));
               // changer Gironde par Finistère
               var test = $('#reg1 tbody tr:nth-child(2) td:first-child').text();
               console.log(test);
               $('#reg1 tbody tr:nth-child(2) td:first-child').text('Les B1 de MyDigitalSchool');
               
               //disparition
               $('caption').click(function(){
                   //$(this).siblings('tbody').children('tr:nth-child(3)').toggle();
                   //$(this).parent().children('tbody').children('tr:nth-child(3)').toggle();
                   $(this).parent().children('tbody').children('tr:nth-child(3)').toggleClass('grand');
               });
               
               
               
               
               
		// S�lection des 1eres cases avec le s�lecteur CSS "thead th:first-child"
		var $premieresCasesThead = $("thead th:first-child") ;
		
		// On applique le style
		$premieresCasesThead.css("text-align","left") ;
		
		/*
			EXERCICE 1 :
			Dans chaque tableau, mettre la derni�re ligne en italique
		*/
var derniereLigne = {
    "font-style":"normal",
    color:"#f00"
};
$("tbody tr:last-child").children('td').css(derniereLigne);
//console.log(derniereLigne);
//$("tbody tr:last-child").css('color','red').children('td').css('font-style','normal');
		/*
			EXERCICE 2 :
			Dans le corps des tableaux, attribuer � la premi�re cellule de chaque ligne le style suivant :

				{
					color: #555555;
					font-weight: bold;
					text-align: left;
				}			
			
			Utiliser pour cela le format JSON.
			NB : dans l'ennonc� les styles sont �crits avec une syntaxe CSS, qui n'est pas celle que vous devez utiliser
			
		*/
//		var jSonStyle = {
//			textAlign:"left",
//			fontWeight:"bold",
//			color:"#555"
//		};
//                $('tbody td:first-child').css(jSonStyle);
                $('tbody td:first-child').css({
			textAlign:"left",
			fontWeight:"bold",
			color:"#555"
		});
		/*
			EXERCICE 3 :
			Attribuer � la ligne ayant l'identifiant reg24ref la couleur de fond #FBEC88
		*/
		$('#reg24ref').css('background-color','#FBEC88');
		/*
			EXERCICE 4 :
			Attribuer aux lignes paires des tableaux (dans le tbody) la couleur de fond  #e8e8e8
			Sauf si elles ont l'identifiant "#reg24ref"
		*/
		$('tbody tr:not(#reg24ref):nth-child(even)').css('background-color','#e8e8e8');		
                
                
	}); // Fin des instructions envoy�es au chargement de la page
	
})(jQuery); // Fin de l'encapsulation
