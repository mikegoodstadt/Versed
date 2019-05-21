import { OnInit, OnChanges, EventEmitter } from '@angular/core';
import { FormGroup, FormlyFormOptions, FormlyFieldConfig, FormsLibService } from 'forms-lib';
export declare class UiEditorComponent implements OnInit, OnChanges {
    private formsService;
    record: any;
    create: boolean;
    delete: EventEmitter<any>;
    cancel: EventEmitter<any>;
    update: EventEmitter<any>;
    form: FormGroup;
    model: any;
    fields: FormlyFieldConfig[];
    options: FormlyFormOptions;
    submitLabel: string;
    constructor(formsService: FormsLibService);
    ngOnInit(): void;
    ngOnChanges(): void;
    private createForm;
    deleteRecord(model: any): void;
    cancelEdit(model: any): void;
    updateRecord(model: any): void;
}
