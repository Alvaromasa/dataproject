import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/servicios/servicios.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat:number;
  lng:number;
  zoom:number;
  mapTypeId:string;
  located:boolean;

  paises:any[];
  clientes;

  constructor(private service : ServiciosService) {
    this.lat =40;
    this.lng=-3;
    this.zoom=6;
    this.mapTypeId ='hybrid';
    this.located= false;
   }

  ngOnInit(): void {
    this.service.getall()
    .then(paises => {console.log(paises);
      this.paises= paises});
    
    this.service.getallclients().subscribe( datos => { console.log(datos);
      this.clientes = datos;});

  }

getCurrentPosition(){
  navigator.geolocation.getCurrentPosition(position => {
    this.lng = position.coords.longitude;
    this.lat = position.coords.latitude;
    this.zoom= 17;
    this.located= true;
  })
}


}
