import { Pipe, PipeTransform } from '@angular/core';

// Pipe para organizar os icones da categoria da lista de cursos.

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case "Front-End": return "code";
      case "Back-End": return "computer"
    }
    return "code";
  }

}
