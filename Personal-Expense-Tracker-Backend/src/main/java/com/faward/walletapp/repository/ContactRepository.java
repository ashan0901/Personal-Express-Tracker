package com.faward.walletapp.repository;

import com.faward.walletapp.entity.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository<Contact, String> {
    // Custom database queries can be defined here
}
