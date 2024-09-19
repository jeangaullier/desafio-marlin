import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroNoticiaComponent } from './cadastro-noticia/cadastro-noticia.component';
import { ListaNoticiaComponent } from './lista-noticia/lista-noticia.component';
import { AtualizaNoticiaComponent } from './atualiza-noticia/atualiza-noticia.component';
import { RestritoComponent } from './restrito.component';

const restritoRoutes: Routes = [
    {
        path: 'restrito', component: RestritoComponent, children: [
            { path: 'cadastro', component: CadastroNoticiaComponent },
            { path: 'lista', component: ListaNoticiaComponent },
            { path: 'editar/:id', component: AtualizaNoticiaComponent }
        ]
    },

    { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(restritoRoutes)],
    exports: [RouterModule]
})
export class RestritoRoutingModule {
}
