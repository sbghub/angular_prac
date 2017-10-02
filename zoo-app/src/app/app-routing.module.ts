import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { animalsComponent } from './animals/animals.component';
import { animalDetailComponent } from './animal-detail/animal-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/detail/0', pathMatch: 'full' },
  { path: 'animals', component: animalsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: animalDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }