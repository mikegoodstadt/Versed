/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CharactersLibService } from '../../characters-lib.service';
export class CharactersCollectionComponent {
    /**
     * @param {?} router
     * @param {?} breakpointObserver
     * @param {?} charactersLibService
     */
    constructor(router, breakpointObserver, charactersLibService) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.charactersLibService = charactersLibService;
        this.characters = this.charactersLibService.characters;
        /** Based on the screen size, switch from standard to one column per row */
        this.cols = this.breakpointObserver.observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge
        ]).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            if (result.breakpoints[Breakpoints.XSmall]) {
                return 1;
            }
            if (result.breakpoints[Breakpoints.Small]) {
                return 2;
            }
            if (result.breakpoints[Breakpoints.Medium]) {
                return 3;
            }
            if (result.breakpoints[Breakpoints.Large]) {
                return 4;
            }
            if (result.breakpoints[Breakpoints.XLarge]) {
                return 5;
            }
        })));
    }
    /**
     * @param {?} card
     * @return {?}
     */
    viewCharacter(card) {
        this.charactersLibService.setCurrent(card);
        this.router.navigate(['profile']);
    }
}
CharactersCollectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'characters-collection',
                template: "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">Characters</h1>\n  <mat-grid-list cols=\"{{cols | async}}\" rowHeight=\"380px\">\n    <mat-grid-tile *ngFor=\"let card of characters | async\" [colspan]=\"1\" [rowspan]=\"1\">\n      <mat-card class=\"dashboard-card\" (click)=\"viewCharacter(card)\">\n        <mat-card-header>\n          <mat-card-title>\n            {{card.name}}\n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">\n              <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n              <button mat-menu-item>Expand</button>\n              <button mat-menu-item>Remove</button>\n            </mat-menu>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"dashboard-card-content\">\n          <ul>\n            <li>{{ card.birth_year }}</li>\n            <li>{{ card.gender }}</li>\n            <li>{{ card.hair_color }}</li>\n            <li>{{ card.skin_color }}</li>\n            <li>{{ card.species }}</li>\n          </ul>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n",
                styles: [".grid-container{margin:30px}.dashboard-card{position:absolute;width:250px;height:350px;top:15px;left:15px;right:15px;bottom:15px}.more-button{position:absolute;top:5px;right:10px}.dashboard-card-content{text-align:center}"]
            }] }
];
/** @nocollapse */
CharactersCollectionComponent.ctorParameters = () => [
    { type: Router },
    { type: BreakpointObserver },
    { type: CharactersLibService }
];
CharactersCollectionComponent.propDecorators = {
    characters: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CharactersCollectionComponent.prototype.characters;
    /** @type {?} */
    CharactersCollectionComponent.prototype.cols;
    /**
     * @type {?}
     * @private
     */
    CharactersCollectionComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    CharactersCollectionComponent.prototype.breakpointObserver;
    /**
     * @type {?}
     * @private
     */
    CharactersCollectionComponent.prototype.charactersLibService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVycy1jb2xsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NoYXJhY3RlcnMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2hhcmFjdGVycy1jb2xsZWN0aW9uL2NoYXJhY3RlcnMtY29sbGVjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFRcEUsTUFBTSxPQUFPLDZCQUE2Qjs7Ozs7O0lBSXhDLFlBQ1UsTUFBYyxFQUNkLGtCQUFzQyxFQUN0QyxvQkFBMEM7UUFGMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUVsRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7UUFFdkQsMkVBQTJFO1FBQzNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUMxQyxXQUFXLENBQUMsTUFBTTtZQUNsQixXQUFXLENBQUMsS0FBSztZQUNqQixXQUFXLENBQUMsTUFBTTtZQUNsQixXQUFXLENBQUMsS0FBSztZQUNqQixXQUFXLENBQUMsTUFBTTtTQUNqQixDQUFDLENBQUMsSUFBSSxDQUNQLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2IsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDMUMsT0FBTyxDQUFDLENBQUM7YUFDVjtZQUNELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pDLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7WUFDRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLENBQUMsQ0FBQzthQUNWO1lBQ0QsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDekMsT0FBTyxDQUFDLENBQUM7YUFDVjtZQUNELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzFDLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsSUFBZTtRQUNsQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDB0Q0FBcUQ7O2FBRXREOzs7O1lBWFEsTUFBTTtZQUdPLGtCQUFrQjtZQUMvQixvQkFBb0I7Ozt5QkFTMUIsS0FBSzs7OztJQUFOLG1EQUF1Qzs7SUFDdkMsNkNBQWdDOzs7OztJQUc5QiwrQ0FBc0I7Ozs7O0lBQ3RCLDJEQUE4Qzs7Ozs7SUFDOUMsNkRBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJyZWFrcG9pbnRzLCBCcmVha3BvaW50T2JzZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7IENoYXJhY3RlcnNMaWJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2hhcmFjdGVycy1saWIuc2VydmljZSc7XG5pbXBvcnQgeyBDaGFyYWN0ZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2hhcmFjdGVyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hhcmFjdGVycy1jb2xsZWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXJhY3RlcnMtY29sbGVjdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYXJhY3RlcnMtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENoYXJhY3RlcnNDb2xsZWN0aW9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2hhcmFjdGVyczogT2JzZXJ2YWJsZTxhbnlbXT47XG4gIHB1YmxpYyBjb2xzOiBPYnNlcnZhYmxlPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyLFxuICAgIHByaXZhdGUgY2hhcmFjdGVyc0xpYlNlcnZpY2U6IENoYXJhY3RlcnNMaWJTZXJ2aWNlXG4gICAgKSB7XG4gICAgdGhpcy5jaGFyYWN0ZXJzID0gdGhpcy5jaGFyYWN0ZXJzTGliU2VydmljZS5jaGFyYWN0ZXJzO1xuXG4gICAgLyoqIEJhc2VkIG9uIHRoZSBzY3JlZW4gc2l6ZSwgc3dpdGNoIGZyb20gc3RhbmRhcmQgdG8gb25lIGNvbHVtbiBwZXIgcm93ICovXG4gICAgdGhpcy5jb2xzID0gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZShbXG4gICAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgICBCcmVha3BvaW50cy5TbWFsbCxcbiAgICAgIEJyZWFrcG9pbnRzLk1lZGl1bSxcbiAgICAgIEJyZWFrcG9pbnRzLkxhcmdlLFxuICAgICAgQnJlYWtwb2ludHMuWExhcmdlXG4gICAgICBdKS5waXBlKFxuICAgICAgbWFwKChyZXN1bHQpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5icmVha3BvaW50c1tCcmVha3BvaW50cy5YU21hbGxdKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5icmVha3BvaW50c1tCcmVha3BvaW50cy5TbWFsbF0pIHtcbiAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0LmJyZWFrcG9pbnRzW0JyZWFrcG9pbnRzLk1lZGl1bV0pIHtcbiAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0LmJyZWFrcG9pbnRzW0JyZWFrcG9pbnRzLkxhcmdlXSkge1xuICAgICAgICAgIHJldHVybiA0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQuYnJlYWtwb2ludHNbQnJlYWtwb2ludHMuWExhcmdlXSkge1xuICAgICAgICAgIHJldHVybiA1O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdmlld0NoYXJhY3RlcihjYXJkOiBDaGFyYWN0ZXIpIHtcbiAgICB0aGlzLmNoYXJhY3RlcnNMaWJTZXJ2aWNlLnNldEN1cnJlbnQoY2FyZCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwcm9maWxlJ10pO1xuICB9XG5cbn1cbiJdfQ==