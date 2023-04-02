import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-panel-de-control',
  templateUrl: './panel-de-control.component.html',
  styleUrls: ['./panel-de-control.component.css']
})
export class PanelDeControlComponent implements OnInit {
  userLogged: any;
  categoria!: number;
  horasExtras!: number;
  constructor( private authService: AuthService) {
    this.authService.getUserLogged().subscribe(res => {
      this.userLogged = res;
    })
  }

  ngOnInit(): void {

  }



  CalcularSueldo() {
    try {
      let elExtra;
      if (this.categoria >= 1) {
        if (this.categoria <= 5) { 
          if ( this.categoria == 1 && this.horasExtras > 40 ||  this.horasExtras == 40) {
            elExtra = 8000;
             const resultado = ((elExtra * 40) + (( this.horasExtras - 40) * 0.25) * elExtra);
            alert("El sueldo del empleado es: " + resultado)
            console.log("El sueldo del empleado es: " + resultado);
          } else if (this. categoria == 2 &&  this.horasExtras > 40 ||  this.horasExtras == 40) {
            elExtra = 12000;
            const resultado = ((elExtra * 40) + (( this.horasExtras - 40) * 0.25) * elExtra);
            alert("El sueldo del empleado es: " + resultado)
            console.log("El sueldo del empleado es: " + resultado);
          } else if ( this.categoria == 3 &&  this.horasExtras > 40 ||  this.horasExtras == 40) {
            elExtra = 18000;
            const resultado = ((elExtra * 40) + (( this.horasExtras - 40) * 0.25) * elExtra);
            alert("El sueldo del empleado es: " + resultado)
            console.log("El sueldo del empleado es: " + resultado);
          } else if ( this.categoria == 4 &&  this.horasExtras > 40 ||  this.horasExtras == 40) {
            elExtra = 25000;
            const resultado = ((elExtra * 40) + (( this.horasExtras - 40) * 0.25) * elExtra);
            alert("El sueldo del empleado es: " + resultado)
            console.log("El sueldo del empleado es: " + resultado);
          } else if ( this.categoria == 5 &&  this.horasExtras > 40 ||  this.horasExtras == 40) {
            elExtra = 32000;
            const resultado = ((elExtra * 40) + (( this.horasExtras - 40) * 0.25) * elExtra);
            alert("El sueldo del empleado es: " + resultado)
            console.log("El sueldo del empleado es: " + resultado);
          }
        } else {
          alert("no hay categorias mayores a 5");
          console.log("no hay categorias mayores a 5");
        }
      } else {
        alert("no hay categorias menores a 1");
        console.log("no hay categorias menores a 1");
      }
    } catch (error) {


    }
  }
  


}
