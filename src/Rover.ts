import { RoverInterface, RoverState, Orientation,  } from './rover.interface';
import{Point} from './point'
export class Rover implements RoverInterface {
  private position: Point;
  private orientation: Orientation;

  constructor(position: Point = new Point(0, 0), orientation: Orientation = Orientation.Nord) {
    this.position = position;
    this.orientation = orientation;
  }

  Avancer(): RoverState {
    switch (this.orientation) {
      case Orientation.Nord:
        this.position.y += 1;
        break;
      case Orientation.Est:
        this.position.x += 1;
        break;
      case Orientation.Sud:
        this.position.y -= 1;
        break;
      case Orientation.Ouest:
        this.position.x -= 1;
        break;
    }
    return this;
  }

  // Correction et utilisation de la méthode Reculer
  Reculer(): RoverState {
    switch (this.orientation) {
      case Orientation.Nord:
        this.position.y -= 1;
        break;
      case Orientation.Est:
        this.position.x -= 1;
        break;
      case Orientation.Sud:
        this.position.y += 1;
        break;
      case Orientation.Ouest:
        this.position.x += 1;
        break;
    }
    return this;
  }

  TournerAGauche(): RoverState {
    switch (this.orientation) {
      case Orientation.Nord:
        this.orientation = Orientation.Ouest;
        break;
      case Orientation.Est:
        this.orientation = Orientation.Nord;
        break;
      case Orientation.Sud:
        this.orientation = Orientation.Est;
        break;
      case Orientation.Ouest:
        this.orientation = Orientation.Sud;
        break;
    }
    return this;
  }

  TournerADroite(): RoverState {
    switch (this.orientation) {
      case Orientation.Nord:
        this.orientation = Orientation.Est;
        break;
      case Orientation.Est:
        this.orientation = Orientation.Sud;
        break;
      case Orientation.Sud:
        this.orientation = Orientation.Ouest;
        break;
      case Orientation.Ouest:
        this.orientation = Orientation.Nord;
        break;
    }
    return this;
  }

  GetPosition(): Point {
    return this.position;
  }

  GetOrientation(): Orientation {
    return this.orientation;
  }
}
const rover = new Rover(new Point(0, 0), Orientation.Nord);
console.log('État initial du rover:', rover.GetPosition(), rover.GetOrientation());
const roverr = new Rover(new Point(0, 0), Orientation.Sud);
roverr.Avancer();
console.log('Après avoir avancé:', roverr.GetPosition(), roverr.GetOrientation());
const rover2 = new Rover(new Point(0, 0), Orientation.Sud);
rover2.Reculer();
console.log('Après avoir reculé:', rover2.GetPosition(), rover2.GetOrientation());

rover.TournerAGauche();
console.log('Après avoir tourné à gauche:', rover.GetPosition(), rover.GetOrientation());


rover.TournerADroite();
console.log('Après avoir tourné à droite:', rover.GetPosition(), rover.GetOrientation());
 // Création d'une instance de Rover avec une position initiale et une orientation
const roover = new Rover(new Point(0, 0), Orientation.Nord);
console.log('État initial du rover:', `Position: (${roover.GetPosition().x}, ${roover.GetPosition().y})`, `Orientation: ${roover.GetOrientation()}`);

