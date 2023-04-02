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
  sueldo !: number

  constructor(private authService: AuthService) {
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
          if (this.categoria == 1 && this.horasExtras > 40 || this.horasExtras == 40) {
            elExtra = 8000;
            let resultado = ((elExtra * 40) + ((this.horasExtras - 40) * 0.25) * elExtra);
            const sueldo = resultado + this.sueldo
            alert("Las horas extras del empleado es: " + resultado + "\n"
              + "y el sueldo del empleado: " + sueldo);
            console.log("El sueldo del empleado es: " + resultado);
          } else if (this.categoria == 2 && this.horasExtras > 40 || this.horasExtras == 40) {
            elExtra = 12000;
            let resultado = ((elExtra * 40) + ((this.horasExtras - 40) * 0.25) * elExtra);
            const sueldo = resultado + this.sueldo
            alert("Las horas extras del empleado es: " + resultado + "\n"
              + "y el sueldo del empleado: " + sueldo);
            console.log("El sueldo del empleado es: " + resultado);
          } else if (this.categoria == 3 && this.horasExtras > 40 || this.horasExtras == 40) {
            elExtra = 18000;
            let resultado = ((elExtra * 40) + ((this.horasExtras - 40) * 0.25) * elExtra);
            const sueldo = resultado + this.sueldo
            alert("Las horas extras del empleado es: " + resultado + "\n"
              + "y el sueldo del empleado: " + sueldo);
            console.log("El sueldo del empleado es: " + resultado);
          } else if (this.categoria == 4 && this.horasExtras > 40 || this.horasExtras == 40) {
            elExtra = 25000;
            let resultado = ((elExtra * 40) + ((this.horasExtras - 40) * 0.25) * elExtra);
            const sueldo = resultado + this.sueldo
            alert("Las horas extras del empleado es: " + resultado + "\n"
              + "y el sueldo del empleado: " + sueldo);
            console.log("El sueldo del empleado es: " + resultado);
          } else if (this.categoria == 5 && this.horasExtras > 40 || this.horasExtras == 40) {
            elExtra = 32000;
            let resultado = ((elExtra * 40) + ((this.horasExtras - 40) * 0.25) * elExtra);
            const sueldo = resultado + this.sueldo
            alert("Las horas extras del empleado es: " + resultado + "\n"
              + "y el sueldo del empleado: " + sueldo);
            console.log("El sueldo del empleado es: " + resultado);
          } else if (this.categoria == 1 && this.horasExtras < 40 || this.horasExtras == 40) {
            elExtra = 8000;
            let resultado = ((this.horasExtras * elExtra));
            const sueldo = resultado + this.sueldo
            alert("Las horas extras del empleado es: " + resultado + "\n"
              + "y el sueldo del empleado: " + sueldo);
          } else if (this.categoria == 2 && this.horasExtras < 40 || this.horasExtras == 40) {
            elExtra = 12000;
            let resultado = ((this.horasExtras * elExtra));
            const sueldo = resultado + this.sueldo
            alert("Las horas extras del empleado es: " + resultado + "\n"
              + "y el sueldo del empleado: " + sueldo);
            console.log("El sueldo del empleado es: " + resultado);
          } else if (this.categoria == 3 && this.horasExtras < 40 || this.horasExtras == 40) {
            elExtra = 18000;
            let resultado = ((this.horasExtras * elExtra));
            const sueldo = resultado + this.sueldo
            alert("Las horas extras del empleado es: " + resultado + "\n"
              + "y el sueldo del empleado: " + sueldo);
          } else if (this.categoria == 4 && this.horasExtras < 40 || this.horasExtras == 40) {
            elExtra = 25000;
            let resultado = ((this.horasExtras * elExtra));
            const sueldo = resultado + this.sueldo
            alert("Las horas extras del empleado es: " + resultado + "\n"
              + "y el sueldo del empleado: " + sueldo);
          } else if (this.categoria == 5 && this.horasExtras < 40 || this.horasExtras == 40) {
            elExtra = 32000;
            let resultado = ((this.horasExtras * elExtra));
            const sueldo = resultado + this.sueldo
            alert("Las horas extras del empleado es: " + resultado + "\n"
              + "y el sueldo del empleado: " + sueldo);
          }

        } else {
          alert("no hay categorias mayores a 5: ");
          console.log("no hay categorias mayores a 5");
        }
      } else {
        alert("no hay categorias menores a 5");
        console.log("no hay categorias menores a 1");
      }
    } catch (error) {


    }
  }



}
