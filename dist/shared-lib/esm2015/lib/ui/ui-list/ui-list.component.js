/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
// import { UiConfirmComponent } from '../ui-confirm/ui-confirm.component';
export class UiListComponent {
    constructor() {
        this.hideCols = ['uuid'];
        this.display = [];
        this.datasetChange = new EventEmitter();
        this.currentChange = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setColumns();
    }
    /*
       * https://stackoverflow.com/questions/54091011/disable-the-default-keyvalue-pipe-sort-in-angular
       */
    /**
     * @return {?}
     */
    sortDisabled() {
        return 0;
    }
    /**
     * @return {?}
     */
    setColumns() {
        /** @type {?} */
        let now;
        this.current.subscribe((/**
         * @param {?} curr
         * @return {?}
         */
        curr => now = curr));
        this.headers = Object.keys(now);
        this.headers.forEach((/**
         * @param {?} header
         * @return {?}
         */
        header => {
            /** @type {?} */
            let displayType = 'table-cell';
            /** @type {?} */
            const hidden = this.hideCols.find((/**
             * @param {?} col
             * @return {?}
             */
            col => col === header));
            if (hidden) {
                displayType = 'none';
            }
            this.display.push(displayType);
        }));
    }
    /**
     * @param {?} record
     * @return {?}
     */
    setCurrent(record) {
        this.currentChange.emit(record);
    }
    /**
     * @param {?} record
     * @return {?}
     */
    editRecord(record) {
        this.edit.emit(record);
    }
    /**
     * @param {?} record
     * @return {?}
     */
    deleteRecord(record) {
        // this.confirmationService.confirm({
        //   message: 'Are you sure that you want to delete this record',
        //   header: 'Delete record',
        //   icon: 'pi pi-exclamation-triangle',
        //   accept: () => {
        this.delete.emit(record);
        //   }
        // });
    }
}
UiListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ui-list',
                template: "<ng-container *ngIf=\"(dataset | async) as data; else loading\">\n<!-- <p-table [value]=\"data\" autoLayout=\"true\">\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th>Current</th>\n      <th *ngFor=\"let header of headers; let i = index\" [ngStyle]=\"{'display': display[i]}\">{{ header | titlecase}}</th>\n      <th>Edit</th>\n      <th>Delete</th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-record>\n    <tr>\n      <td><button title=\"uuid: {{record.uuid}}\" (click)=\"setCurrent(record)\" pButton type=\"button\" icon=\"pi pi-check\" iconPos=\"left\" [ngClass]=\"{'ui-state-active': record.uuid === (current | async).uuid }\"></button></td>\n      <td *ngFor=\"let field of record | keyvalue:sortDisabled; let i = index\" [ngStyle]=\"{'display': display[i]}\">{{ field.value }}</td>\n      <td><button (click)=\"editRecord(record)\" pButton type=\"button\" icon=\"pi pi-pencil\" iconPos=\"left\"></button></td>\n      <td><button (click)=\"deleteRecord(record)\" pButton type=\"button\" icon=\"pi pi-trash\" iconPos=\"left\"></button></td>\n    </tr>\n  </ng-template>\n</p-table> -->\n</ng-container>\n<ng-template #loading>Workspace List loading...</ng-template>\n<ui-confirm></ui-confirm>  \n",
                styles: [".ui-icon{padding:0 14px}.ui-spacer{flex:1 1 auto}:host ::ng-deep th{text-align:left}"]
            }] }
];
/** @nocollapse */
UiListComponent.ctorParameters = () => [];
UiListComponent.propDecorators = {
    dataset: [{ type: Input }],
    datasetChange: [{ type: Output }],
    current: [{ type: Input }],
    currentChange: [{ type: Output }],
    edit: [{ type: Output }],
    delete: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    UiListComponent.prototype.dataset;
    /** @type {?} */
    UiListComponent.prototype.datasetChange;
    /** @type {?} */
    UiListComponent.prototype.current;
    /** @type {?} */
    UiListComponent.prototype.currentChange;
    /** @type {?} */
    UiListComponent.prototype.edit;
    /** @type {?} */
    UiListComponent.prototype.delete;
    /** @type {?} */
    UiListComponent.prototype.headers;
    /** @type {?} */
    UiListComponent.prototype.hideCols;
    /** @type {?} */
    UiListComponent.prototype.display;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQtbGliLyIsInNvdXJjZXMiOlsibGliL3VpL3VpLWxpc3QvdWktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFTbEMsTUFBTSxPQUFPLGVBQWU7SUFZMUI7UUFITyxhQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBS2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7OztJQUtNLFlBQVk7UUFDakIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7O0lBRU0sVUFBVTs7WUFDWCxHQUFRO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFOztnQkFDeEIsV0FBVyxHQUFHLFlBQVk7O2tCQUN4QixNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssTUFBTSxFQUFDO1lBQ3hELElBQUksTUFBTSxFQUFFO2dCQUFFLFdBQVcsR0FBRyxNQUFNLENBQUM7YUFBRTtZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sVUFBVSxDQUFDLE1BQVc7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsTUFBVztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVPLFlBQVksQ0FBQyxNQUFXO1FBQzlCLHFDQUFxQztRQUNyQyxpRUFBaUU7UUFDakUsNkJBQTZCO1FBQzdCLHdDQUF3QztRQUN4QyxvQkFBb0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsTUFBTTtRQUNOLE1BQU07SUFDUixDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQiwwdUNBQXVDOzthQUd4Qzs7Ozs7c0JBRUUsS0FBSzs0QkFDTCxNQUFNO3NCQUNOLEtBQUs7NEJBQ0wsTUFBTTttQkFDTixNQUFNO3FCQUNOLE1BQU07Ozs7SUFMUCxrQ0FBb0M7O0lBQ3BDLHdDQUF5RDs7SUFDekQsa0NBQWtDOztJQUNsQyx3Q0FBMkM7O0lBQzNDLCtCQUFrQzs7SUFDbEMsaUNBQW9DOztJQUVwQyxrQ0FBeUI7O0lBQ3pCLG1DQUEyQjs7SUFDM0Isa0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuLy8gaW1wb3J0IHsgVWlDb25maXJtQ29tcG9uZW50IH0gZnJvbSAnLi4vdWktY29uZmlybS91aS1jb25maXJtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdWktbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VpLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgLy8gcHJvdmlkZXJzOiBbQ29uZmlybWF0aW9uU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgVWlMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YXNldDogT2JzZXJ2YWJsZTxhbnlbXT47XG4gIEBPdXRwdXQoKSBkYXRhc2V0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8T2JzZXJ2YWJsZTxhbnlbXT4+O1xuICBASW5wdXQoKSBjdXJyZW50OiBPYnNlcnZhYmxlPGFueT47XG4gIEBPdXRwdXQoKSBjdXJyZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIGVkaXQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgZGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBwdWJsaWMgaGVhZGVyczogc3RyaW5nW107XG4gIHB1YmxpYyBoaWRlQ29scyA9IFsndXVpZCddO1xuICBwdWJsaWMgZGlzcGxheSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHByaXZhdGUgY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZVxuICApIHtcbiAgICB0aGlzLmRhdGFzZXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9ic2VydmFibGU8YW55W10+PigpO1xuICAgIHRoaXMuY3VycmVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIHRoaXMuZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIHRoaXMuZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDb2x1bW5zKCk7XG4gIH1cblxuICAvKlxuICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NDA5MTAxMS9kaXNhYmxlLXRoZS1kZWZhdWx0LWtleXZhbHVlLXBpcGUtc29ydC1pbi1hbmd1bGFyXG4gICAqL1xuICBwdWJsaWMgc29ydERpc2FibGVkKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29sdW1ucygpOiB2b2lkIHtcbiAgICBsZXQgbm93OiBhbnk7XG4gICAgdGhpcy5jdXJyZW50LnN1YnNjcmliZShjdXJyID0+IG5vdyA9IGN1cnIpO1xuICAgIHRoaXMuaGVhZGVycyA9IE9iamVjdC5rZXlzKG5vdyk7XG4gICAgdGhpcy5oZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgIGxldCBkaXNwbGF5VHlwZSA9ICd0YWJsZS1jZWxsJztcbiAgICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaGlkZUNvbHMuZmluZChjb2wgPT4gY29sID09PSBoZWFkZXIpO1xuICAgICAgaWYgKGhpZGRlbikgeyBkaXNwbGF5VHlwZSA9ICdub25lJzsgfVxuICAgICAgdGhpcy5kaXNwbGF5LnB1c2goZGlzcGxheVR5cGUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljICBzZXRDdXJyZW50KHJlY29yZDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50Q2hhbmdlLmVtaXQocmVjb3JkKTtcbiAgfVxuXG4gIHB1YmxpYyBlZGl0UmVjb3JkKHJlY29yZDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5lZGl0LmVtaXQocmVjb3JkKTtcbiAgfVxuXG4gIHB1YmxpYyAgZGVsZXRlUmVjb3JkKHJlY29yZDogYW55KTogdm9pZCB7XG4gICAgLy8gdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmNvbmZpcm0oe1xuICAgIC8vICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJlY29yZCcsXG4gICAgLy8gICBoZWFkZXI6ICdEZWxldGUgcmVjb3JkJyxcbiAgICAvLyAgIGljb246ICdwaSBwaS1leGNsYW1hdGlvbi10cmlhbmdsZScsXG4gICAgLy8gICBhY2NlcHQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5kZWxldGUuZW1pdChyZWNvcmQpO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICB9XG59XG4iXX0=