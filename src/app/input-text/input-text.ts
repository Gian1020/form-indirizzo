import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  imports: [],
  templateUrl: './input-text.html',
  styleUrl: './input-text.css'
})
export class InputText {
  input:string="";
  @Output() stringa =new EventEmitter<string>();

  inviaValore(event: any){
    this.stringa.emit(event);
  }
}
