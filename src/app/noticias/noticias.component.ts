import { Component, OnInit } from '@angular/core';
import { Noticia } from '../models/Noticia.model';
import { NoticiaService } from '../noticia.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit{

  cols = 2;
  public noticias: Noticia[] = [];

  constructor(private _noticiaService:NoticiaService, private breakpointObserver: BreakpointObserver){}

  ngOnInit(): void {
    this.listarProdutos();
    this.breakpointObserver.observe([Breakpoints.HandsetLandscape])
      .subscribe(result => {
        this.cols = result.matches ? 1 : 2;
      });
    this.breakpointObserver.observe([Breakpoints.HandsetPortrait])
      .subscribe(result => {
        this.cols = result.matches ? 1 : 2;
      });
  }

  listarProdutos(): void {
    this._noticiaService.getNoticias().subscribe(
      retornaNoticia => {
        console.log(retornaNoticia); // Verifique os dados aqui
        this.noticias = retornaNoticia.map(
          item => {
            return new Noticia(
              item.id,
              item.image,
              item.title,
              item.body
            );
          },
        )
      }
    )
  }
}