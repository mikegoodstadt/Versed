import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

/** wrappers */
import { PanelWrapperComponent } from './wrappers/panel-wrapper/panel-wrapper.component';
import { ErrorWrapperComponent } from './wrappers/error-wrapper/error-wrapper.component';

/** types */
import { RepeatSectionComponent } from './types/repeat-section/repeat-section.component';
import { InputChipsComponent } from './types/input-chips/input-chips.component';
import { InputPercentageComponent } from './types/input-percentage/input-percentage.component';

/** configuration */
import { config } from './forms-lib.config';

@NgModule({
  declarations: [
    PanelWrapperComponent,
    ErrorWrapperComponent,
    RepeatSectionComponent,
    InputChipsComponent,
    InputPercentageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(config),
    FormlyMaterialModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    PanelWrapperComponent,
    ErrorWrapperComponent,
    RepeatSectionComponent,
    InputChipsComponent,
    InputPercentageComponent
  ],
  providers: [],
  entryComponents: []
})
export class FormsLibModule { }
