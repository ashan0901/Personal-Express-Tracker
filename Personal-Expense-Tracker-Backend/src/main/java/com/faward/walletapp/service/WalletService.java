package com.faward.walletapp.service;

import com.faward.walletapp.entity.Account;
import com.faward.walletapp.entity.Transaction;
import com.faward.walletapp.entity.Wallet;
import com.faward.walletapp.exception.WalletException;
import com.faward.walletapp.repository.AccountRepository;
import com.faward.walletapp.repository.WallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WalletService {


    @Autowired
    private WallRepository wallRepository;

    private AccountRepository accountRepository;
//    public List<Wallet> getAll(String account_id){
//        return  wallRepository.findAllByOrderByPriority()  ;//TODO
//    }

    @Autowired
    public WalletService(AccountRepository accountRepository, WallRepository walletRepository) {
        this.accountRepository = accountRepository;
        this.wallRepository = walletRepository;
    }

    public List<Wallet> getAll(String account_id){
        Optional<Account> account = accountRepository.findById(account_id);
        if(account.isPresent()){
            return  wallRepository.findByAccount(account.get()) ;
        }
        return null;
    }
    public  Wallet getById(String id){
        Optional<Wallet> wallet = wallRepository.findById(id);
        if(wallet.isPresent()){
            return wallet.get();
        }
        //TODO
        throw new WalletException("Wallet with "+id+" does not exists!");
    }
//    public Wallet createOrUpdate(String accountId,Wallet wallet){
//        if(wallet.getId()==null){
//            wallRepository.save(wallet);
//        }else{
//            wallRepository.save(wallet);
//        }
//        return wallet;
//    }

    public Wallet createOrUpdate(String accountId,Wallet wallet){
        Optional<Account> account = accountRepository.findById(accountId);
        if(account.isPresent()) {
            wallet.setAccount(account.get());
            wallRepository.save(wallet);
            return wallet;
        }
        return null;
    }
    public  boolean delete(String id){
        Optional<Wallet> wallet = wallRepository.findById(id);
        if(wallet.isPresent()){
            wallRepository.delete(wallet.get());
            return true;
        }
        //TODO
        throw new WalletException("Wallet with "+id+" does not exists!");
    }
}
