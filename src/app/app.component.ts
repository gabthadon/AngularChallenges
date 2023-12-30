import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
// In your main component or module
items = [
  { title: 'Section 1', body: 'Content for Section 1' },
  { title: 'Section 2', body: 'Content for Section 2' },
  { title: 'Section 3', body: 'Content for Section 3' }
];

}
