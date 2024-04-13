package com.faward.walletapp.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {
    @Id
    private String id;

    private double amount;

    private String description;

    private int type;//1 for income,2 for expence
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date transactionDate;

    private int purpose;

    @DBRef
    //@JsonIgnore
    private Wallet wallet;

}
