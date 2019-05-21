/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebStorageModule } from 'ngx-store';
import { APP_INITIALIZER } from '@angular/core';
import { SharedLibModule } from 'shared-lib';
import { FormsLibModule } from 'forms-lib';
import { CharactersLibService } from './characters-lib.service';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
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
/**
 * @param {?} chrSrv
 * @return {?}
 */
export function loadCharacters(chrSrv) {
    // const init = () => prjSrv.init(); // Original arrow function for provider.
    // Arrow function not necessary once removed from providers seciton below.
    /** @type {?} */
    var init = (/**
     * @return {?}
     */
    function () {
        console.log('Initializing Versed');
        return chrSrv.init();
    });
    return init;
}
var CharactersLibModule = /** @class */ (function () {
    function CharactersLibModule() {
    }
    CharactersLibModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return CharactersLibModule;
}());
export { CharactersLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVycy1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2hhcmFjdGVycy1saWIvIiwic291cmNlcyI6WyJsaWIvY2hhcmFjdGVycy1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFDZixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixhQUFhLEVBQ2IsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQzs7Ozs7Ozs7Ozs7OztBQVVuSCxNQUFNLFVBQVUsY0FBYyxDQUFDLE1BQTRCOzs7O1FBR25ELElBQUk7OztJQUFHO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQTtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVEO0lBQUE7SUFvQ21DLENBQUM7O2dCQXBDbkMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWix1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsNkJBQTZCO3FCQUM5QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsYUFBYTtxQkFDZDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsdUJBQXVCO3dCQUN2QiwwQkFBMEI7d0JBQzFCLDZCQUE2Qjt3QkFDN0IsY0FBYztxQkFDZjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxvQkFBb0I7d0JBQzlCOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsY0FBYzs0QkFDMUIsSUFBSSxFQUFFLENBQUMsb0JBQW9CLENBQUM7NEJBQzVCLEtBQUssRUFBRSxJQUFJO3lCQUNaLENBQUM7b0JBQ0osZUFBZSxFQUFFLEVBQUU7aUJBQ3BCOztJQUNrQywwQkFBQztDQUFBLEFBcENwQyxJQW9Db0M7U0FBdkIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBXZWJTdG9yYWdlTW9kdWxlIH0gZnJvbSAnbmd4LXN0b3JlJztcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTaGFyZWRMaWJNb2R1bGUgfSBmcm9tICdzaGFyZWQtbGliJztcbmltcG9ydCB7IEZvcm1zTGliTW9kdWxlIH0gZnJvbSAnZm9ybXMtbGliJztcbmltcG9ydCB7IENoYXJhY3RlcnNMaWJTZXJ2aWNlIH0gZnJvbSAnLi9jaGFyYWN0ZXJzLWxpYi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBNYXRUb29sYmFyTW9kdWxlLFxuICAgICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgICBNYXRTaWRlbmF2TW9kdWxlLFxuICAgICAgICAgIE1hdEljb25Nb2R1bGUsXG4gICAgICAgICAgTWF0TGlzdE1vZHVsZSxcbiAgICAgICAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICAgICAgICBNYXRDYXJkTW9kdWxlLFxuICAgICAgICAgIE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBDaGFyYWN0ZXJzSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGFyYWN0ZXJzLWhvbWUvY2hhcmFjdGVycy1ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFyYWN0ZXJzUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGFyYWN0ZXJzLXByb2ZpbGUvY2hhcmFjdGVycy1wcm9maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFyYWN0ZXJzQ29sbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaGFyYWN0ZXJzLWNvbGxlY3Rpb24vY2hhcmFjdGVycy1jb2xsZWN0aW9uLmNvbXBvbmVudCc7XG5cbi8vIFVzZSBBUFBfSU5JVElBTElaRVIgdG8gbG9hZCBkZWZhdWx0IGNvbmZpZy9wcm9qZWN0cyBiZWZvcmUgaW5pdGlhbGl6aW5nLlxuLy8gZS5nLiBodHRwczovL3N0YWNrYmxpdHouY29tL2VkaXQvYW5ndWxhci1hcHAtaW5pdGlhbGl6ZXItbG9hZC1jb25maWctbW5nXG4vLyBOb3RlOiBTZXJ2aWNlIGZ1bmN0aW9uIHN1cHBseWluZyBkZWZhdWx0cyBtdXN0IHJldHVybiBhIFByb21pc2UuXG4vLyBTZWU6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2Zlcm5hbmRvaHUvMTIyZTg4YzNiY2QyMTBiYmU0MWM2MDhjMzYzMDZkYjlcbi8vIEV4cG9ydCBmdW5jdGlvbiBmb3IgdXNlRmFjdG9yeSwgYXMgQXJyb3cgZnVuY3Rpb25zIChMYW1iZGEpIG5vdCBzdXBwb3J0ZWQuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIzNjI5XG4vLyBBbHNvIGFkZCBAZHluYW1pYyBvciB1c2UgdmFyaWFibGUgdG8gcmV0dXJuIFNlcnZpY2UgZnVuY3Rpb24uXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE5Njk4I2lzc3VlY29tbWVudC0zMzgzNDAyMTFcbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ2hhcmFjdGVycyhjaHJTcnY6IENoYXJhY3RlcnNMaWJTZXJ2aWNlKSB7XG4gIC8vIGNvbnN0IGluaXQgPSAoKSA9PiBwcmpTcnYuaW5pdCgpOyAvLyBPcmlnaW5hbCBhcnJvdyBmdW5jdGlvbiBmb3IgcHJvdmlkZXIuXG4gIC8vIEFycm93IGZ1bmN0aW9uIG5vdCBuZWNlc3Nhcnkgb25jZSByZW1vdmVkIGZyb20gcHJvdmlkZXJzIHNlY2l0b24gYmVsb3cuXG4gIGNvbnN0IGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nIFZlcnNlZCcpO1xuICAgIHJldHVybiBjaHJTcnYuaW5pdCgpO1xuICB9O1xuICByZXR1cm4gaW5pdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2hhcmFjdGVyc0hvbWVDb21wb25lbnQsXG4gICAgQ2hhcmFjdGVyc1Byb2ZpbGVDb21wb25lbnQsXG4gICAgQ2hhcmFjdGVyc0NvbGxlY3Rpb25Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBXZWJTdG9yYWdlTW9kdWxlLFxuICAgIEZvcm1zTGliTW9kdWxlLFxuICAgIFNoYXJlZExpYk1vZHVsZSxcbiAgICBMYXlvdXRNb2R1bGUsXG4gICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDaGFyYWN0ZXJzSG9tZUNvbXBvbmVudCxcbiAgICBDaGFyYWN0ZXJzUHJvZmlsZUNvbXBvbmVudCxcbiAgICBDaGFyYWN0ZXJzQ29sbGVjdGlvbkNvbXBvbmVudCxcbiAgICBGb3Jtc0xpYk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtDaGFyYWN0ZXJzTGliU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBsb2FkQ2hhcmFjdGVycyxcbiAgICAgIGRlcHM6IFtDaGFyYWN0ZXJzTGliU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1dLFxuICBlbnRyeUNvbXBvbmVudHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIENoYXJhY3RlcnNMaWJNb2R1bGUgeyB9XG4iXX0=