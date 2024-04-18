package com.faward.walletapp.controller;
import com.faward.walletapp.entity.Account;
import com.faward.walletapp.entity.Wallet;
import com.faward.walletapp.repository.AccountRepository;
import com.faward.walletapp.service.AccountService;
import com.faward.walletapp.service.ValidationErrorService;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/account")
@CrossOrigin
public class AccountController {
    @Autowired
    private AccountService accountService;

    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private ValidationErrorService validationService;

    @GetMapping("/{id}")
    public  ResponseEntity<?> getById(@PathVariable String id){
        return new ResponseEntity<>(accountService.getById(id),HttpStatus.OK);
    }


    @PostMapping("/save")
    public ResponseEntity<?> create(@RequestBody Account account, BindingResult result) {
        ResponseEntity errors = validationService.validate(result);
        if (errors != null) return errors;

        Account existingUser = accountRepository.findByUsername(account.getUsername());
        if (existingUser != null) {
            return ResponseEntity.badRequest().body("Error: Username is already taken!");
        }else {
            // Hashing the password before saving the account
            String hashedPassword = BCrypt.hashpw(account.getPassword(), BCrypt.gensalt());
            account.setPassword(hashedPassword);

            Account accountSaved = accountService.create(account);
            return new ResponseEntity<>(accountSaved, HttpStatus.CREATED);
        }


    }



}
