import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list.component';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { HeroData } from './hero-data';

import { WikiComponent } from './wiki.component'
import { WikiSmartComponent } from './wiki-smart.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: HeroData }                // in-mem server data
  ],
  declarations: [ AppComponent, HeroListComponent, WikiComponent, WikiSmartComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
