import { Component } from '@angular/core';
import { LOCATIONS_DATA } from '../dati/location-data';
import { Data } from '@angular/router';

@Component({
  selector: 'app-indirizzo',
  imports: [],
  templateUrl: './indirizzo.html',
  styleUrl: './indirizzo.css'
})
export class Indirizzo {
  data:Data = LOCATIONS_DATA;
  
}
