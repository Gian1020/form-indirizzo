import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  imports: [FormsModule],
  templateUrl: './input-text.html',
  styleUrl: './input-text.css'
})
export class InputText {
  input:string="";
  @Output() stringa =new EventEmitter<string>();

  inviaValore(){
    this.stringa.emit(this.input);
  }
}
