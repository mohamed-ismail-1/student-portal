package com.student.controller;

import com.student.model.Student;
import com.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // Allow all origins for production testing
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Student student) {
        try {
            Student registeredStudent = studentService.registerStudent(student);
            return ResponseEntity.ok(registeredStudent);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        Student student = studentService.loginStudent(email, password);
        if (student != null) {
            // In a real app, you would return a JWT token here
            return ResponseEntity.ok(student);
        }
        return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
    }
}
