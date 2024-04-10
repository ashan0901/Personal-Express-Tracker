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
@CrossOrigin
public class WalletController {
    @Autowired
    private WalletService walletService;
    @Autowired
    private ValidationErrorService validationService;
    @GetMapping("/{account_id}")
    public ResponseEntity<?> getAll(@PathVariable String account_id){
        return new ResponseEntity<>(walletService.getAll(account_id),HttpStatus.OK);
    }
    @GetMapping("/{account_id}/{id}")
    public  ResponseEntity<?> getById(@PathVariable String account_id,@PathVariable String id){
        return new ResponseEntity<>(walletService.getById(id),HttpStatus.OK);
    }
    @PostMapping("/{account_id}")
    public ResponseEntity<?> create(@PathVariable String account_id,@RequestBody Wallet wallet, BindingResult result){
        ResponseEntity errors = validationService.validate(result);
        if(errors != null) return errors;

        Wallet walletSaved = walletService.createOrUpdate(account_id,wallet);
        if (walletSaved != null) {
            return new ResponseEntity<Wallet>(walletSaved, HttpStatus.CREATED);
        } else {
            // Handle case where wallet is not saved properly
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{account_id}/{id}")
    public ResponseEntity<?> update(@PathVariable String account_id,@PathVariable String id,@RequestBody Wallet wallet, BindingResult result){
        ResponseEntity errors = validationService.validate(result);
        if(errors != null) return errors;
        wallet.setId(id.toString());
        Wallet walletSaved = walletService.createOrUpdate(account_id,wallet);
        return new ResponseEntity<Wallet>(walletSaved,HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable String id){
        walletService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
