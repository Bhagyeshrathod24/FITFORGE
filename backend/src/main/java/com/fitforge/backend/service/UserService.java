package com.fitforge.backend.service;

import com.fitforge.backend.dto.LoginRequest;
import com.fitforge.backend.dto.RegisterRequest;
import com.fitforge.backend.model.User;
import com.fitforge.backend.repository.UserRepo;
import com.fitforge.backend.dto.RegisterResponse;
import com.fitforge.backend.dto.RegisterRequest;

import org.springframework.stereotype.Service;


import org.springframework.security.crypto.password.PasswordEncoder;

@Service
public class UserService {
    private final UserRepo userrepo;
    private final PasswordEncoder pwdencoder;

    public UserService(UserRepo userrepo,
            PasswordEncoder pwdencoder) {

        this.userrepo = userrepo;
        this.pwdencoder = pwdencoder;
    }

    public RegisterResponse userRegister(RegisterRequest registerrequest) {
        if (userrepo.existsByEmail(registerrequest.getEmail())) {
            throw new IllegalArgumentException(" Email already Exists ");
        }
        User user = new User();
        user.setName(registerrequest.getName());
        user.setEmail(registerrequest.getEmail());

        String hashpwd = pwdencoder.encode(registerrequest.getPassword());
        user.setPasswordHash(hashpwd);

        User saveduser = userrepo.save(user);

        return new RegisterResponse(user.getId(), user.getName(), user.getEmail(), "Register Successful");
    }

    public boolean userLogin(LoginRequest request) {
        System.out.println("Login email: " + request.getEmail());
        User user = userrepo.findByEmail(request.getEmail().trim())
                .orElseThrow(() -> new IllegalArgumentException("email not register"));

        System.out.println("User found: " + user.getEmail());
        boolean passwordmatch = pwdencoder.matches(request.getPassword(), user.getPasswordHash());
        if (!passwordmatch) {
            throw new IllegalArgumentException("Password not match");
        }
        return true;
    }
}
