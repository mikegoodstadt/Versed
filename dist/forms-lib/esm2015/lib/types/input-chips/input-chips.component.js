/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatAutocomplete } from '@angular/material';
import { Subject } from 'rxjs';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
export class InputChipsComponent extends FieldType {
    constructor() {
        super(...arguments);
        this.onDestroy$ = new Subject();
        this.itemControl = new FormControl();
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.filter = this.itemControl.valueChanges.pipe(takeUntil(this.onDestroy$), startWith(null), map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item ? this._filter(item) : this._filter(''))));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        // temporary fix for https://github.com/angular/material2/issues/6728
        ((/** @type {?} */ (this.matAutocomplete)))._formField = this.formField;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
    /**
     * @return {?}
     */
    get empty() { return this.formControl.value.length === 0; }
    /**
     * @param {?} event
     * @return {?}
     */
    add(event) {
        // Add item only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            /** @type {?} */
            const input = event.input;
            /** @type {?} */
            const value = event.value;
            // Add item
            if ((value || '').trim()) {
                this.formControl.setValue([
                    ...this.formControl.value,
                    value.trim(),
                ]);
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.itemControl.setValue(null);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selected(event) {
        this.formControl.setValue([
            ...this.formControl.value,
            event.option.viewValue,
        ]);
        this.itemControl.setValue(null);
    }
    /**
     * @param {?} i
     * @return {?}
     */
    remove(i) {
        /** @type {?} */
        const value = this.formControl.value;
        this.formControl.setValue([
            ...value.slice(0, i),
            ...value.slice(i + 1, value.length)
        ]);
        this.formControl.markAsTouched();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        if (!this.to.filter) {
            return [];
        }
        if (!value) {
            return this.to.filter.slice();
        }
        /** @type {?} */
        const filterValue = value.toLowerCase();
        return this.to.filter.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.toLowerCase().indexOf(filterValue) === 0));
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.formControl.markAsTouched();
        this.field.focus = false;
    }
}
InputChipsComponent.decorators = [
    { type: Component, args: [{
                selector: 'formly-input-chips',
                template: "<!-- <p-chips\n  [class.ng-dirty]=\"showError\"\n  [placeholder]=\"to.placeholder\"\n  [formControl]=\"formControl\"\n  [formlyAttributes]=\"field\">\n</p-chips> -->\n<mat-chip-list #chipList>\n    <mat-chip\n      *ngFor=\"let item of formControl.value;let i = index\"\n      [selectable]=\"selectable\"\n      [removable]=\"removable\"\n      (removed)=\"remove(i)\"\n    >\n      {{ item }}\n      <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n    </mat-chip>\n    <input\n      [formControl]=\"itemControl\"\n      [matAutocomplete]=\"auto\"\n      [matChipInputFor]=\"chipList\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\"\n      (blur)=\"onBlur()\"\n    />\n  </mat-chip-list>\n  <mat-autocomplete\n    #auto=\"matAutocomplete\"\n    (optionSelected)=\"selected($event)\"\n  >\n    <mat-option *ngFor=\"let item of (filter | async)\" [value]=\"item\">\n      {{ item }}\n    </mat-option>\n  </mat-autocomplete>"
            }] }
];
InputChipsComponent.propDecorators = {
    matAutocomplete: [{ type: ViewChild, args: ['auto',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybXMtbGliLyIsInNvdXJjZXMiOlsibGliL3R5cGVzL2lucHV0LWNoaXBzL2lucHV0LWNoaXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWdELE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBRUwsZUFBZSxFQUVoQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBYSxHQUFHLEVBQU8sU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNN0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFNBQVM7SUFKbEQ7O1FBS0UsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFakMsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHVCQUFrQixHQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBdUZoRCxDQUFDOzs7O0lBakZDLFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQzlDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLHFFQUFxRTtRQUNyRSxDQUFDLG1CQUFNLElBQUksQ0FBQyxlQUFlLEVBQUEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzNELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7OztJQUVwRCxHQUFHLENBQUMsS0FBd0I7UUFDakMsaURBQWlEO1FBQ2pELGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7O2tCQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUs7O2tCQUNuQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUs7WUFFekIsV0FBVztZQUNYLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO29CQUN4QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSztvQkFDekIsS0FBSyxDQUFDLElBQUksRUFBRTtpQkFDYixDQUFDLENBQUM7YUFDSjtZQUVELHdCQUF3QjtZQUN4QixJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNsQjtZQUVELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxRQUFRLENBQUMsS0FBbUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDeEIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7WUFDekIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTO1NBQ3ZCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLENBQVM7O2NBQ2YsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSztRQUVwQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUN4QixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwQixHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDbEMsQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLEtBQVU7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQUMsT0FBTyxFQUFFLENBQUM7U0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUFDOztjQUV0QyxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRTtRQUV2QyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFDdEQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7O1lBakdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QiwraENBQTJDO2FBQzVDOzs7OEJBVUUsU0FBUyxTQUFDLE1BQU07Ozs7SUFSakIseUNBQWlDOztJQUVqQywwQ0FBZ0M7O0lBQ2hDLHlDQUFrQjs7SUFDbEIsd0NBQWlCOztJQUNqQix3Q0FBaUI7O0lBQ2pCLGlEQUE4Qzs7SUFFOUMsOENBQW9EOztJQUVwRCxxQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJ0BuZ3gtZm9ybWx5L21hdGVyaWFsJztcbmltcG9ydCB7XG4gIE1hdENoaXBJbnB1dEV2ZW50LFxuICBNYXRBdXRvY29tcGxldGUsXG4gIE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnRcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIG1hcCwgdGFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDT01NQSwgRU5URVIgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm1seS1pbnB1dC1jaGlwcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbnB1dC1jaGlwcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q2hpcHNDb21wb25lbnQgZXh0ZW5kcyBGaWVsZFR5cGUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIG9uRGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGl0ZW1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIHNlbGVjdGFibGUgPSB0cnVlO1xuICByZW1vdmFibGUgPSB0cnVlO1xuICBhZGRPbkJsdXIgPSB0cnVlO1xuICBzZXBhcmF0b3JLZXlzQ29kZXM6IG51bWJlcltdID0gW0VOVEVSLCBDT01NQV07XG5cbiAgQFZpZXdDaGlsZCgnYXV0bycpIG1hdEF1dG9jb21wbGV0ZTogTWF0QXV0b2NvbXBsZXRlO1xuXG4gIGZpbHRlcjogT2JzZXJ2YWJsZTxhbnlbXT47XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5pdGVtQ29udHJvbC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLm9uRGVzdHJveSQpLFxuICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgbWFwKChpdGVtOiBhbnkgfCBudWxsKSA9PiBpdGVtID8gdGhpcy5fZmlsdGVyKGl0ZW0pIDogdGhpcy5fZmlsdGVyKCcnKSlcbiAgICApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xuICAgIC8vIHRlbXBvcmFyeSBmaXggZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL21hdGVyaWFsMi9pc3N1ZXMvNjcyOFxuICAgICg8YW55PiB0aGlzLm1hdEF1dG9jb21wbGV0ZSkuX2Zvcm1GaWVsZCA9IHRoaXMuZm9ybUZpZWxkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5vbkRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLm9uRGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIGdldCBlbXB0eSgpIHsgcmV0dXJuIHRoaXMuZm9ybUNvbnRyb2wudmFsdWUubGVuZ3RoID09PSAwOyB9XG5cbiAgcHVibGljIGFkZChldmVudDogTWF0Q2hpcElucHV0RXZlbnQpOiB2b2lkIHtcbiAgICAvLyBBZGQgaXRlbSBvbmx5IHdoZW4gTWF0QXV0b2NvbXBsZXRlIGlzIG5vdCBvcGVuXG4gICAgLy8gVG8gbWFrZSBzdXJlIHRoaXMgZG9lcyBub3QgY29uZmxpY3Qgd2l0aCBPcHRpb25TZWxlY3RlZCBFdmVudFxuICAgIGlmICghdGhpcy5tYXRBdXRvY29tcGxldGUuaXNPcGVuKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xuICAgICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcblxuICAgICAgLy8gQWRkIGl0ZW1cbiAgICAgIGlmICgodmFsdWUgfHwgJycpLnRyaW0oKSkge1xuICAgICAgICB0aGlzLmZvcm1Db250cm9sLnNldFZhbHVlKFtcbiAgICAgICAgICAuLi50aGlzLmZvcm1Db250cm9sLnZhbHVlLFxuICAgICAgICAgIHZhbHVlLnRyaW0oKSxcbiAgICAgICAgXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlc2V0IHRoZSBpbnB1dCB2YWx1ZVxuICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXRlbUNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkKGV2ZW50OiBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mb3JtQ29udHJvbC5zZXRWYWx1ZShbXG4gICAgICAuLi50aGlzLmZvcm1Db250cm9sLnZhbHVlLFxuICAgICAgZXZlbnQub3B0aW9uLnZpZXdWYWx1ZSxcbiAgICBdKTtcblxuICAgIHRoaXMuaXRlbUNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKGk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5mb3JtQ29udHJvbC52YWx1ZTtcblxuICAgIHRoaXMuZm9ybUNvbnRyb2wuc2V0VmFsdWUoW1xuICAgICAgLi4udmFsdWUuc2xpY2UoMCwgaSksXG4gICAgICAuLi52YWx1ZS5zbGljZShpICsgMSwgdmFsdWUubGVuZ3RoKVxuICAgIF0pO1xuICAgIHRoaXMuZm9ybUNvbnRyb2wubWFya0FzVG91Y2hlZCgpXG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IGFueSk6IGFueVtdIHtcbiAgICBpZiAoIXRoaXMudG8uZmlsdGVyKSB7cmV0dXJuIFtdO31cbiAgICBpZiAoIXZhbHVlKSB7cmV0dXJuIHRoaXMudG8uZmlsdGVyLnNsaWNlKCk7fVxuXG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMudG8uZmlsdGVyLmZpbHRlcihcbiAgICAgIGl0ZW0gPT4gaXRlbS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUpID09PSAwXG4gICAgKTtcbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLmZvcm1Db250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLmZpZWxkLmZvY3VzID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==