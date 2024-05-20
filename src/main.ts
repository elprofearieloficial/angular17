import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { routes } from './app.routes';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: 'main.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes,withComponentInputBinding()), provideHttpClient(withFetch())],
});
