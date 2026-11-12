package com.fitforge.backend.controller;

import com.fitforge.backend.model.User;
import com.fitforge.backend.service.UserService;
import com.fitforge.backend.dto.RegisterRequest;
import com.fitforge.backend.dto.RegisterResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    private UserService userservice;

    public UserController(UserService us) {
        this.userservice = us;
    }

    @PostMapping("/register")
    // response entity use to return the response by and http code and ? means
    // response body contains differengt types of objects
    public ResponseEntity<?> userRegister(@RequestBody RegisterRequest registerRequest) {
        try {
            RegisterResponse response = userservice.userRegister(registerRequest);

            return ResponseEntity
                    .status(HttpStatus.CREATED)// 201
                    .body(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)// 409
                    .body(e.getMessage());
        }

    }

}
