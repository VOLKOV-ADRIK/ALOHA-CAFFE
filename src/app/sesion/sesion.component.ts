import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

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

  constructor(private auth: AngularFireAuth, private router: Router){ }

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
