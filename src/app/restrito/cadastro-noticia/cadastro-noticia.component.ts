import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/models/Noticia.model';
import { NoticiaService } from 'src/app/noticia.service';

@Component({
  selector: 'app-cadastro-noticia',
  templateUrl: './cadastro-noticia.component.html',
  styleUrls: ['./cadastro-noticia.component.css']
})
export class CadastroNoticiaComponent {

  public noticia: Noticia = new Noticia(0,"","","");

  constructor(private _noticiaService:NoticiaService, private _router: Router){}

  cadastrar():void{
    this._noticiaService.cadastrarNoticia(this.noticia).subscribe(
      noticia => {
        this.noticia = new Noticia(0,"","","");
        alert("Cadastro Efetuado com sucesso");
      },
      err => {
        alert("Erro ao Cadastrar");
      }
    );

    this._router.navigate(["restrito/lista"]);
  }

  
}
