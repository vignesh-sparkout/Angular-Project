import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,        
  imports: [RouterOutlet],  // ✅ Add comma
  template: `
    <router-outlet></router-outlet>
  `
})
export class App {
  protected readonly title = signal('app');
}
