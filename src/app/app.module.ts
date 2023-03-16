import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule } from'@angular/fire/compat';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
import { CommonModule } from '@angular/common';

/*Declaraciones*/
const appRoutes: Routes =[
  {path:'', component:InicioComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'contactanos', component:ContactanosComponent},
  {path:'inciar', component:SesionComponent},
  {path:'inicio', component:InicioComponent},
  {path:'registro', component:RegistroComponent}
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
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDqynv8ZT-tPQcTx6hwXUWsDlyCcqyYEnw",
      authDomain: "aloha-caffe-99cae.firebaseapp.com",
      projectId: "aloha-caffe-99cae",
      storageBucket: "aloha-caffe-99cae.appspot.com",
      messagingSenderId: "694151136488",
      appId: "1:694151136488:web:5bde2c16833f34d706755d",
      measurementId: "G-M95VECR7FS"
    })
  ],
  providers: [
    CargarscripsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
