/* ••[1]••••••••••••••••••••••••• main.ts •••••••••••••••••••••••••••••• */

import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/components/app/app.component';
import { AppData } from './app/data/app-data';
import { AppRoutingModule } from './app/components/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      AppRoutingModule,
      BrowserModule,
      HttpClientModule,
      InMemoryWebApiModule.forRoot(AppData, { delay: 1000 })
    ),
    provideAnimations(),
  ],
}).catch((err: Error): void => console.error(err));
