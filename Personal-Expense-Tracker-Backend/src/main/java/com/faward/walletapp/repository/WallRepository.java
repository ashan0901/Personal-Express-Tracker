package com.faward.walletapp.repository;

import com.faward.walletapp.entity.Wallet;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WallRepository extends MongoRepository<Wallet,Long> {
    List<Wallet>findAllByOrderByPriority();
}
