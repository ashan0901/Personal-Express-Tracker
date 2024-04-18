package com.faward.walletapp.repository;

import com.faward.walletapp.entity.Account;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends MongoRepository<Account,String> {
     Account findByUsername(String username);


}
