import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtComponent } from './art/art.component';
import { CodeComponent } from './code/code.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'art', component: ArtComponent },
  { path: 'code', component: CodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
