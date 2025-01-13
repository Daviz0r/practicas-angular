import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
    <h1>Counter Component</h1>
    <h3>counter : {{counter}}</h3>
    <button class="btn btn-outline-primary" (click)="increaseBy(+1)">+1</button>
    <button class="btn btn-outline-primary" (click)="increaseBy(-1)">-1</button>
    <button class="btn btn-outline-primary" (click)="resetCounter()">reset</button>`

})

export class CounterComponent {
  public counter: number = 0;
     
  increaseBy( value:number ):void {
        this.counter += value;
      }
  resetCounter():void {
        this.counter = 0;
      }

}