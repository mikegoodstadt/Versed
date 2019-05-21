import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiEditorComponent } from './ui/ui-editor/ui-editor.component';
import { UiListComponent } from './ui/ui-list/ui-list.component';
import { FormsLibModule } from 'forms-lib';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { UiConfirmComponent } from './ui/ui-confirm/ui-confirm.component';

@NgModule({
  declarations: [
    UiEditorComponent,
    UiListComponent,
    UiConfirmComponent
  ],
  imports: [
    CommonModule,
    FormsLibModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    UiEditorComponent,
    UiListComponent,
    UiConfirmComponent
  ]
})
export class SharedLibModule { }
