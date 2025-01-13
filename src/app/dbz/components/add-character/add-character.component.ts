import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v7 } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: v7(),
    name: '',
    power: 0
  }

  emitCharacter():void {
    console.log(this.character)
    if ( this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    this.character = { name:'', power:0}

  }
 }
function uuid(): string | undefined {
  throw new Error('Function not implemented.');
}

