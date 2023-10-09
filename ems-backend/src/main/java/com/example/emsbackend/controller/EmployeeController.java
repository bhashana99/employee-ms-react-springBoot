package com.example.emsbackend.controller;

import com.example.emsbackend.model.Employee;
import com.example.emsbackend.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepo employeeRepo;

    //Get All Employees Details API Request
    @GetMapping
    public List<Employee> getAllEmployees(){

        return employeeRepo.findAll();
    }

//    To Check Postman Get All Employee AIP
//    GET http://localhost:8080/api/v1/employees



}
