// This file is the main entry point for the application when running in a browser environment (e.g. via `ng serve` or when built for production).

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),   provideHttpClient(withFetch()) ],
}).catch(err => console.error(err));