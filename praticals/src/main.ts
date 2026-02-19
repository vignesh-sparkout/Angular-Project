 
import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Fruits List</h3>
    <p *ngIf="items.length > 0">We have {{ items.length }} items</p>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
    <button (click)="toggle()">Fruits Items</button>
  `
})
export class App {
  show = true;
  get items() { return this.show ? ['Apple', 'Orenge', 'Guva', 'Mango','Kiwi','Pineapple'] : []; }
  toggle() { this.show = !this.show; }
}

bootstrapApplication(App);