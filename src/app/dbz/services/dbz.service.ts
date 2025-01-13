import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v7 as uuid } from 'uuid';



@Injectable({
  providedIn: 'root'
})
export class DbzService {
 public characters: Character[] = [{
        id: uuid(),
        name: 'krillin',
        power: 1000
    },{
        id: uuid(),
        name: 'Goku',
        power: 10000
    },{
        id: uuid(),
        name: 'Vegeta',
        power: 3500
    }];

    addCharacter(character:Character):void{
      const newCharacter: Character = {id: uuid(), ...character };

        this.characters.push(newCharacter);
    }

    deleteCharacterById( id: string) {
      this.characters = this.characters.filter( character => character.id !== id );
    }

}
