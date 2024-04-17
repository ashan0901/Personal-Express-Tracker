package com.faward.walletapp.controller;

import com.faward.walletapp.entity.Account;
import com.faward.walletapp.entity.LoginDTO;
import com.faward.walletapp.repository.AccountRepository;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("/login")
@CrossOrigin
public class LoginController {

    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO) {
        Account user = accountRepository.findByUsername(loginDTO.getUsername());

        // Check if user exists and verify the hashed password
        if (user != null && BCrypt.checkpw(loginDTO.getPassword(), user.getPassword())) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.badRequest().body("Invalid username or password.");
        }
    }
}
