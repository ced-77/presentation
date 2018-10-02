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

						console.log('je passe par ici...');
						//event.preventDefault();
							// change l'icon de menu soit burger soit croix
								// Changement de l'icone du Menu burger
									$('#BurgerBouton').toggleClass('fa-bars');  // Si la class est absente, injecte-la; si elle est présente, enlève-la
									$('#BurgerBouton').toggleClass('fa-times'); // Si la class est absente, injecte-la; si elle est présente, enlève-la

								// Si le menu est fermé, il faut l'ouvrir et vice-versa
									if(EtatBurgerMenu == 0){  // "Si BurgerMenu est fermé ...""

										// faire apparaitre le menu par un display initial sur la balise NAV
											$('nav').fadeIn();


										// Changer la valeur de EtatBurgerMenu
											EtatBurgerMenu = 1;  // "... BurgerMenu est ouvert"

									} else{   // Sinon (si le BurgerMenu est ouvert) ...

										// faire disparaitre le menu par un display none sur la balise NAV
											$('nav').css('display','');

										// Changer la valeur de EtatBurgerMenu
											EtatBurgerMenu = 0;  // ... BurgerMenu est fermé
									};

							
					}); // Fin de l'ouverture et fermeture du Menu Burger par l'icone

			// Fermeture du Menu burger par click sur le lien de navigation
				$('.BurgerOff').on('click', function(event){

					// Vérification de la largeur de la fenettre pour activer 
					// ou non la fonction
					// 
					// Actuellement je le mets à 4000px car le site est fait pour 
					// une application mobile. 
					// 
					// par la suite il sera adapté à la largeur de page donc la 
					// valeur sera revue à la baisse.
					// 
						// Creation de la variable de controle
							var controle_largeur_fenettre = window.innerWidth;
							console.log('controle_largeur_fenettre : '+controle_largeur_fenettre);
						// verification de la largeur
							if (controle_largeur_fenettre < 4000 ) {
						//event.preventDefault(); // Ne pas mettre cette fonction afin que le lien puisse fonctionner.
							EtatBurgerMenu = 0; // On renseigne l'etat comme fermé
							// Changement de l'icone du Menu Burger
								$('#BurgerBouton').toggleClass('fa-bars');
								$('#BurgerBouton').toggleClass('fa-times');
								// Fin du changement de l'icone du menu
								
							$('nav').css('display',''); // On ferme le menu

								}; 
								// fin de la condition de controle de la largeur de fenetre
				});// Fin de la fermeture du Menu Burger

			// Fin du menu burger

		// Fin du First Mobile


// Fin de la programmation javaScript // jQuery 
});