import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from '../noticia.service';
import { Noticia } from '../models/Noticia.model';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {

  public noticia: Noticia | undefined; // Garantir que a propriedade é do tipo Produto ou undefined

  constructor(
    private route: ActivatedRoute,
    private _noticiaService: NoticiaService
  ) {}

  ngOnInit(): void {
    this.listarProduto();
  }

  listarProduto(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this._noticiaService.getNoticia(id).subscribe(
        (retornaNoticia: Noticia) => {
          console.log('Dados retornados pela API:', retornaNoticia); // Verifique os dados
          this.noticia = retornaNoticia; // Atribua diretamente
        },
        error => {
          console.error('Erro ao buscar a notícia:', error);
        }
      );
    }
  }
}