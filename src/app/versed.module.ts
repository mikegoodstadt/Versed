import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './router/routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { WebStorageModule } from 'ngx-store';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';

import { VersedComponent } from './versed.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    CharactersLibModule
  ],
  providers: [],
  bootstrap: [VersedComponent]
})
export class VersedModule { }
