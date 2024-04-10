package com.faward.walletapp.service;

import com.faward.walletapp.entity.Account;

import com.faward.walletapp.entity.Wallet;
import com.faward.walletapp.exception.WalletException;
import com.faward.walletapp.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public Account getById(String id){
        Optional<Account> account = accountRepository.findById(id);
        if(account.isPresent()){
            return account.get();
        }
        //TODO
        throw new WalletException("Wallet with "+id+" does not exists!");
    }
    public Account create(Account account){
        if(account.getId()==null){
            accountRepository.save(account);
        }else{
            accountRepository.save(account);
        }
        return account;
    }

}
