import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { RestritoComponent } from './restrito/restrito.component';

const routes: Routes = [
  {path: 'a', component: NoticiaComponent }, 
  {path:'inicio', component: InicioComponent},
  {path:'inicio/noticia/:id', component: NoticiaComponent},
  {path:'restrito',component: RestritoComponent },
  {path:'', redirectTo:'/inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
