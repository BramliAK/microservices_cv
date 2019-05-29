package com.chercheoffre.microservice_user.model;



import javax.persistence.*;


@Entity
public class Cv {



    @Id
    @GeneratedValue
    private Long id;
    private String nom;
    private String description;
    private String cvpdf;
    private Long iduser;

    public Cv(String nom, String description, String cvpdf, Long iduser) {
        this.nom = nom;
        this.description = description;
        this.cvpdf = cvpdf;
        this.iduser = iduser;
    }

    public Cv() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCvpdf() {
        return cvpdf;
    }

    public void setCvpdf(String cvpdf) {
        this.cvpdf = cvpdf;
    }

    public Long getIduser() {
        return iduser;
    }

    public void setIduser(Long iduser) {
        this.iduser = iduser;
    }
}
