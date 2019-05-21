/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var FormsLibModule = /** @class */ (function () {
    function FormsLibModule() {
    }
    FormsLibModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return FormsLibModule;
}());
export { FormsLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybXMtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9mb3Jtcy1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBR3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDOztBQUd6RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7QUFHL0YsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTVDO0lBQUE7SUFnQzhCLENBQUM7O2dCQWhDOUIsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixxQkFBcUI7d0JBQ3JCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLHdCQUF3QjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUM1QixvQkFBb0I7d0JBQ3BCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWixvQkFBb0I7d0JBQ3BCLHFCQUFxQjt3QkFDckIscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3FCQUN6QjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtvQkFDYixlQUFlLEVBQUUsRUFBRTtpQkFDcEI7O0lBQzZCLHFCQUFDO0NBQUEsQUFoQy9CLElBZ0MrQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZvcm1seU1vZHVsZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L2NvcmUnO1xuaW1wb3J0IHsgRm9ybWx5TWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAbmd4LWZvcm1seS9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNYXRDaGlwc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5cbi8qKiB3cmFwcGVycyAqL1xuaW1wb3J0IHsgUGFuZWxXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi93cmFwcGVycy9wYW5lbC13cmFwcGVyL3BhbmVsLXdyYXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEVycm9yV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vd3JhcHBlcnMvZXJyb3Itd3JhcHBlci9lcnJvci13cmFwcGVyLmNvbXBvbmVudCc7XG5cbi8qKiB0eXBlcyAqL1xuaW1wb3J0IHsgUmVwZWF0U2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMvcmVwZWF0LXNlY3Rpb24vcmVwZWF0LXNlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0Q2hpcHNDb21wb25lbnQgfSBmcm9tICcuL3R5cGVzL2lucHV0LWNoaXBzL2lucHV0LWNoaXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dFBlcmNlbnRhZ2VDb21wb25lbnQgfSBmcm9tICcuL3R5cGVzL2lucHV0LXBlcmNlbnRhZ2UvaW5wdXQtcGVyY2VudGFnZS5jb21wb25lbnQnO1xuXG4vKiogY29uZmlndXJhdGlvbiAqL1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9mb3Jtcy1saWIuY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGFuZWxXcmFwcGVyQ29tcG9uZW50LFxuICAgIEVycm9yV3JhcHBlckNvbXBvbmVudCxcbiAgICBSZXBlYXRTZWN0aW9uQ29tcG9uZW50LFxuICAgIElucHV0Q2hpcHNDb21wb25lbnQsXG4gICAgSW5wdXRQZXJjZW50YWdlQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3JtbHlNb2R1bGUuZm9yUm9vdChjb25maWcpLFxuICAgIEZvcm1seU1hdGVyaWFsTW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1seU1vZHVsZSxcbiAgICBGb3JtbHlNYXRlcmlhbE1vZHVsZSxcbiAgICBQYW5lbFdyYXBwZXJDb21wb25lbnQsXG4gICAgRXJyb3JXcmFwcGVyQ29tcG9uZW50LFxuICAgIFJlcGVhdFNlY3Rpb25Db21wb25lbnQsXG4gICAgSW5wdXRDaGlwc0NvbXBvbmVudCxcbiAgICBJbnB1dFBlcmNlbnRhZ2VDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGb3Jtc0xpYk1vZHVsZSB7IH1cbiJdfQ==