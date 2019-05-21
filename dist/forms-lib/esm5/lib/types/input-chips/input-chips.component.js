/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatAutocomplete } from '@angular/material';
import { Subject } from 'rxjs';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
var InputChipsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InputChipsComponent, _super);
    function InputChipsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDestroy$ = new Subject();
        _this.itemControl = new FormControl();
        _this.selectable = true;
        _this.removable = true;
        _this.addOnBlur = true;
        _this.separatorKeysCodes = [ENTER, COMMA];
        return _this;
    }
    /**
     * @return {?}
     */
    InputChipsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.filter = this.itemControl.valueChanges.pipe(takeUntil(this.onDestroy$), startWith(null), map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item ? _this._filter(item) : _this._filter(''); })));
    };
    /**
     * @return {?}
     */
    InputChipsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
        // temporary fix for https://github.com/angular/material2/issues/6728
        ((/** @type {?} */ (this.matAutocomplete)))._formField = this.formField;
    };
    /**
     * @return {?}
     */
    InputChipsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    };
    Object.defineProperty(InputChipsComponent.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () { return this.formControl.value.length === 0; },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    InputChipsComponent.prototype.add = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Add item only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            /** @type {?} */
            var input = event.input;
            /** @type {?} */
            var value = event.value;
            // Add item
            if ((value || '').trim()) {
                this.formControl.setValue(tslib_1.__spread(this.formControl.value, [
                    value.trim(),
                ]));
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.itemControl.setValue(null);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    InputChipsComponent.prototype.selected = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.formControl.setValue(tslib_1.__spread(this.formControl.value, [
            event.option.viewValue,
        ]));
        this.itemControl.setValue(null);
    };
    /**
     * @param {?} i
     * @return {?}
     */
    InputChipsComponent.prototype.remove = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        /** @type {?} */
        var value = this.formControl.value;
        this.formControl.setValue(tslib_1.__spread(value.slice(0, i), value.slice(i + 1, value.length)));
        this.formControl.markAsTouched();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    InputChipsComponent.prototype._filter = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.to.filter) {
            return [];
        }
        if (!value) {
            return this.to.filter.slice();
        }
        /** @type {?} */
        var filterValue = value.toLowerCase();
        return this.to.filter.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.toLowerCase().indexOf(filterValue) === 0; }));
    };
    /**
     * @return {?}
     */
    InputChipsComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.formControl.markAsTouched();
        this.field.focus = false;
    };
    InputChipsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'formly-input-chips',
                    template: "<!-- <p-chips\n  [class.ng-dirty]=\"showError\"\n  [placeholder]=\"to.placeholder\"\n  [formControl]=\"formControl\"\n  [formlyAttributes]=\"field\">\n</p-chips> -->\n<mat-chip-list #chipList>\n    <mat-chip\n      *ngFor=\"let item of formControl.value;let i = index\"\n      [selectable]=\"selectable\"\n      [removable]=\"removable\"\n      (removed)=\"remove(i)\"\n    >\n      {{ item }}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input\n      [formControl]=\"itemControl\"\n      [matAutocomplete]=\"auto\"\n      [matChipInputFor]=\"chipList\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\"\n      (blur)=\"onBlur()\"\n    />\n  </mat-chip-list>\n  <mat-autocomplete\n    #auto=\"matAutocomplete\"\n    (optionSelected)=\"selected($event)\"\n  >\n    <mat-option *ngFor=\"let item of (filter | async)\" [value]=\"item\">\n      {{ item }}\n    </mat-option>\n  </mat-autocomplete>"
                }] }
    ];
    InputChipsComponent.propDecorators = {
        matAutocomplete: [{ type: ViewChild, args: ['auto',] }]
    };
    return InputChipsComponent;
}(FieldType));
export { InputChipsComponent };
if (false) {
    /** @type {?} */
    InputChipsComponent.prototype.onDestroy$;
    /** @type {?} */
    InputChipsComponent.prototype.itemControl;
    /** @type {?} */
    InputChipsComponent.prototype.selectable;
    /** @type {?} */
    InputChipsComponent.prototype.removable;
    /** @type {?} */
    InputChipsComponent.prototype.addOnBlur;
    /** @type {?} */
    InputChipsComponent.prototype.separatorKeysCodes;
    /** @type {?} */
    InputChipsComponent.prototype.matAutocomplete;
    /** @type {?} */
    InputChipsComponent.prototype.filter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybXMtbGliLyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2lucHV0LWNoaXBzL2lucHV0LWNoaXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFnRCxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUVMLGVBQWUsRUFFaEIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQWEsR0FBRyxFQUFPLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDO0lBSXlDLCtDQUFTO0lBSmxEO1FBQUEscUVBa0dDO1FBN0ZDLGdCQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUVqQyxpQkFBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDaEMsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHdCQUFrQixHQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDOztJQXVGaEQsQ0FBQzs7OztJQWpGQyxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFRQztRQVBDLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUM5QyxTQUFTLENBQUMsSUFBSSxDQUFD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LE1BQU0sQ0FBQyxNQUFNOzs7O1FBQzFCLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQTdDLENBQTZDLEVBQ3RELENBQUM7SUFDSixDQUFDOzs7O0lBRUQsb0NBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Z0JBakdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QiwraENBQTJDO2lCQUM1Qzs7O2tDQVVFLFNBQVMsU0FBQyxNQUFNOztJQXFGbkIsMEJBQUM7Q0FBQSxBQWxHRCxDQUl5QyxTQUFTLEdBOEZqRDtTQTlGWSxtQkFBbUI7OztJQUM5Qix5Q0FBaUM7O0lBRWpDLDBDQUFnQzs7SUFDaEMseUNBQWtCOztJQUNsQix3Q0FBaUI7O0lBQ2pCLHdDQUFpQjs7SUFDakIsaURBQThDOztJQUU5Qyw4Q0FBb0Q7O0lBRXBELHFDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnQG5neC1mb3JtbHkvbWF0ZXJpYWwnO1xuaW1wb3J0IHtcbiAgTWF0Q2hpcElucHV0RXZlbnQsXG4gIE1hdEF1dG9jb21wbGV0ZSxcbiAgTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHN3aXRjaE1hcCwgbWFwLCB0YXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENPTU1BLCBFTlRFUiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybWx5LWlucHV0LWNoaXBzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LWNoaXBzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDaGlwc0NvbXBvbmVudCBleHRlbmRzIEZpZWxkVHlwZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgb25EZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgaXRlbUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgc2VsZWN0YWJsZSA9IHRydWU7XG4gIHJlbW92YWJsZSA9IHRydWU7XG4gIGFkZE9uQmx1ciA9IHRydWU7XG4gIHNlcGFyYXRvcktleXNDb2RlczogbnVtYmVyW10gPSBbRU5URVIsIENPTU1BXTtcblxuICBAVmlld0NoaWxkKCdhdXRvJykgbWF0QXV0b2NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGU7XG5cbiAgZmlsdGVyOiBPYnNlcnZhYmxlPGFueVtdPjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuXG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLml0ZW1Db250cm9sLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMub25EZXN0cm95JCksXG4gICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICBtYXAoKGl0ZW06IGFueSB8IG51bGwpID0+IGl0ZW0gPyB0aGlzLl9maWx0ZXIoaXRlbSkgOiB0aGlzLl9maWx0ZXIoJycpKVxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XG4gICAgLy8gdGVtcG9yYXJ5IGZpeCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2lzc3Vlcy82NzI4XG4gICAgKDxhbnk+IHRoaXMubWF0QXV0b2NvbXBsZXRlKS5fZm9ybUZpZWxkID0gdGhpcy5mb3JtRmllbGQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm9uRGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMub25EZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgZ2V0IGVtcHR5KCkgeyByZXR1cm4gdGhpcy5mb3JtQ29udHJvbC52YWx1ZS5sZW5ndGggPT09IDA7IH1cblxuICBwdWJsaWMgYWRkKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIC8vIEFkZCBpdGVtIG9ubHkgd2hlbiBNYXRBdXRvY29tcGxldGUgaXMgbm90IG9wZW5cbiAgICAvLyBUbyBtYWtlIHN1cmUgdGhpcyBkb2VzIG5vdCBjb25mbGljdCB3aXRoIE9wdGlvblNlbGVjdGVkIEV2ZW50XG4gICAgaWYgKCF0aGlzLm1hdEF1dG9jb21wbGV0ZS5pc09wZW4pIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuaW5wdXQ7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnZhbHVlO1xuXG4gICAgICAvLyBBZGQgaXRlbVxuICAgICAgaWYgKCh2YWx1ZSB8fCAnJykudHJpbSgpKSB7XG4gICAgICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoW1xuICAgICAgICAgIC4uLnRoaXMuZm9ybUNvbnRyb2wudmFsdWUsXG4gICAgICAgICAgdmFsdWUudHJpbSgpLFxuICAgICAgICBdKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVzZXQgdGhlIGlucHV0IHZhbHVlXG4gICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5pdGVtQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0ZWQoZXZlbnQ6IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKFtcbiAgICAgIC4uLnRoaXMuZm9ybUNvbnRyb2wudmFsdWUsXG4gICAgICBldmVudC5vcHRpb24udmlld1ZhbHVlLFxuICAgIF0pO1xuXG4gICAgdGhpcy5pdGVtQ29udHJvbC5zZXRWYWx1ZShudWxsKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoaTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmZvcm1Db250cm9sLnZhbHVlO1xuXG4gICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShbXG4gICAgICAuLi52YWx1ZS5zbGljZSgwLCBpKSxcbiAgICAgIC4uLnZhbHVlLnNsaWNlKGkgKyAxLCB2YWx1ZS5sZW5ndGgpXG4gICAgXSk7XG4gICAgdGhpcy5mb3JtQ29udHJvbC5tYXJrQXNUb3VjaGVkKClcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogYW55KTogYW55W10ge1xuICAgIGlmICghdGhpcy50by5maWx0ZXIpIHtyZXR1cm4gW107fVxuICAgIGlmICghdmFsdWUpIHtyZXR1cm4gdGhpcy50by5maWx0ZXIuc2xpY2UoKTt9XG5cbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy50by5maWx0ZXIuZmlsdGVyKFxuICAgICAgaXRlbSA9PiBpdGVtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgPT09IDBcbiAgICApO1xuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgIHRoaXMuZmllbGQuZm9jdXMgPSBmYWxzZTtcbiAgfVxufVxuIl19