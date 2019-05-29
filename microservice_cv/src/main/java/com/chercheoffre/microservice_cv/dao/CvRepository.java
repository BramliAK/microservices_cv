package com.chercheoffre.microservice_cv.dao;

import com.chercheoffre.microservice_cv.model.Cv;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by ahmed on 20/10/2018.
 */
@RepositoryRestResource
public interface CvRepository extends JpaRepository<Cv,Long>{

}
