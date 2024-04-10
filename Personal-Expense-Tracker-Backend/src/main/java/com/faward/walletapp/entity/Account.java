package com.faward.walletapp.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Account {
    @Id
    private String id;

    private String firstname;

    private String lastname;

    private String email;

    private String username;
    private String password;

//    @DBRef
//    private Wallet wallet;

}
