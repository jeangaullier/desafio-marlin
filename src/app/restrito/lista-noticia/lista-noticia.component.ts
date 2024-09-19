import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noticia } from 'src/app/models/Noticia.model';
import { NoticiaService } from 'src/app/noticia.service';

@Component({
  selector: 'app-lista-noticia',
  templateUrl: './lista-noticia.component.html',
  styleUrls: ['./lista-noticia.component.css']
})
export class ListaNoticiaComponent implements OnInit{

  public produtos: Noticia[] = [];

  constructor(private _noticiaService:NoticiaService, private _router: Router){}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos():void{
    this._noticiaService.getNoticias().subscribe(
      retornaNoticia =>{
        this.produtos = retornaNoticia.map(
          item => {
            return new Noticia(
              item.id,
              item.image,
              item.title,
              item.body
            );
          }
        )
      }
    )
  }

  excluir(id: number){
    this._noticiaService.removerNoticia(id).subscribe(
      noticia => {
        this.listarProdutos();
      },
      err => {alert("Erro ao Excluir")}
    );

      this._router.navigate(["/restrito/lista"]);

  }

}
