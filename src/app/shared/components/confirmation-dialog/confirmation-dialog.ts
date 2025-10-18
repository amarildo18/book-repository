import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  imports: [],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.css'
})
export class ConfirmationDialog {

  @Input() isConfirmationOpen = true;
  @Output() confirm = new EventEmitter<boolean>();

  handleResponse(confirmation: boolean){
    this.confirm.emit(confirmation);
    this.isConfirmationOpen = false;
  }

}
