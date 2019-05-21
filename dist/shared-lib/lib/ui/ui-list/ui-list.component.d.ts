import { OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
export declare class UiListComponent implements OnInit {
    dataset: Observable<any[]>;
    datasetChange: EventEmitter<Observable<any[]>>;
    current: Observable<any>;
    currentChange: EventEmitter<any>;
    edit: EventEmitter<any>;
    delete: EventEmitter<any>;
    headers: string[];
    hideCols: string[];
    display: any[];
    constructor();
    ngOnInit(): void;
    sortDisabled(): number;
    setColumns(): void;
    setCurrent(record: any): void;
    editRecord(record: any): void;
    deleteRecord(record: any): void;
}
