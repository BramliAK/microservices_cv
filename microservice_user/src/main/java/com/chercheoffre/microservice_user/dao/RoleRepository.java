package com.chercheoffre.microservice_user.dao;

import com.chercheoffre.microservice_user.model.AppRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * Created by ahmed on 20/10/2018.
 */
@CrossOrigin("*")
@RepositoryRestResource
public interface RoleRepository extends JpaRepository<AppRole,Long> {
    public AppRole findByRole(String role);
}
