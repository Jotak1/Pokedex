import { AboutComponent } from './components/about/about.component';
import { PokeTablaComponent } from './components/poke-tabla/poke-tabla.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: PokeTablaComponent},
  {path: 'about', component: AboutComponent},
  {path: '', pathMatch: 'full', redirectTo: 'about' },
  {path: '**', pathMatch: 'full', redirectTo: 'about'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
