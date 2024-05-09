import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AutosService } from '../../service/autos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-autos',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './info-autos.component.html',
  styleUrl: './info-autos.component.css'
})
export class InfoAutosComponent {

  
    autos= [
      {
        "id": 1,
        "placa": "ABC123",
        "marca": "Toyota",
        "color": "Rojo",
        "imagen": "toyota.jpg",
        "ano": 2020,
        "precio": 25000
      },
      {
        "id": 2,
        "placa": "XYZ456",
        "marca": "Honda",
        "color": "Azul",
        "imagen": "honda.jpg",
        "ano": 2018,
        "precio": 20000
      },
      {
        "id": 3,
        "placa": "DEF789",
        "marca": "Ford",
        "color": "Negro",
        "imagen": "ford.jpg",
        "ano": 2019,
        "precio": 22000
      },
      {
        "id": 4,
        "placa": "GHI012",
        "marca": "Chevrolet",
        "color": "Blanco",
        "imagen": "chevrolet.jpg",
        "ano": 2021,
        "precio": 28000
      },
      {
        "id": 5,
        "placa": "JKL345",
        "marca": "BMW",
        "color": "Gris",
        "imagen": "bmw.jpg",
        "ano": 2017,
        "precio": 30000
      }
      
    ]
  

  service = inject(AutosService)

  servicios = inject(AutosService)
  ruta = inject(ActivatedRoute)

  
 
  juegos:any
  id:any
  nombre:any 
  año:any
  clasificacion: any; 

  ngOnInit(): void {
    this.ruta.params.subscribe(p =>{
      console.log(p['idinfo']);
      this.id=p['idInfo']
     

      this.autos.forEach(element => 
        {
          if(element.id == this.id){
            this.juegos= element
            this.nombre = element.placa;
            this.año = element.precio;
        
            console.log(this.juegos);
          }
        }
      )
    })
  
    
  }

}
