import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

// Router
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  form: NgForm;
  data: any;
  heroe: Heroe = {
    nombre: '',
    casa: 'Marvel',
    bio: ''
  };

  nuevo: boolean = false;
  id: string;

  constructor( private _heroesService: HeroesService,
               private router: Router,
               private _activatedRoute: ActivatedRoute)
  {
    // Parametros de la url
    this._activatedRoute.params
        .subscribe( params => {
          this.id = params.id

          if (this.id !== 'nuevo'){
            this._heroesService.getHeroe(this.id)
                .subscribe( data => {

                  // Solucion error tipo Object
                  this.data = data;
                
                  this.heroe = this.data;

                })
          }

        });
  }

  ngOnInit() {
  }

  guardar(){
    console.log('funcion guardar: ', this.heroe);
    

    if (this.id === 'nuevo'){

      this._heroesService.nuevoHeroe(this.heroe)
          .subscribe( data => {
            // Solucion error tipo Object
            this.data = data;
            this.data = this.data.name;
  
            // Navegacion
            this.router.navigate(['/heroe', this.data])
          },
          error => console.log(error));
    } else {

      this._heroesService.actualizarHeroe(this.heroe, this.id)
          .subscribe( data => {
            // Solucion error tipo Object
            this.data = data;
            this.data = this.data.name;
  
            console.log(data);
          },
          error => console.log(error));

    }


  }

  agregarNuevo( form: NgForm){

    this.router.navigate(['/heroe', 'nuevo']);
    form.reset({
      casa:'Marvel'
    });
  }

}
