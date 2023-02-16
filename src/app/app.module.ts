import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HaderComponent } from './hader/hader.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { CargarscripsService } from './cargarscrips.service';

@NgModule({
  declarations: [
    AppComponent,
    HaderComponent,
    NavbarComponent,
    ContentComponent,
    InicioComponent,
    FooterComponent,
    RegistroComponent,
    SesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarscripsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
