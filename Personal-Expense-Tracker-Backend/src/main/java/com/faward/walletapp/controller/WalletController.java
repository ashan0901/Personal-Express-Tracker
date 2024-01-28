package com.faward.walletapp.controller;

import com.faward.walletapp.entity.Wallet;
import com.faward.walletapp.service.ValidationErrorService;
import com.faward.walletapp.service.WalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/wallet")
public class WalletController {

    @Autowired
    private WalletService walletService;
    @Autowired
    private ValidationErrorService validationService;
    @GetMapping
    public ResponseEntity<?> getAll(){
        return new ResponseEntity<>(walletService.getAll(),HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public  ResponseEntity<?> getById(@PathVariable Long id){
        return new ResponseEntity<>(walletService.getById(id),HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<?> create(@RequestBody Wallet wallet, BindingResult result){
        ResponseEntity errors = validationService.validate(result);
        if(errors != null) return errors;

        Wallet walletSaved = walletService.createOrUpdate(wallet);
        return new ResponseEntity<Wallet>(walletSaved,HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,@RequestBody Wallet wallet, BindingResult result){
        ResponseEntity errors = validationService.validate(result);
        if(errors != null) return errors;
        wallet.setId(id);
        Wallet walletSaved = walletService.createOrUpdate(wallet);
        return new ResponseEntity<Wallet>(walletSaved,HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        walletService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
