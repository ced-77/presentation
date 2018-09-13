$(document).ready(function(){


	/*
		Travail sur l'etat First Mobile
	*/


		/*
			Menu burger 
		*/
		
			// Definition de la varible d'etat du menu
				var EtatBurgerMenu = 0; // Etat du Menu Burger Fermé
			
				// Fin de l'etat de positionnement


			//  Ouveture et fermeture du Menu Burger par l'icone de navigation
				$('#BurgerBouton').on('click', function (event){
						event.preventDefault();
							/*
								if 
							 */

				});
				// Fin de l'ouverture et fermeture du Menu Burger par l'icone

			// Fermeture du Menu burger par click sur le lien de navigation
				$('.BurgerOff').on('click', function(event){

					// Vérification de la largeur de la fenettre pour activer 
					// ou non la fonction
						// Creation de la variable de controle
							var controle_largeur_fenettre = window.innerWidth;
						// verification de la largeur
							if (controle_largeur_fenettre < 1024 ) {
						//event.preventDefault(); // Ne pas mettre cette fonction afin que le lien puisse fonctionner.
							EtatBurgerMenu = 0; // On renseigne l'etat comme fermé
							// Changement de l'icone du Menu Burger
								$('BurgerBouton').toggleClass('fa-bars');
								$('BurgerBouton').toggleClass('fa-times');
								// Fin du changement de l'icone du menu
								
							$('nav').css('display',''); // On ferme le menu

								}; 
								// fin de la condition de controle de la largeur de fenetre
				});
			
				// Fin de la fermeture du Menu Burger

			// Fin du menu burger

		// Fin du First Mobile


// Fin de la programmation javaScript // jQuery 
};