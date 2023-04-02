import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuarios: any;
  usuario = {
    email: '',
    password: '',
    name: ''
  }

  ngOnInit() {
   
  }

  constructor(private authService: AuthService, private router: Router) { }

  registrarse() {
    const { email, password } = this.usuario;
    this.authService.register(email, password).then(user => {
      console.log("se registro: ", user);
      let lista = [...this.usuarios];
      let existe = lista.find(user => user.email == email);

      if (existe === undefined) {
        alert("No se registro")
      };

      this.router.navigate(['/panelDeControl']);
    }).catch(err => {
      console.log(err)
    })
  }



}