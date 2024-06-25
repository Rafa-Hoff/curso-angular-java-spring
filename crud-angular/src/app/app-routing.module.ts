import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' }, //Caso o caminho esteja "simples", será direcionado para a parte de cursos depois de verificar o caminho inteiro.
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) //Configuração da rota de cursos com Lazy loading. LoadChildren carregará de forma automática.
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
