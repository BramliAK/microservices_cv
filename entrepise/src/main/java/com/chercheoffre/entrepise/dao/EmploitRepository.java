package com.chercheoffre.entrepise.dao;

import com.chercheoffre.entrepise.model.Emploit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@RepositoryRestResource
public interface EmploitRepository extends JpaRepository<Emploit,Long> {

    public List<Emploit> findByIdClient(Long id);
}
