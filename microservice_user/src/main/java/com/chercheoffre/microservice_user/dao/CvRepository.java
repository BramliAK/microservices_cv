package com.chercheoffre.microservice_user.dao;

import com.chercheoffre.microservice_user.model.Cv;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@RepositoryRestResource
public interface CvRepository extends JpaRepository<Cv,Long> {

    public Cv findByNom(String nom);
    public List<Cv> findByIduser(Long id);
    public  Cv findCvById(Long id);
}