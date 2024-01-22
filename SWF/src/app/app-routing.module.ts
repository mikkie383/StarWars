import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { FilmsComponent } from './components/films/films.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipsComponent } from './components/starships/starships.component';

const routes: Routes = [
  {path: 'People', component: HomeComponent},
  {path: 'Planets', component: PlanetsComponent},
  {path: 'Films', component: FilmsComponent},
  {path: 'Vehicles', component: VehiclesComponent},
  {path: 'Species', component: SpeciesComponent},
  {path: 'Starships', component: StarshipsComponent},
  {path: '', redirectTo: 'People', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
