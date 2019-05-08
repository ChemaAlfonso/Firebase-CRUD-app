import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[];
  data: any;
  loading = true;

  constructor( private _heroesService: HeroesService ) {

    this._heroesService.getHeroes()
        .subscribe(data => {
          this.data = data;
          this.heroes = this.data;
          this.loading = false;
        })

   }

  ngOnInit() {
  }

  eliminarHeroe(key$: string){
    
    this._heroesService.eliminarHeroe(key$)
        .subscribe( data => {
          if (data){
            console.log(data);
          } else {
            delete this.heroes[key$];
          }
        })
  }

}
