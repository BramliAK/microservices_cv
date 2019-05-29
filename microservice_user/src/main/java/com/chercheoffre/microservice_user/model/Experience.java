package com.chercheoffre.microservice_user.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Experience {

    @Id
    @GeneratedValue
    private Long id;
    private String poste;
    private String entreprise;
    private String Lieu;
    private String duree;
    private String secteur;
    private String description;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "cv_experience",
            joinColumns = @JoinColumn(name = "cv_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "experience_id",
                    referencedColumnName = "id"))
    private List<Cv> cv;

}
