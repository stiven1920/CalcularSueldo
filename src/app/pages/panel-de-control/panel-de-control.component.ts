import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataBaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-panel-de-control',
  templateUrl: './panel-de-control.component.html',
  styleUrls: ['./panel-de-control.component.css']
})
export class PanelDeControlComponent implements OnInit {
  mostrarConfirmacion = false;
  codigoIngresado = "";
  codigoDeVerificacion = "multitask4013"
  usuarios: any;
  listaDesordenada: any;
  sorteo: any;
  userLogged: any;
  constructor(private database: DataBaseService,
    private authService: AuthService) {
    this.authService.getUserLogged().subscribe(res => {
      this.userLogged = res;
    })
  }

  ngOnInit(): void {
    this.database.obtenerTodos('users').subscribe(usuariosRef => {
      this.usuarios = usuariosRef.map(userRef => {
        let usuario: any = userRef.payload.doc.data();
        usuario['id'] = userRef.payload.doc.id;
        return usuario;
      });
    })

    this.database.obtenerTodos('sorteos').subscribe(sorteosRef => {
      this.sorteo = sorteosRef.map(userRef => {
        let usuario: any = userRef.payload.doc.data();
        usuario['id'] = userRef.payload.doc.id;
        return usuario;
      });
      console.log("SORTEO ", this.sorteo[0]);
    })



  }

  desordenarLista() {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.listaDesordenada = [...this.usuarios].sort(() => { return Math.random() - 0.5 });
      }
    }, 200);
  }

  asignarRegalo() {
    let listaSorteada = [];
    for (let i = 0; i < this.listaDesordenada.length - 1; i++) {
      listaSorteada.push({
        santa: {
          name: this.listaDesordenada[i].name,
          email: this.listaDesordenada[i].email
        },
        elegido:
        {
          name: this.listaDesordenada[i + 1].name,
          email: this.listaDesordenada[i + 1].email
        }
      });
    }

    listaSorteada.push({
      santa: {
        name: this.listaDesordenada[this.listaDesordenada.length - 1].name,
        email: this.listaDesordenada[this.listaDesordenada.length - 1].email
      },
      elegido:
      {
        name: this.listaDesordenada[0].name,
        email: this.listaDesordenada[0].email
      }
    });

    listaSorteada.forEach(usuario => {
      console.log(usuario.santa['name'] + "-->" + usuario.elegido['name']);
    });
    this.database.createWithCustomId('sorteos', 'ultimoSorteo', { listaSorteada });
  }

  sortear() {
    this.desordenarLista();
    setTimeout(() => {
      this.asignarRegalo();
      console.log(this.userLogged)
    }, 300);
    console.log('-------------------------------');
    console.log('-------------------------------');
    console.log('-------------------------------');
  }

  mostrarDialog() {
    this.mostrarConfirmacion = true;
  }

  eliminarSorteo() {
    if (this.codigoIngresado.toLowerCase() != this.codigoDeVerificacion.toLowerCase()) {
      alert("Deja de hacer trampa, ese codigo NO es.")
      return;
    }

    this.database.eliminar('sorteos', 'ultimoSorteo');


  }
}
