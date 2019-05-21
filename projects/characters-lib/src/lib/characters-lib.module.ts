import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebStorageModule } from 'ngx-store';
import { APP_INITIALIZER } from '@angular/core';

import { SharedLibModule } from 'shared-lib';
import { FormsLibModule } from 'forms-lib';
import { CharactersLibService } from './characters-lib.service';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
          MatButtonModule,
          MatSidenavModule,
          MatIconModule,
          MatListModule,
          MatGridListModule,
          MatCardModule,
          MatMenuModule } from '@angular/material';
import { CharactersHomeComponent } from './components/characters-home/characters-home.component';
import { CharactersProfileComponent } from './components/characters-profile/characters-profile.component';
import { CharactersCollectionComponent } from './components/characters-collection/characters-collection.component';

// Use APP_INITIALIZER to load default config/projects before initializing.
// e.g. https://stackblitz.com/edit/angular-app-initializer-load-config-mng
// Note: Service function supplying defaults must return a Promise.
// See: https://gist.github.com/fernandohu/122e88c3bcd210bbe41c608c36306db9
// Export function for useFactory, as Arrow functions (Lambda) not supported.
// See: https://github.com/angular/angular/issues/23629
// Also add @dynamic or use variable to return Service function.
// See: https://github.com/angular/angular/issues/19698#issuecomment-338340211
export function loadCharacters(chrSrv: CharactersLibService) {
  // const init = () => prjSrv.init(); // Original arrow function for provider.
  // Arrow function not necessary once removed from providers seciton below.
  const init = function() {
    console.log('Initializing Versed');
    return chrSrv.init();
  };
  return init;
}

@NgModule({
  declarations: [
    CharactersHomeComponent,
    CharactersProfileComponent,
    CharactersCollectionComponent
  ],
  imports: [
    CommonModule,
    WebStorageModule,
    FormsLibModule,
    SharedLibModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  exports: [
    CharactersHomeComponent,
    CharactersProfileComponent,
    CharactersCollectionComponent,
    FormsLibModule
  ],
  providers: [CharactersLibService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadCharacters,
      deps: [CharactersLibService],
      multi: true
    }],
  entryComponents: []
})
export class CharactersLibModule { }
