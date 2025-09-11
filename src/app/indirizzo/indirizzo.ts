import { Component } from '@angular/core';
import { Regione } from '../interfacce/regione';
import { Provincia } from '../interfacce/provincia';
import { Dati } from '../interfacce/dati';
import { LOCATIONS_DATA } from '../dati/location-data';
import { Comune } from '../interfacce/comune';

@Component({
  selector: 'app-indirizzo',
  imports: [],
  templateUrl: './indirizzo.html',
  styleUrl: './indirizzo.css'
})
export class Indirizzo {
  dati:Dati = LOCATIONS_DATA;
  regioni:Regione[] = this.dati.regioni;
  province:Provincia[] = [];
  comuni:Comune[]=[];
  caricaProvince(evento :any){
    this.province=[];
    for(let regione of LOCATIONS_DATA.regioni){
      if (regione.nome === evento.target.value){
        for(let provincia of regione.province){
          this.province.push(provincia);
        }
      }
    }
    
   }
   caricaComuni(evento:any){
    for(let provincia of this.province){
      this.comuni = provincia.comuni
    }
   }
  }


