import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent {
  //o FormBuilder tem toda a logica que vai ajudar a criar o form group.
  form = this.formBuilder.group({
    //fazendo a declaracao dessa forma, é atribuido um tipo para as variaveis, antes era o tipo "any".
    name: [''], //ou name = new FormControl<string | null> ('');
    category: ['']
  });

  //Ao utilizar o NonNullableFormBuilder ao inves do FormBuilder, impede o uso do null em todos os campos
  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location) {

  }

  onSubmit() { //chama a funcao save() de servico para enviar os dados para a api
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  //barra de aviso ao criar curso
  private onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 3000 });
    this.onCancel();
  }

  //barra de aviso de erro ao criar curso
  private onError() {
    this.snackBar.open('Erro ao salvar curso.', '', { duration: 3000 });
  }
}
