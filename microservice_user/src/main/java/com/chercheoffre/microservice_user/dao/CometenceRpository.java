package com.chercheoffre.microservice_user.dao;

import com.chercheoffre.microservice_user.model.Competences;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource
public interface CometenceRpository extends JpaRepository<Competences,Long> {



}
