package com.faward.walletapp.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String accountNumber;

    private String description;

    private Integer priority; //1=High 2=Medium 3=Low
    private Double currentBalance;
    @PrePersist

    public void  setBalance(){
        this.currentBalance = (double) 0;
    }
}
