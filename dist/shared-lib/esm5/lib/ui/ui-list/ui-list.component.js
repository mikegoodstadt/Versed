/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
// import { UiConfirmComponent } from '../ui-confirm/ui-confirm.component';
var UiListComponent = /** @class */ (function () {
    function UiListComponent() {
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
    UiListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setColumns();
    };
    /*
     * https://stackoverflow.com/questions/54091011/disable-the-default-keyvalue-pipe-sort-in-angular
     */
    /*
       * https://stackoverflow.com/questions/54091011/disable-the-default-keyvalue-pipe-sort-in-angular
       */
    /**
     * @return {?}
     */
    UiListComponent.prototype.sortDisabled = /*
       * https://stackoverflow.com/questions/54091011/disable-the-default-keyvalue-pipe-sort-in-angular
       */
    /**
     * @return {?}
     */
    function () {
        return 0;
    };
    /**
     * @return {?}
     */
    UiListComponent.prototype.setColumns = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var now;
        this.current.subscribe((/**
         * @param {?} curr
         * @return {?}
         */
        function (curr) { return now = curr; }));
        this.headers = Object.keys(now);
        this.headers.forEach((/**
         * @param {?} header
         * @return {?}
         */
        function (header) {
            /** @type {?} */
            var displayType = 'table-cell';
            /** @type {?} */
            var hidden = _this.hideCols.find((/**
             * @param {?} col
             * @return {?}
             */
            function (col) { return col === header; }));
            if (hidden) {
                displayType = 'none';
            }
            _this.display.push(displayType);
        }));
    };
    /**
     * @param {?} record
     * @return {?}
     */
    UiListComponent.prototype.setCurrent = /**
     * @param {?} record
     * @return {?}
     */
    function (record) {
        this.currentChange.emit(record);
    };
    /**
     * @param {?} record
     * @return {?}
     */
    UiListComponent.prototype.editRecord = /**
     * @param {?} record
     * @return {?}
     */
    function (record) {
        this.edit.emit(record);
    };
    /**
     * @param {?} record
     * @return {?}
     */
    UiListComponent.prototype.deleteRecord = /**
     * @param {?} record
     * @return {?}
     */
    function (record) {
        // this.confirmationService.confirm({
        //   message: 'Are you sure that you want to delete this record',
        //   header: 'Delete record',
        //   icon: 'pi pi-exclamation-triangle',
        //   accept: () => {
        this.delete.emit(record);
        //   }
        // });
    };
    UiListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui-list',
                    template: "<ng-container *ngIf=\"(dataset | async) as data; else loading\">\n<!-- <p-table [value]=\"data\" autoLayout=\"true\">\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th>Current</th>\n      <th *ngFor=\"let header of headers; let i = index\" [ngStyle]=\"{'display': display[i]}\">{{ header | titlecase}}</th>\n      <th>Edit</th>\n      <th>Delete</th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-record>\n    <tr>\n      <td><button title=\"uuid: {{record.uuid}}\" (click)=\"setCurrent(record)\" pButton type=\"button\" icon=\"pi pi-check\" iconPos=\"left\" [ngClass]=\"{'ui-state-active': record.uuid === (current | async).uuid }\"></button></td>\n      <td *ngFor=\"let field of record | keyvalue:sortDisabled; let i = index\" [ngStyle]=\"{'display': display[i]}\">{{ field.value }}</td>\n      <td><button (click)=\"editRecord(record)\" pButton type=\"button\" icon=\"pi pi-pencil\" iconPos=\"left\"></button></td>\n      <td><button (click)=\"deleteRecord(record)\" pButton type=\"button\" icon=\"pi pi-trash\" iconPos=\"left\"></button></td>\n    </tr>\n  </ng-template>\n</p-table> -->\n</ng-container>\n<ng-template #loading>Workspace List loading...</ng-template>\n<ui-confirm></ui-confirm>  \n",
                    styles: [".ui-icon{padding:0 14px}.ui-spacer{flex:1 1 auto}:host ::ng-deep th{text-align:left}"]
                }] }
    ];
    /** @nocollapse */
    UiListComponent.ctorParameters = function () { return []; };
    UiListComponent.propDecorators = {
        dataset: [{ type: Input }],
        datasetChange: [{ type: Output }],
        current: [{ type: Input }],
        currentChange: [{ type: Output }],
        edit: [{ type: Output }],
        delete: [{ type: Output }]
    };
    return UiListComponent;
}());
export { UiListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGFyZWQtbGliLyIsInNvdXJjZXMiOlsibGliL3VpL3VpLWxpc3QvdWktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHbEM7SUFrQkU7UUFITyxhQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBS2xCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVNLGtDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSSxzQ0FBWTs7Ozs7O0lBQW5CO1FBQ0UsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7O0lBRU0sb0NBQVU7OztJQUFqQjtRQUFBLGlCQVVDOztZQVRLLEdBQVE7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLEdBQUcsR0FBRyxJQUFJLEVBQVYsQ0FBVSxFQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsTUFBTTs7Z0JBQ3JCLFdBQVcsR0FBRyxZQUFZOztnQkFDeEIsTUFBTSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxLQUFLLE1BQU0sRUFBZCxDQUFjLEVBQUM7WUFDeEQsSUFBSSxNQUFNLEVBQUU7Z0JBQUUsV0FBVyxHQUFHLE1BQU0sQ0FBQzthQUFFO1lBQ3JDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxvQ0FBVTs7OztJQUFsQixVQUFtQixNQUFXO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRU0sb0NBQVU7Ozs7SUFBakIsVUFBa0IsTUFBVztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVPLHNDQUFZOzs7O0lBQXBCLFVBQXFCLE1BQVc7UUFDOUIscUNBQXFDO1FBQ3JDLGlFQUFpRTtRQUNqRSw2QkFBNkI7UUFDN0Isd0NBQXdDO1FBQ3hDLG9CQUFvQjtRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixNQUFNO1FBQ04sTUFBTTtJQUNSLENBQUM7O2dCQW5FRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLDB1Q0FBdUM7O2lCQUd4Qzs7Ozs7MEJBRUUsS0FBSztnQ0FDTCxNQUFNOzBCQUNOLEtBQUs7Z0NBQ0wsTUFBTTt1QkFDTixNQUFNO3lCQUNOLE1BQU07O0lBd0RULHNCQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0E5RFksZUFBZTs7O0lBQzFCLGtDQUFvQzs7SUFDcEMsd0NBQXlEOztJQUN6RCxrQ0FBa0M7O0lBQ2xDLHdDQUEyQzs7SUFDM0MsK0JBQWtDOztJQUNsQyxpQ0FBb0M7O0lBRXBDLGtDQUF5Qjs7SUFDekIsbUNBQTJCOztJQUMzQixrQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG4vLyBpbXBvcnQgeyBVaUNvbmZpcm1Db21wb25lbnQgfSBmcm9tICcuLi91aS1jb25maXJtL3VpLWNvbmZpcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWktbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi91aS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdWktbGlzdC5jb21wb25lbnQuc2NzcyddLFxuICAvLyBwcm92aWRlcnM6IFtDb25maXJtYXRpb25TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBVaUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhc2V0OiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgQE91dHB1dCgpIGRhdGFzZXRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxPYnNlcnZhYmxlPGFueVtdPj47XG4gIEBJbnB1dCgpIGN1cnJlbnQ6IE9ic2VydmFibGU8YW55PjtcbiAgQE91dHB1dCgpIGN1cnJlbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgZWRpdDogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBPdXRwdXQoKSBkZWxldGU6IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIHB1YmxpYyBoZWFkZXJzOiBzdHJpbmdbXTtcbiAgcHVibGljIGhpZGVDb2xzID0gWyd1dWlkJ107XG4gIHB1YmxpYyBkaXNwbGF5ID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gcHJpdmF0ZSBjb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZGF0YXNldENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8T2JzZXJ2YWJsZTxhbnlbXT4+KCk7XG4gICAgdGhpcy5jdXJyZW50Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgdGhpcy5lZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgdGhpcy5kZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENvbHVtbnMoKTtcbiAgfVxuXG4gIC8qXG4gICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU0MDkxMDExL2Rpc2FibGUtdGhlLWRlZmF1bHQta2V5dmFsdWUtcGlwZS1zb3J0LWluLWFuZ3VsYXJcbiAgICovXG4gIHB1YmxpYyBzb3J0RGlzYWJsZWQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDb2x1bW5zKCk6IHZvaWQge1xuICAgIGxldCBub3c6IGFueTtcbiAgICB0aGlzLmN1cnJlbnQuc3Vic2NyaWJlKGN1cnIgPT4gbm93ID0gY3Vycik7XG4gICAgdGhpcy5oZWFkZXJzID0gT2JqZWN0LmtleXMobm93KTtcbiAgICB0aGlzLmhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgbGV0IGRpc3BsYXlUeXBlID0gJ3RhYmxlLWNlbGwnO1xuICAgICAgY29uc3QgaGlkZGVuID0gdGhpcy5oaWRlQ29scy5maW5kKGNvbCA9PiBjb2wgPT09IGhlYWRlcik7XG4gICAgICBpZiAoaGlkZGVuKSB7IGRpc3BsYXlUeXBlID0gJ25vbmUnOyB9XG4gICAgICB0aGlzLmRpc3BsYXkucHVzaChkaXNwbGF5VHlwZSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgIHNldEN1cnJlbnQocmVjb3JkOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRDaGFuZ2UuZW1pdChyZWNvcmQpO1xuICB9XG5cbiAgcHVibGljIGVkaXRSZWNvcmQocmVjb3JkOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmVkaXQuZW1pdChyZWNvcmQpO1xuICB9XG5cbiAgcHVibGljICBkZWxldGVSZWNvcmQocmVjb3JkOiBhbnkpOiB2b2lkIHtcbiAgICAvLyB0aGlzLmNvbmZpcm1hdGlvblNlcnZpY2UuY29uZmlybSh7XG4gICAgLy8gICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcmVjb3JkJyxcbiAgICAvLyAgIGhlYWRlcjogJ0RlbGV0ZSByZWNvcmQnLFxuICAgIC8vICAgaWNvbjogJ3BpIHBpLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlJyxcbiAgICAvLyAgIGFjY2VwdDogKCkgPT4ge1xuICAgICAgICB0aGlzLmRlbGV0ZS5lbWl0KHJlY29yZCk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gIH1cbn1cbiJdfQ==