import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersHomeComponent } from 'characters-lib';

// import { CharactersComponent } from 'characters-lib';
// import { UserAdminComponent } from 'users-lib';

const routes: Routes = [
    { path: '', component: CharactersHomeComponent },
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: 'characters', component: CharactersHomeComponent },
    // { path: 'user', component: UserAdminComponent }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
