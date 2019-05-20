import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './router/routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { WebStorageModule } from 'ngx-store';

import { VersedComponent } from './versed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
// import { LayoutModule } from '@angular/cdk/layout';
import { LayoutModule } from './layout/layout.module';
import { CharactersLibModule } from 'characters-lib';

@NgModule({
  declarations: [
    VersedComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    // WebStorageModule,
    BrowserAnimationsModule,
    // MatToolbarModule,
    // MatButtonModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatListModule,
    LayoutModule,
    CharactersLibModule
  ],
  providers: [],
  bootstrap: [VersedComponent]
})
export class VersedModule { }
