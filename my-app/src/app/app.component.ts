import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullName = "Mahindra Singh Dhoni";
  clickcount = 0;
  
  ClickMe() {
    this.clickcount++;
  }

  Click() {
    this.clickcount--;
}
}