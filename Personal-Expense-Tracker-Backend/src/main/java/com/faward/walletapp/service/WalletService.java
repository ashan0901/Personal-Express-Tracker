package com.faward.walletapp.service;

import com.faward.walletapp.entity.Wallet;
import com.faward.walletapp.exception.WalletException;
import com.faward.walletapp.repository.WallRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WalletService {

    @Autowired
    private WallRepository wallRepository;

    public List<Wallet> getAll(){
        return  wallRepository.findAllByOrderByPriority()  ;//TODO
    }
    public  Wallet getById(Long id){
        Optional<Wallet> wallet = wallRepository.findById(id);
        if(wallet.isPresent()){
            return wallet.get();
        }
        //TODO
        throw new WalletException("Wallet with "+id+" does not exists!");
    }
    public Wallet createOrUpdate(Wallet wallet){
        if(wallet.getId()==null){
            wallRepository.save(wallet);
        }else{
            wallRepository.save(wallet);
        }
        return wallet;
    }
    public  boolean delete(Long id){
        Optional<Wallet> wallet = wallRepository.findById(id);
        if(wallet.isPresent()){
            wallRepository.delete(wallet.get());
            return true;
        }
        //TODO
        throw new WalletException("Wallet with "+id+" does not exists!");
    }
}
