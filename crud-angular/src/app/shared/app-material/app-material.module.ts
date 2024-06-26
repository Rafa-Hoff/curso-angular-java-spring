//Local para centralizar os imports da aplicação, todos os modulos que precirarem dos imports, irão utilizar de um único local.

import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule
  ],
})
export class AppMaterialModule { }
