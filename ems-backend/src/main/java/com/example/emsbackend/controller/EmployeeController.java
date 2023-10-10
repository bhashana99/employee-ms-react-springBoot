package com.example.emsbackend.controller;

import com.example.emsbackend.exception.ResourceNotFoundException;
import com.example.emsbackend.model.Employee;
import com.example.emsbackend.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
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

    //    Add new Employee REST API
    @PostMapping
    public Employee createNewEmployee(@RequestBody Employee employee){

        return employeeRepo.save(employee);
    }
//    To Check Postman Add New Employee API
//    POST http://localhost:8080/api/v1/employees

    //Get Employee Details by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeRepo.findById(id).orElseThrow(()->
                new ResourceNotFoundException("Employee Not exist with id :" + id));

        return ResponseEntity.ok(employee);
    }
}
