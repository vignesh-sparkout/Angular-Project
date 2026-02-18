import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './shared/side-bar/side-bar';

@Component({
  selector: 'app-root',
  standalone: true,        
  imports: [RouterOutlet, SideBar],  
  template: `
    <router-outlet></router-outlet>
  `
})
export class App {
  protected readonly title = signal('app');
}
