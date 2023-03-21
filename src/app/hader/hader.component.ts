import { Component } from '@angular/core';
import { CargarscripsService } from '../cargarscrips.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hader',
  templateUrl: './hader.component.html',
  styleUrls: ['./hader.component.css']
})
export class HaderComponent {

  usuario_activo: boolean | undefined

  constructor(private cargarscripts: CargarscripsService, private auth: AngularFireAuth, private router: Router){
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

  ngOnInit(): void{
    this.auth.authState.subscribe(user =>{
      if (user) {
        this.usuario_activo = true
      }
      else{
        this.usuario_activo = false
      }
    })

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
