import { ApplicationModule, Component, inject } from '@angular/core';
import { AutosService } from '../../service/autos.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EditarAutosComponent } from '../../components/editar-autos/editar-autos.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [RouterLink,CommonModule, EditarAutosComponent,ApplicationModule,FormsModule],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {
  servicio = inject(AutosService)
  personas : any

  nosotros: any 
  placaFiltro: string = '';
  marcaFiltro: string = '';
  precioFiltro: number | null = null;

  ngOnInit(){
    this.servicio.getNosotros().subscribe( p => {
      this.personas= p
    })
    
  }
  
  eliminar(id:any){
    this.servicio.deleteNosotrosID(id).subscribe()
    window.location.reload()
  }
  buscar() {
    if (this.placaFiltro.trim() === '') {
      // Si el campo de búsqueda está vacío, mostrar todas las personas nuevamente
      this.servicio.getNosotros().subscribe(p => {
        this.personas = p;
      });
    } else {
      // Filtrar personas por placa
      this.servicio.getNosotros().subscribe(p => {
        this.personas = p.filter((persona: any) => {
          // Convertir ambas placas a minúsculas para compararlas sin importar mayúsculas/minúsculas
          const placaPersona = persona.placa.toLowerCase();
          const placaFiltro = this.placaFiltro.toLowerCase();
          // Retornar true si la placa de la persona incluye la placa ingresada por el usuario
          return placaPersona.includes(placaFiltro);
        });
      });
    }
  }

  buscarPorMarca() {
    if (this.marcaFiltro.trim() === '') {
      // Si el campo de búsqueda está vacío, mostrar todas las personas nuevamente
      this.servicio.getNosotros().subscribe(p => {
        this.personas = p;
      });
    } else {
      // Filtrar personas por marca
      this.servicio.getNosotros().subscribe(p => {
        this.personas = p.filter((persona: any) => {
          // Convertir tanto la marca de la persona como la marca de búsqueda a minúsculas para compararlas sin importar mayúsculas/minúsculas
          const marcaPersona = persona.marca.toLowerCase();
          const marcaFiltro = this.marcaFiltro.toLowerCase();
          // Retornar true si la marca de la persona incluye la marca ingresada por el usuario
          return marcaPersona.includes(marcaFiltro);
        });
      });
    }
  }

  buscarPorPrecio() {
    if (this.precioFiltro === null) {
      this.actualizarPersonas();
    } else {
      this.personas = this.personas.filter((persona: any) => {
        return persona.precio === this.precioFiltro;
      });
    }
  }
  actualizarPersonas() {
    this.servicio.getNosotros().subscribe(p => {
      this.personas = p;
    });
  }
}
