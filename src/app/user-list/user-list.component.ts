import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private servicio:UsuarioService) { }

  ngOnInit(): void {
    this.traterLista()
  }
  lista
  traterLista(){
    this.servicio.traerLista().subscribe(res =>{
      console.log(res.data)
     this.lista = res.data
    })
  }
  siguiente(page){
    this.servicio.siguienteLista(page).subscribe(res =>{
      console.log(res.data)
      this.lista = res.data
    })
  }
}
