/* This file defines the server-side application configuration for the Angular application.
 It merges the common application configuration defined in app.config.ts with server-specific 
 providers, such as server rendering with prerendering routes. This configuration is used when 
 bootstrapping the application in a server environment (e.g. via `ng run build:ssr` or 
 when built for production with server-side rendering). */

import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);