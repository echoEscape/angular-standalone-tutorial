import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <h1>Hello World</h1>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello World';
}
