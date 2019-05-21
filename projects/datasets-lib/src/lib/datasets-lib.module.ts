import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatasetsComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    DatasetsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DatasetsComponent
  ]
})
export class DatasetsLibModule { }
