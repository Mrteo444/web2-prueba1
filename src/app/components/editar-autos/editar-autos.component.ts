import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutosService } from '../../service/autos.service';

@Component({
  selector: 'app-editar-autos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-autos.component.html',
  styleUrl: './editar-autos.component.css'
})
export class EditarAutosComponent {




  id: any;
  placa: any;
  marca: any;
  color: any;
  ano: any;
  precio: any;

  ruta=inject(Router)
  router=inject(ActivatedRoute)

  ngOnInit() {
    this.router.params.subscribe(r =>{
      this.servicio.getNosotrosId(r['idAutos']).subscribe(p =>{
        this.id = p.id,
        this.placa=p.placa,
        this.marca=p.marca,
        this.color=p.color,
        this.ano=p.ano,
        this.precio=p.precio
      })
    })

}

servicio=inject(AutosService)

  editar(datos:any){
    this.servicio.putNosotros(datos.value).subscribe()

    this.ruta.navigateByUrl("autos")
  }

}