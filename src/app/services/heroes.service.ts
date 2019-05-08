import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  fireURL: string = 'https://heroesapp-2efb4.firebaseio.com/Heroes.json';
  heroeURL: string = 'https://heroesapp-2efb4.firebaseio.com/Heroes/';

  constructor( private _http: HttpClient) { }


  nuevoHeroe( heroe: Heroe ){
    let body = JSON.stringify( heroe );
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    return this._http.post( this.fireURL, body, { headers } )
        .pipe( map( res => {
            return res;
        }));


  }
  
  actualizarHeroe( heroe: Heroe, key$: string ){
    let body = JSON.stringify( heroe );
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    let url = `${this.heroeURL}/${ key$ }.json`;

    return this._http.put( url, body, { headers } )
        .pipe( map( res => {
            return res;
        }));


  }

  getHeroe(key$: string){
    let url = `${this.heroeURL}/${key$}.json`;

    return this._http.get( url )
          .pipe( map(res => res));

  }

  
  getHeroes(){
    return this._http.get( this.fireURL )
          .pipe( map(res => res));
  }

  eliminarHeroe(key$: string){
    let url = `${ this.heroeURL }/${ key$ }.json`;

    console.log(key$);
    return this._http.delete( url )
          .pipe(map(res => res ));
  }

}
