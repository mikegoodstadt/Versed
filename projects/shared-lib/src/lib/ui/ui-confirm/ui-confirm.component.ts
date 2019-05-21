import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Dialog } from './dialog.model';

@Component({
  selector: 'ui-confirm',
  templateUrl: './ui-confirm.component.html',
  styleUrls: ['./ui-confirm.component.css']
})
export class UiConfirmComponent implements OnInit {
  title: string;
  message: string;

  constructor(
    public dialogRef: MatDialogRef<UiConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialog
    ) {    // Update view with given values
      this.title = data.title;
      this.message = data.message;
  }

  ngOnInit() {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
