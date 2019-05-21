import { OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FieldType } from '@ngx-formly/material';
import { MatChipInputEvent, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
export declare class InputChipsComponent extends FieldType implements OnInit, OnDestroy, AfterViewInit {
    onDestroy$: Subject<void>;
    itemControl: FormControl;
    selectable: boolean;
    removable: boolean;
    addOnBlur: boolean;
    separatorKeysCodes: number[];
    matAutocomplete: MatAutocomplete;
    filter: Observable<any[]>;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    readonly empty: boolean;
    add(event: MatChipInputEvent): void;
    selected(event: MatAutocompleteSelectedEvent): void;
    remove(i: number): void;
    private _filter;
    onBlur(): void;
}
