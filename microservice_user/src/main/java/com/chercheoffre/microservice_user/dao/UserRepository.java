package com.chercheoffre.microservice_user.dao;

import com.chercheoffre.microservice_user.model.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * Created by ahmed on 20/10/2018.
 */
@CrossOrigin("*")
@RepositoryRestResource
public interface UserRepository extends JpaRepository<AppUser,Long> {

    public AppUser findBynom(String nom);
    public AppUser findByEmail(String email);
    public AppUser findByEmailAndPassword(String email,String pa);
}
