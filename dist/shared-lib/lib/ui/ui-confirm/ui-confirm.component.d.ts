import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Dialog } from './dialog.model';
export declare class UiConfirmComponent implements OnInit {
    dialogRef: MatDialogRef<UiConfirmComponent>;
    data: Dialog;
    title: string;
    message: string;
    constructor(dialogRef: MatDialogRef<UiConfirmComponent>, data: Dialog);
    ngOnInit(): void;
    onConfirm(): void;
    onDismiss(): void;
}
