import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LOCATIONS_DATA } from '../dati/location-data';

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
