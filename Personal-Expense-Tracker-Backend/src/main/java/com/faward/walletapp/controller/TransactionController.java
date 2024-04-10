package com.faward.walletapp.controller;

import com.faward.walletapp.entity.Transaction;
import com.faward.walletapp.service.TransactionService;
import com.faward.walletapp.service.ValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/transaction")
@CrossOrigin

public class TransactionController {
    @Autowired
    private TransactionService transactionService;
    @Autowired
    private ValidationErrorService validationService;

    @GetMapping("/{wallet_id}")
    public ResponseEntity<?> getAll(@PathVariable String wallet_id){
        return new ResponseEntity<>(transactionService.getAll(wallet_id), HttpStatus.OK);
    }

    @GetMapping("/{wallet_id}/{id}")
    public  ResponseEntity<?> getById(@PathVariable String wallet_id,@PathVariable String id){
        return new ResponseEntity<>(transactionService.getById(wallet_id,id),HttpStatus.OK);
    }

    @PostMapping("/{wallet_id}")
    public ResponseEntity<?> create(@PathVariable String wallet_id, @RequestBody Transaction transaction, BindingResult result){
        ResponseEntity errors = validationService.validate(result);
        if(errors != null) return errors;

        Transaction transactionSaved = transactionService.createOrUpdate(wallet_id,transaction);
        return new ResponseEntity<Transaction>(transactionSaved,HttpStatus.CREATED);
    }

    @PutMapping("/{wallet_id}/{id}")
    public ResponseEntity<?> update(@PathVariable String wallet_id,@PathVariable String id,@RequestBody Transaction transaction, BindingResult result){
        ResponseEntity errors = validationService.validate(result);
        if(errors != null) return errors;
        transaction.setId(id.toString());
        Transaction transactionSaved = transactionService.createOrUpdate(wallet_id,transaction);
        return new ResponseEntity<Transaction>(transactionSaved,HttpStatus.OK);
    }

    @DeleteMapping("/{wallet_id}/{id}")
    public ResponseEntity<?> delete(@PathVariable String wallet_id,@PathVariable String id){
        transactionService.delete(wallet_id,id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
