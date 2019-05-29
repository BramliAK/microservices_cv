package com.chercheoffre.microservice_cv.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by ahmed on 20/10/2018.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Cv {

    @Id
    @GeneratedValue
    private Long id;
    private String specialite;
    private String exerience;
    private String skills;
    private Long iduser;

}
