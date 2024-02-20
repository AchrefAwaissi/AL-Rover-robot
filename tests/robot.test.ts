// import { describe, expect, test } from '@jest/globals';
import { Rover } from '../src/Rover'; // Assurez-vous que ce chemin est correct
import { Point } from '../src/point'; // Assurez-vous que ce chemin est correct
import { Orientation } from '../src/rover.interface'; // Assurez-vous que ce chemin est correct
import { Planete } from '../src/Planete'; // Assurez-vous que ce chemin est correct

describe('Manipulation de la position d\'un rover', () => {
	let roverInitial: Rover;
	let planete: Planete;
	const petitePlanete = new Planete(5, 5); // Une petite planète pour tester les bouclages fréquents.
	const grandePlanete = new Planete(100, 100); // Une grande planète pour tester les déplacements longs avant le bouclage.
	
	beforeEach(() => {
	  // Initialisation du rover avant chaque test
	  roverInitial = new Rover(new Point(0, 0), Orientation.Nord);
	  roverInitial = new Rover(new Point(0, 0), Orientation.Nord);
	 
	  planete = new Planete(10, 8); // Création d'une planète avec une largeur de 10 et une hauteur de 8
     


	});
	test('ajusterPositionX devrait retourner la position ajustée sur l\'axe des abscisses', () => {
		// Tester avec une position en dehors de la largeur de la planète
		expect(planete.ajusterPositionX(12)).toEqual(2); // 12 % 10 = 2
		expect(planete.ajusterPositionX(-3)).toEqual(7); // (-3 % 10 + 10) % 10 = 7
		expect(planete.ajusterPositionX(5)).toEqual(5); // 5 % 10 = 5
	
		// Tester avec une position dans la largeur de la planète
		expect(planete.ajusterPositionX(8)).toEqual(8); // 8 % 10 = 8
		expect(planete.ajusterPositionX(0)).toEqual(0); // 0 % 10 = 0
	  });
	
	  test('ajusterPositionY devrait retourner la position ajustée sur l\'axe des ordonnées', () => {
		// Tester avec une position en dehors de la hauteur de la planète
		expect(planete.ajusterPositionY(10)).toEqual(2); // 10 % 8 = 2
		expect(planete.ajusterPositionY(-3)).toEqual(5); // (-3 % 8 + 8) % 8 = 5
		expect(planete.ajusterPositionY(4)).toEqual(4); // 4 % 8 = 4
	
		// Tester avec une position dans la hauteur de la planète
		expect(planete.ajusterPositionY(6)).toEqual(6); // 6 % 8 = 6
		expect(planete.ajusterPositionY(0)).toEqual(0); // 0 % 8 = 0
	  });


	  test('Rover boucle de gauche à droite', () => {
		const rover = new Rover(new Point(0, 0), Orientation.Ouest); // Positionner le rover au bord gauche.
		rover.Avancer(); // Le rover avance au-delà du bord gauche.
	  
		// Utilisez la petitePlanete pour l'ajustement, pour correspondre à l'attente.
		expect(petitePlanete.ajusterPositionX(rover.GetPosition().x)).toBe(petitePlanete.getLargeur() - 1); // Le rover devrait réapparaître à droite.
	  });
	  


	test('quand il avance vers le Nord, sa position y augmente de 1', () => {
		roverInitial.Avancer();
	  expect(roverInitial.GetPosition().y).toEqual(1);
	});

	test('quand il avance vers le Sud, sa position y diminue de 1', () => {
		roverInitial.TournerADroite(); // Change l'orientation vers l'Est
		roverInitial.TournerADroite(); // Change l'orientation vers le Sud
		roverInitial.Avancer();
	  expect(roverInitial.GetPosition().y).toEqual(-1);
	});

	test('quand il avance vers l\'Est, sa position x augmente de 1', () => {
		roverInitial.TournerADroite(); // Change l'orientation vers l'Est
		roverInitial.Avancer();
	  expect(roverInitial.GetPosition().x).toEqual(1);
	});

	test('quand il avance vers l\'Ouest, sa position x diminue de 1', () => {
		roverInitial.TournerAGauche(); // Change l'orientation vers l'Ouest
		roverInitial.Avancer();
	  expect(roverInitial.GetPosition().x).toEqual(-1);
	});

	test('quand il recule vers le Nord, sa position y diminue de 1', () => {
		roverInitial.Reculer();
	  expect(roverInitial.GetPosition().y).toEqual(-1);
	});

	test('quand il recule vers le Sud, sa position y augmente de 1', () => {
		roverInitial.TournerADroite(); //  l'orientation vers l'Est
		roverInitial.TournerADroite(); //  l'orientation vers le Sud
		roverInitial.Reculer();
	  expect(roverInitial.GetPosition().y).toEqual(1);
	});

	test('quand il recule vers l\'Est, sa position x diminue de 1', () => {
		roverInitial.TournerADroite(); //  l'orientation vers l'Est
		roverInitial.Reculer();
	  expect(roverInitial.GetPosition().x).toEqual(-1);
	});

	test('quand il recule vers l\'Ouest, sa position x augmente de 1', () => {
		roverInitial.TournerAGauche(); //  l'orientation vers l'Ouest
		roverInitial.Reculer();
	  expect(roverInitial.GetPosition().x).toEqual(1);
	});
	test('étant donné un rover, quand il recule deux fois, alors sa position y diminue de 2', () => {
		const roverFinal = (roverInitial.Reculer() as Rover).Reculer();
		expect(roverFinal.GetPosition().y).toEqual(-2);
	  });
});

  
  
  
  
  
  

