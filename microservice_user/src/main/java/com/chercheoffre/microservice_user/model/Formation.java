package com.chercheoffre.microservice_user.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Formation {

    @Id
    @GeneratedValue
    private Long id;
    private String ecole;
    private String dipome;
    private String domaine;
    private String duree;
    private String description;


    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "cv_formation",
            joinColumns = @JoinColumn(name = "cv_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "formation_id",
                    referencedColumnName = "id"))
    private List<Cv> cv= new ArrayList<>();
}
