import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormlyFormOptions, FormlyFieldConfig, FormsLibService } from 'forms-lib';

@Component({
  selector: 'ui-editor',
  templateUrl: './ui-editor.component.html'
})
export class UiEditorComponent implements OnInit, OnChanges {
  @Input() record: any;
  @Input() create: boolean;
  @Output() delete: EventEmitter<any>;
  @Output() cancel: EventEmitter<any>;
  @Output() update: EventEmitter<any>;

  public form: FormGroup;
  public model: any;
  public fields: FormlyFieldConfig[];
  public options: FormlyFormOptions;
  public submitLabel: string;

  constructor(
    private formsService: FormsLibService,
    ) {
      this.delete = new EventEmitter<any>();
      this.cancel = new EventEmitter<any>();
      this.update = new EventEmitter<any>();
    }

  ngOnInit() {
    if (!this.record) { console.log('No record supplied!'); }
    this.createForm();
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.record);
    if (this.create) {
      this.submitLabel = 'Create';
      } else {
      this.submitLabel = 'Update';
      }
  }

  private createForm() {
    this.form = new FormGroup({});
    this.fields = this.formsService.getModelFields(this.model);
    this.options = {};
  }

  public deleteRecord(model: any): void {
    this.delete.emit(model);
  }

  public cancelEdit(model: any): void {
    this.cancel.emit(model);
  }

  public updateRecord(model: any): void {
    this.update.emit(model);
  }

}
