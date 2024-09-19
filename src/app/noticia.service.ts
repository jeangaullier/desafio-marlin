import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from './models/Noticia.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService {

  private url = "https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post";
  
  constructor(private  http: HttpClient) { }

  atualizarNoticia(id: any, noticia: Noticia): Observable<Noticia[]> {
    const urlAtualizar = `${this.url}/${id}`;
    return this.http.put<Noticia[]>(urlAtualizar, noticia);
  }

  getNoticia(id:any): Observable<Noticia> {
    const urlAtualizar = `${this.url}?id=${id}`;
    return this.http.get<Noticia[]>(urlAtualizar).pipe(
      map((noticias: Noticia[]) => noticias[0]) // Extrai o primeiro item da lista
    );
  }

  getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.url);
  }

  cadastrarNoticia(noticia: Noticia): Observable<Noticia[]> {
    return this.http.post<Noticia[]>(this.url, noticia);
  }

  removerNoticia(id: any): Observable<Noticia[]> {
    const urlDeletar = `${this.url}/${id}`;
    return this.http.delete<Noticia[]>(urlDeletar);
  }
}
