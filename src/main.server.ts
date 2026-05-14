/* This file is the main entry point for the application when running in a server 
environment (e.g. via `ng run build:ssr` or when built for production with server-side rendering).*/

import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppComponent, config, context);

export default bootstrap;
