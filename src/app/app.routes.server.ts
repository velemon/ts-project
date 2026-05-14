/* This file defines the server-side routes for the Angular application. 
It specifies that all routes should be prerendered, which means that the server 
 will generate static HTML for each route at build time, improving performance and SEO.*/

import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
