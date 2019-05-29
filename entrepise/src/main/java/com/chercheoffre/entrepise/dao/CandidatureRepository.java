package com.chercheoffre.entrepise.dao;

import com.chercheoffre.entrepise.model.Candidature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@RepositoryRestResource
public interface CandidatureRepository extends JpaRepository<Candidature, Long> {

    public Long countByIdemploit(Long id);
    public List<Candidature> findByIdemploit(Long id);
}
