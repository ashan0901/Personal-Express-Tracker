package com.faward.walletapp.service;

import com.faward.walletapp.entity.Transaction;
import com.faward.walletapp.entity.Wallet;
import com.faward.walletapp.exception.WalletException;
import com.faward.walletapp.repository.TransactionRepository;
import com.faward.walletapp.repository.WallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private WallRepository wallRepository;
    public List<Transaction> getAll(String walletId){
        Optional<Wallet> wallet = wallRepository.findById(walletId);
        if(wallet.isPresent()){
            return  transactionRepository.findByWallet(wallet.get()) ;
        }
        return null;
    }
    public  Transaction getById(String wallet_id,String id){
        Optional<Wallet> wallet = wallRepository.findById(wallet_id);
        if(wallet.isPresent()) {
            Optional<Transaction> transaction = transactionRepository.findById(id);
            if (transaction.isPresent()) {
                return transaction.get();
            }
        }
        //TODO
        throw new WalletException("Transaction with "+id+" does not exists!");
    }
    public Transaction createOrUpdate(String walletId,Transaction transaction){
       Optional<Wallet> wallet = wallRepository.findById(walletId);
       if(wallet.isPresent()) {
           transaction.setWallet(wallet.get());
           transactionRepository.save(transaction);
           return transaction;
       }
       return null;
    }
    public  boolean delete(String wallet_id,String id){
        Optional<Wallet> wallet = wallRepository.findById(wallet_id);
        if(wallet.isPresent()) {
            Optional<Transaction> transaction = transactionRepository.findById(id);
            if (transaction.isPresent()) {
                transactionRepository.delete(transaction.get());
                return true;
            }
        }
        //TODO
        throw new WalletException("Transaction with "+id+" does not exists!");
    }
}
