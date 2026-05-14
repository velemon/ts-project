/* This is the root component of the application, which serves as the main layout and 
entry point for the Angular application. It is a standalone component that imports the
RouterModule to enable routing within the application. */

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}