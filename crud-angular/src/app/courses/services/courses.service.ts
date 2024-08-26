import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses'; //temporario, apenas para testes.

  //No angular, o service é utilizado através da injeção de dependecia, mas como tera uma conexao com uma Api,
  //sera utilizado uma chamada AJAX, que é uma chamada assíncrona pro servidor. No Angular, podemos fazer isso com o HTTP client:

  constructor(private httpclient: HttpClient) { } //o HTTP client sera fornecido automaticamente por estar no construtor (Essa é a injeção de dependencia).

  //retorna uma lista de cursos
  findAll() {
    return this.httpclient.get<Course[]>(this.API)
    .pipe(
      first(), //Subscribe
      //delay(5000),
      tap(courses => console.log(courses))
    );
  }

  save(record: Partial<Course>) { //recebera um registro, e sera responsavel por salvar o curso na api, utilizando o metodo POST
    return this.httpclient.post<Course>(this.API, record);
  }
}
