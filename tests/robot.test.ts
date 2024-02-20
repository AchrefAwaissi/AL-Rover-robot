// import { describe, expect, test } from '@jest/globals';
import { Rover } from '../src/Rover'; // Assurez-vous que ce chemin est correct
import { Point } from '../src/point'; // Assurez-vous que ce chemin est correct
import { Orientation } from '../src/rover.interface'; // Assurez-vous que ce chemin est correct

describe('Manipulation de la position d\'un rover', () => {
	let roverInitial: Rover;

	beforeEach(() => {
	  // Initialisation du rover avant chaque test
	  roverInitial = new Rover(new Point(0, 0), Orientation.Nord);
	  roverInitial = new Rover(new Point(0, 0), Orientation.Nord);
	 
    
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



  
  
  
  
  
  

