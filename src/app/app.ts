import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputText } from './input-text/input-text';
import { Indirizzo } from './indirizzo/indirizzo';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InputText,Indirizzo,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('form-registrazione');
  
  nome ="";
  cognome = "";
} 
