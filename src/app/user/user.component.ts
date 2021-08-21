import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private servicio:UsuarioService,private rout:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.rout.snapshot.paramMap.get('id');
    this.traerUsuario(id)
  }
  persona:any = ''
traerUsuario(id){
  this.servicio.traerUsuario(id).subscribe(res =>{
    console.log(res)
    this.persona = res.data
  })
}
}
