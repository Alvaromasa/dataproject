import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { TiendaComponent } from './pages/tienda/tienda.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'tienda',component:TiendaComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'mapa',component:MapaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
