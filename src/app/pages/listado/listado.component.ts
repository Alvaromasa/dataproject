import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';
import { DetallesComponent } from '../detalles/detalles.component';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private servicios: ServiciosService) { }
  clientes;
  
  ngOnInit(): void {
    this.servicios.getallclients().subscribe( datos => { console.log(datos);
      this.clientes = datos;});
  }

}
