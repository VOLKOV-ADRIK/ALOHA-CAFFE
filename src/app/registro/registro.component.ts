import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  form={
    nombre: "",
    correo:"",
    contrasena:""
  }

  ccontrasena: any | undefined

  constructor(private auth: AngularFireAuth){}
  ngOnInit(): void{

  }

  //Registro

  registrarme(){
    if(this.form.nombre != '' && this.form.correo != '' && this.form.contrasena !='' && this.ccontrasena !=''){
      if(this.form.contrasena!=this.ccontrasena){
        alert("Las contraseñas no coinciden")
      }
      else{
        this.adduser(this.form).then((result)=>{
          if(result){
            alert("Reguistrado con exito")
            this.ngOnInit()
          }
          else{
            alert("Error desconocido intente de nuevo")
          }
        })
      }
    }
    else{
      alert("Favor de completar todos los datos")
    }
  }

  //Agregar al usuario

  adduser(form: any){
    var promise = new Promise((resolve,reject) =>{
      this.auth.createUserWithEmailAndPassword(form.correo, form.contrasena)
      .then((result) =>{
        resolve(result)
      })
      .catch(function(error){
        if(error.code == 'auth/invalid-email'){
          alert("Ingrese un correo valido")
        }
        if(error.code == 'auth/email-already-use'){
          alert("Este correo ya esta en uso")
        }
        if(error.code == 'auth/weak-password'){
          alert("La contraseña debe tener al menos 6 caracteres")
        }
      })
    })
    return promise;
  }

  form={
    nombre: "",
    correo: "",
    contrasena: ""
  }

  ccontrasena:any

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void{

  }

  adduser(form: any){
    var promise = new Promise((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(form.correo, form.contrasena)
      .then((result) => {
        resolve(result)
      })
      .catch(function(error){
        if(error.code =='auth/invalid-email'){
          alert("Ingresa un correo valido")
        }
        if(error.code == 'auth/email-alredy-in-use'){
          alert("Este correo ya esta en uso")
        }
        if(error.code == 'auth/weak-password'){
          alert("La contraseña es muy debel debe tener almenos 6 caracteres")
        }
      })
    })
    return promise;
  }

  //Registro

  registrarme(){
    if(this.form.nombre != '' && this.form.correo != '' && this.form.contrasena !='' && this.ccontrasena !=''){
      if(this.form.contrasena!=this.ccontrasena){
        alert("Las contraseñas no coinciden!")
      }
      else{
        this.adduser(this.form).then((result)=>{
          if(result){
          alert("Tu registro se realizo con exito")
          this.ngOnInit()
          }
          else{
            alert("Error. Intente de nuevo")
          }
        })
      }
    }
    else{
      alert("Favor de completar los datos")
    }
  }

}