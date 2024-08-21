package com.rafahoff.crud_spring.controller;

import com.rafahoff.crud_spring.entities.Course;
import com.rafahoff.crud_spring.repository.CourseRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    //Atualmente, em novos projetos, nao se usa mais o "@Autowired", mas sim um construtor
    private final CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @GetMapping
    public List<Course> findAll() {
        return courseRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED) //Forma mais simplificada de retornar o Status HTTP.
    //ResquestBody ira pegar as informacoes do json e alocar automaticamente nos atributos da entidade.
    public Course create(@RequestBody Course newCourse) {
        return courseRepository.save(newCourse);

        //ResponseEntity nos ajudaria a ter o restorno do status http correto e a manipular os dados que estao retornando ou o header.
        //return ResponseEntity.status(HttpStatus.CREATED)
        //       .body(courseRepository.save(newCourse));
    }
}
