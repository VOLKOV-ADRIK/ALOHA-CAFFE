import { Component } from '@angular/core';
import { CargarscripsService } from 'src/app/cargarscrips.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {

  usuario_activo: boolean = false;

  botonMostrado: boolean = false;


  constructor(private cargarscripts: CargarscripsService, private auth: AngularFireAuth, private router:Router){
    cargarscripts.cargar([
      "assets/vendor/aos/aos.js",
      "assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
      "assets/vendor/glightbox/js/glightbox.min.js",
      "assets/vendor/isotope-layout/isotope.pkgd.min.js",
      "assets/vendor/swiper/swiper-bundle.min.js",
      "assets/vendor/php-email-form/validate.js",
      "assets/js/main.js"
    ])
  }

  ngOnInit(): void {
    this.auth.authState.subscribe(user => {
      if (user && user.email === 'scottsummerscobain@gmail.com') {
        this.botonMostrado = true;
      } else {
        this.botonMostrado = false;
      }
    });
  }
  
  
  



  cerrarSesion(){
    this.auth.authState.subscribe(user =>{
      if (user) {
        this.auth.signOut().then(() =>{
          localStorage.removeItem('user');
          alert("Sesion Finalizada")
          window.location.reload()
        })
      }
      else{
        this.router.navigate(['/inicio'])
      }
    })
  }
}
