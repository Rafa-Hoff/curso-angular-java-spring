import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';

//Configuração das rotas
const routes: Routes = [
  { path: '', component: CoursesComponent } //Essa rota serve para mostrar a pagina de cursos
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
