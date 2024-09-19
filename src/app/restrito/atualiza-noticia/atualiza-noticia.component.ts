import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/models/Noticia.model';
import { NoticiaService } from 'src/app/noticia.service';

@Component({
  selector: 'app-atualiza-noticia',
  templateUrl: './atualiza-noticia.component.html',
  styleUrls: ['./atualiza-noticia.component.css']
})
export class AtualizaNoticiaComponent implements OnInit {

  public noticiaId: number = 0;
  public noticia: Noticia = new Noticia(0, "", "", "");

  constructor(
    private _noticiaService: NoticiaService, 
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Mover a subscrição de parâmetros para o ngOnInit
    this._activatedRoute.params.subscribe(params => {
      this.noticiaId = params['id'];
      this.listarProduto(); // Chamar listarProduto após receber o ID da rota
    });
  }

  listarProduto(): void {
    this._noticiaService.getNoticia(this.noticiaId).subscribe(
      (res: Noticia) => {
        // Ajuste: Assuma que a resposta é um único objeto Produto
        this.noticia = new Noticia(res.id, res.image, res.title, res.body);
      },
      err => {
        console.error('Erro ao buscar o produto', err);
      }
    );
  }

  atualizar(id: number): void {
    this._noticiaService.atualizarNoticia(id, this.noticia).subscribe(
      noticia => {
        console.log('Produto atualizado com sucesso', noticia);
        // Limpar o formulário ou produto após atualização
        this.noticia = new Noticia(0, "", "", "");
        // Navegar após o retorno da requisição de atualização
        this._router.navigate(["restrito/lista"]);
      },
      err => {
        alert("Erro ao atualizar");
        console.error('Erro ao atualizar o produto', err);
      }
    );
  }

}
