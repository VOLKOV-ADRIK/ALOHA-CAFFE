import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule } from'@angular/fire/compat';
import { environment } from '../../environments/enviroment';

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
import { ContactComponent } from './contact/contact.component';
import { NosotrosComponent } from './content/nosotros/nosotros.component';
import { ContactanosComponent } from './content/contactanos/contactanos.component';

/*Componente para rutas*/
import {RouterModule, Routes} from '@angular/router';

/*Declaraciones*/
const appRoutes: Routes =[
  {path:'nosotros', component:NosotrosComponent},
  {path:'contactanos', component:ContactanosComponent},
  {path:'inciar', component:SesionComponent},
  {path:'inicio', component:InicioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HaderComponent,
    NavbarComponent,
    ContentComponent,
    InicioComponent,
    FooterComponent,
    RegistroComponent,
    SesionComponent,
    ContactComponent,
    NosotrosComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    CargarscripsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
