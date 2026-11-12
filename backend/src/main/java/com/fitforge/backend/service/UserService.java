package com.fitforge.backend.service;

import com.fitforge.backend.dto.RegisterRequest;
import com.fitforge.backend.model.User;
import com.fitforge.backend.repository.UserRepo;
import com.fitforge.backend.dto.RegisterResponse;
import com.fitforge.backend.dto.RegisterRequest;
import org.springframework.stereotype.Service;

import javax.management.RuntimeErrorException;

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

        String hashpwd = pwdencoder.encode(registerrequest.getPwd());
        user.setPasswordhash(hashpwd);

        User saveduser = userrepo.save(user);

        return new RegisterResponse(user.getId(), user.getName(), user.getEmail(), "Register Successful");
    }
}
