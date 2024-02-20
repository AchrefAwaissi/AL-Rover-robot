export interface RoverInterface {
    Avancer(): RoverState;
    Reculer(): RoverState;
    TournerAGauche(): RoverState;
    TournerADroite(): RoverState;
  }
  
  export interface RoverState {
    GetPosition(): Point;
    GetOrientation(): Orientation;
  }
  
  export interface Point {
    x: number;
    y: number;
  }
  export enum Orientation {
    Nord = 'N',
    Sud = 'S',
    Est = 'E',
    Ouest = 'O'
  }
  export interface PlaneteInterface {
    ajusterPositionX(positionX: number, largeur: number): number;
    ajusterPositionY(positionY: number, hauteur: number): number;
  }