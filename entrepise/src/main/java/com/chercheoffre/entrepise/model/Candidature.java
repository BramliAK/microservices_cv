package com.chercheoffre.entrepise.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Candidature {


    @Id
    @GeneratedValue
    private Long id;
    private Long idemploit;
    private String description;
    private Long idclient;
    private Long idcv;

}
