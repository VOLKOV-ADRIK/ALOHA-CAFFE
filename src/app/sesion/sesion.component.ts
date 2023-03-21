import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { CargarscripsService } from '../cargarscrips.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {

  form={
    correo:"",
    contrasena:""
  }

  constructor(private auth: AngularFireAuth, private router: Router, private cargarscripts: CargarscripsService){
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
    this.auth.authState.subscribe(user => {
      if (user){
        this.router.navigate(['/inicio'])
      }
    })
  }

  //Iniciar sesion

  iniciarSesion(){
    this.auth.signInWithEmailAndPassword(this.form.correo, this.form.contrasena).then((userCredential) => {
      //Signed in
      const user = userCredential.user;
      console.log (user)
      alert("Bienvenido")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  }
}
