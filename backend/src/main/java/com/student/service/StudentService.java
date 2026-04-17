package com.student.service;

import com.student.model.Student;
import com.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Student registerStudent(Student student) throws Exception {
        if (studentRepository.findByEmail(student.getEmail()).isPresent()) {
            throw new Exception("Email already registered!");
        }
        // Encrypt password before saving
        student.setPassword(passwordEncoder.encode(student.getPassword()));
        return studentRepository.save(student);
    }

    public Student loginStudent(String email, String password) {
        Optional<Student> studentOpt = studentRepository.findByEmail(email);
        if (studentOpt.isPresent()) {
            Student student = studentOpt.get();
            // Check if encrypted password matches
            if (passwordEncoder.matches(password, student.getPassword())) {
                return student;
            }
        }
        return null;
    }
}
