/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiEditorComponent } from './ui/ui-editor/ui-editor.component';
import { UiListComponent } from './ui/ui-list/ui-list.component';
import { FormsLibModule } from 'forms-lib';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { UiConfirmComponent } from './ui/ui-confirm/ui-confirm.component';
var SharedLibModule = /** @class */ (function () {
    function SharedLibModule() {
    }
    SharedLibModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return SharedLibModule;
}());
export { SharedLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQtbGliLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFMUU7SUFBQTtJQWtCK0IsQ0FBQzs7Z0JBbEIvQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLGtCQUFrQjtxQkFDbkI7aUJBQ0Y7O0lBQzhCLHNCQUFDO0NBQUEsQUFsQmhDLElBa0JnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFVpRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi91aS91aS1lZGl0b3IvdWktZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVaUxpc3RDb21wb25lbnQgfSBmcm9tICcuL3VpL3VpLWxpc3QvdWktbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNMaWJNb2R1bGUgfSBmcm9tICdmb3Jtcy1saWInO1xuXG5pbXBvcnQgeyBNYXRUb29sYmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgVWlDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi91aS91aS1jb25maXJtL3VpLWNvbmZpcm0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVWlFZGl0b3JDb21wb25lbnQsXG4gICAgVWlMaXN0Q29tcG9uZW50LFxuICAgIFVpQ29uZmlybUNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTGliTW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBVaUVkaXRvckNvbXBvbmVudCxcbiAgICBVaUxpc3RDb21wb25lbnQsXG4gICAgVWlDb25maXJtQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTGliTW9kdWxlIHsgfVxuIl19