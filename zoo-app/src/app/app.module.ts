import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { animalDetailComponent } from './animal-detail/animal-detail.component';
import { animalsComponent } from './animals/animals.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { animalService } from './animal.service';
import { animalSearchComponent } from './animal-search/animal-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    animalDetailComponent,
    animalsComponent,
    DashboardComponent,
    animalSearchComponent
  ],
  providers: [animalService],
  bootstrap: [AppComponent]
})
export class AppModule { }