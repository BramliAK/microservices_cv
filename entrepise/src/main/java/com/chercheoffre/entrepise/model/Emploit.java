package com.chercheoffre.entrepise.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Emploit {

    @Id
    @GeneratedValue
    private Long idemploit;
    private String titre;
    private String description;
    private String type;
    private String nomentrepise;
    private Long idClient;

}
