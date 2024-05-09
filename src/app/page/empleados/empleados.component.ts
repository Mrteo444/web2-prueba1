import { Component, inject } from '@angular/core';
import { PersonalService } from '../../service/personal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  servicio = inject(PersonalService)
 
  empleados : any;
  marca ="";
 
  ngOnInit(){
    this.servicio.getPersonal().subscribe(p=>(
      this.empleados = p
    )
 
    )
 
  }
 
 
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
 busqueda:any
 
}
 
    
  


