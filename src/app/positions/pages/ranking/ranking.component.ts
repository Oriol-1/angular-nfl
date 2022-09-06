import { Component } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { ResrCountriesRespomse } from '../../interfaces/juegadore.interface';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styles: [
  ]
})
export class RankingComponent{

  termino: string = '';
  hayError: boolean = false;
  jugadores: ResrCountriesRespomse[] = [];

  constructor( private jugadorService: JugadorService) { }

  buscar( ){
    this.hayError = false;
    console.log(this.termino);

    this.jugadorService.buscarJugador( this.termino ).subscribe( (jugadores) => {
      console.log(jugadores);
      this.jugadores = jugadores;
    }, (err) => {
        this.hayError = true;
        this.jugadores = [];
    });
  }
  

}
