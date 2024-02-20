import { PlaneteInterface } from "./rover.interface";

export class Planete implements PlaneteInterface {
    private readonly _largeur: number;
    private readonly _hauteur: number;
  
    constructor(largeur: number, hauteur: number) {
      this._largeur = largeur;
      this._hauteur = hauteur;
    }

    public getLargeur(): number {
        return this._largeur;
    }

    public getHauteur(): number {
        return this._hauteur;
    }

    ajusterPositionX(positionX: number): number {
      return (positionX % this._largeur + this._largeur) % this._largeur;
    }
  
    ajusterPositionY(positionY: number): number {
      return (positionY % this._hauteur + this._hauteur) % this._hauteur;
    }
}
