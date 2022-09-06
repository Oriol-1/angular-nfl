import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ResrCountriesRespomse } from '../interfaces/juegadore.interface';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
// nfl api url public
  // private apiUrl: string = 'https://www.balldontlie.io/api/v1/players';
//  api NFL-fantasy 2022 JSON
private apikey: string = '07397d4817msh2a22175fc32b0e2p136a11jsn74c45f34173d';



  
 



// private apiUrl:string = 'https://restcountries.com/v3.1';





private apiUrl:string = 'https://americanfootballapi.p.rapidapi.com/api/american-football/search/brady/';





  constructor( private http: HttpClient) { }

  buscarJugador( termino:string ):Observable<ResrCountriesRespomse[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<ResrCountriesRespomse[]>(url);

 
                  
                    
  }

}
