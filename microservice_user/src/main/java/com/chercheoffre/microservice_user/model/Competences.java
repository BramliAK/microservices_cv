package com.chercheoffre.microservice_user.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;
import java.util.Set;


@Entity
public class Competences {

    @Id
    @GeneratedValue
    private Long id;
    private String libeller;

    @ManyToMany(cascade =  { CascadeType.ALL })
    @JoinTable(name = "cv_competence",
            joinColumns = @JoinColumn(name = "cv_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "competences_id",
                    referencedColumnName = "id"))
    private Set<Cv> cv;

    public Competences(String libeller) {
        this.libeller = libeller;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLibeller() {
        return libeller;
    }

    public void setLibeller(String libeller) {
        this.libeller = libeller;
    }

    public Set<Cv> getCv() {
        return cv;
    }

    public void setCv(Set<Cv> cv) {
        this.cv = cv;
    }
}
