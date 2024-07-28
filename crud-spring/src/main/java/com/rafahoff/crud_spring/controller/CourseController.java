package com.rafahoff.crud_spring.controller;

import com.rafahoff.crud_spring.entities.Course;
import com.rafahoff.crud_spring.repository.CourseRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
