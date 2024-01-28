package com.faward.walletapp.repository;

import com.faward.walletapp.entity.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WallRepository extends JpaRepository<Wallet,Long> {
    List<Wallet>findAllByOrderByPriority();
}
