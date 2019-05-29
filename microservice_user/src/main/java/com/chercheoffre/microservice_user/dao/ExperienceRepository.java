package com.chercheoffre.microservice_user.dao;

import com.chercheoffre.microservice_user.model.Experience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ExperienceRepository extends JpaRepository<Experience,Long> {


}
