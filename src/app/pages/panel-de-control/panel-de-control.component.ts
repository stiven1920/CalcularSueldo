import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-panel-de-control',
  templateUrl: './panel-de-control.component.html',
  styleUrls: ['./panel-de-control.component.css']
})
export class PanelDeControlComponent implements OnInit {
  userLogged: any;
  constructor( private authService: AuthService) {
    this.authService.getUserLogged().subscribe(res => {
      this.userLogged = res;
    })
  }
sueldo ={
  categoria : 0,
  sueldo : 0,
  horasExtras :  0
}
  ngOnInit(): void {

  }

  CalcularSueldo(){
    console.log("CalcularSueldo", this.CalcularSueldo);
    const {categoria, horasExtras} = this.sueldo;
    this.authService.CalcularSueldo(categoria, horasExtras);
  }
  


}
