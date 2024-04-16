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

    public Transaction createOrUpdate(String walletId, Transaction transaction) {
        Optional<Wallet> walletOpt = wallRepository.findById(walletId);
        if (!walletOpt.isPresent()) {
            throw new WalletException("Wallet with ID " + walletId + " not found.");
        }

        Wallet wallet = walletOpt.get();
        adjustWalletBalance(transaction, wallet);
        transaction.setWallet(wallet);
        transactionRepository.save(transaction);
        wallRepository.save(wallet);  // Save the updated wallet back to the repository
        return transaction;
    }

    private void adjustWalletBalance(Transaction transaction, Wallet wallet) {
        if (transaction.getType() == 1) {  // Income
            wallet.setCurrentBalance(wallet.getCurrentBalance() + transaction.getAmount());
        } else if (transaction.getType() == 2) {  // Expense
            wallet.setCurrentBalance(wallet.getCurrentBalance() - transaction.getAmount());
        }
        // For other types like transfer, additional logic may be needed
    }

    public boolean delete(String wallet_id, String id) {
        Optional<Wallet> walletOpt = wallRepository.findById(wallet_id);
        if (walletOpt.isPresent()) {
            Wallet wallet = walletOpt.get();
            Optional<Transaction> transactionOpt = transactionRepository.findById(id);
            if (transactionOpt.isPresent()) {
                Transaction transaction = transactionOpt.get();
                // Adjust the wallet balance in the opposite direction of the transaction before deleting it
                adjustWalletBalanceDel(transaction, wallet);

                // Delete the transaction from the repository
                transactionRepository.delete(transaction);

                // Save the updated wallet back to the repository
                wallRepository.save(wallet);

                return true;
            }
        }
        throw new WalletException("Transaction with " + id + " does not exist!");
    }


    private void adjustWalletBalanceDel(Transaction transaction, Wallet wallet) {
        if (transaction.getType() == 1) {  // Income
            wallet.setCurrentBalance(wallet.getCurrentBalance() - transaction.getAmount());
        } else if (transaction.getType() == 2) {  // Expense
            wallet.setCurrentBalance(wallet.getCurrentBalance() + transaction.getAmount());
        }
        // For other types like transfer, additional logic may be needed
    }
}
