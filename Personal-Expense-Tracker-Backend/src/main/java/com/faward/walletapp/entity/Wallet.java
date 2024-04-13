package com.faward.walletapp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;


@Data
@NoArgsConstructor
@AllArgsConstructor

public class Wallet {
@Id
    private String id;

    private String name;

    private String accountNumber;

    private String description;

    private Integer priority; //1=High 2=Medium 3=Low

    private Double limit;
    private Double currentBalance = 0.0 ;

    @DBRef
    private Account account;

    //private List<Transaction> transactions;
    //public void  setBalance(){this.currentBalance = (double) 0;}
}
