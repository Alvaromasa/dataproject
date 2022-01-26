import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import {AgmCoreModule} from '@agm/core';
import { MapaComponent } from './pages/mapa/mapa.component';
import {HttpClientModule} from '@angular/common/http';
import { ListadoComponent } from './pages/listado/listado.component';
import { DetallesComponent } from './pages/detalles/detalles.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    TiendaComponent,
    ContactoComponent,
    MapaComponent,
    ListadoComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKNUCN_lMb2fiX_e9R8t11vE0ofmD2_TU'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
