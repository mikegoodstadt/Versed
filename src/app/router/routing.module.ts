import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersHomeComponent, CharactersProfileComponent } from 'characters-lib';

const routes: Routes = [
    { path: '', component: CharactersHomeComponent },
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: 'characters', component: CharactersHomeComponent },
    { path: 'profile', component: CharactersProfileComponent }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
