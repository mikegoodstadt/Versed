import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
// import { UiConfirmComponent } from '../ui-confirm/ui-confirm.component';

@Component({
  selector: 'ui-list',
  templateUrl: './ui-list.component.html',
  styleUrls: ['./ui-list.component.scss'],
  // providers: [ConfirmationService]
})
export class UiListComponent implements OnInit {
  @Input() dataset: Observable<any[]>;
  @Output() datasetChange: EventEmitter<Observable<any[]>>;
  @Input() current: Observable<any>;
  @Output() currentChange: EventEmitter<any>;
  @Output() edit: EventEmitter<any>;
  @Output() delete: EventEmitter<any>;

  public headers: string[];
  public hideCols = ['uuid'];
  public display = [];

  constructor(
    // private confirmationService: ConfirmationService
  ) {
    this.datasetChange = new EventEmitter<Observable<any[]>>();
    this.currentChange = new EventEmitter<any>();
    this.edit = new EventEmitter<any>();
    this.delete = new EventEmitter<any>();
  }

  public ngOnInit(): void {
    this.setColumns();
  }

  /*
   * https://stackoverflow.com/questions/54091011/disable-the-default-keyvalue-pipe-sort-in-angular
   */
  public sortDisabled(): number {
    return 0;
  }

  public setColumns(): void {
    let now: any;
    this.current.subscribe(curr => now = curr);
    this.headers = Object.keys(now);
    this.headers.forEach(header => {
      let displayType = 'table-cell';
      const hidden = this.hideCols.find(col => col === header);
      if (hidden) { displayType = 'none'; }
      this.display.push(displayType);
    });
  }

  public  setCurrent(record: any): void {
    this.currentChange.emit(record);
  }

  public editRecord(record: any): void {
    this.edit.emit(record);
  }

  public  deleteRecord(record: any): void {
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
