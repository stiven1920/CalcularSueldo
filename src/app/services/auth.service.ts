import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }



  async register(email: string, password: string) {
    try {
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }

  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }


  async loginWithGoogle(email: string, password: string) {
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log("error en login con google: ", err);
      return null;
    }
  }

  getUserLogged() {
    return this.afauth.authState;
  }

  logout() {
    this.afauth.signOut();
  }

  CalcularSueldo(categoria:number, horasExtras:number) {
    try {
      let elExtra;
      if (categoria >= 1) {
        if (categoria <= 5) { 
          if ( categoria == 1 && horasExtras > 40 ||  horasExtras == 40) {
            elExtra = 8000;
             const resultado = ((elExtra * 40) + (( horasExtras - 40) * 0.25) * elExtra);
            alert("El sueldo del empleado es: " + resultado)
            console.log("El sueldo del empleado es: " + resultado);
          } else if ( categoria == 2 &&  horasExtras > 40 ||  horasExtras == 40) {
            elExtra = 12000;
            const resultado = ((elExtra * 40) + (( horasExtras - 40) * 0.25) * elExtra);
            console.log("El sueldo del empleado es: " + resultado);
          } else if ( categoria == 3 &&  horasExtras > 40 ||  horasExtras == 40) {
            elExtra = 18000;
            const resultado = ((elExtra * 40) + (( horasExtras - 40) * 0.25) * elExtra);
            console.log("El sueldo del empleado es: " + resultado);
          } else if ( categoria == 4 &&  horasExtras > 40 ||  horasExtras == 40) {
            elExtra = 25000;
            const resultado = ((elExtra * 40) + (( horasExtras - 40) * 0.25) * elExtra);
            console.log("El sueldo del empleado es: " + resultado);
          } else if ( categoria == 5 &&  horasExtras > 40 ||  horasExtras == 40) {
            elExtra = 32000;
            const resultado = ((elExtra * 40) + (( horasExtras - 40) * 0.25) * elExtra);
            console.log("El sueldo del empleado es: " + resultado);
          }
        } else {
          alert("no hay categorias mayores a 5");
          console.log("no hay categorias mayores a 5");
        }
      } else {
        alert("no hay categorias mayores a 5");
        console.log("no hay categorias menores a 1");
      }
    } catch (error) {


    }
  }


}
