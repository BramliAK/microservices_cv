package com.chercheoffre.entrepise.controllers;

import com.chercheoffre.entrepise.dao.CandidatureRepository;
import com.chercheoffre.entrepise.dao.EmploitRepository;
import com.chercheoffre.entrepise.model.Candidature;
import com.chercheoffre.entrepise.model.Emploit;
import com.chercheoffre.entrepise.model.Mails;
import com.chercheoffre.entrepise.service.Sendmail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by ahmed on 27/11/2018.
 */
@CrossOrigin("*")
@RestController

public class EmploitController {

    @Autowired
    private EmploitRepository emploitRepository;
    @Autowired
    private CandidatureRepository candidatureRepository;

    @Autowired
    private Sendmail sendmail;

    @GetMapping("/emploit/iduser/{id}")
    public List<Emploit> getemploit(@PathVariable Long id ){

       return emploitRepository.findByIdClient(id);
    }

    @GetMapping("/emploit")
    public List<Emploit> getallemploit(){

        return emploitRepository.findAll();
    }

    @GetMapping("/nbrcondidature/{id}")
    public Long getallemploit(@PathVariable Long id){

        return candidatureRepository.countByIdemploit(id);
    }

    @GetMapping("/condidaturebyidoffre/{id}")
    public List<Candidature> getcondi(@PathVariable Long id){
        return candidatureRepository.findByIdemploit(id);
    }

    @PostMapping("/sendmail")
    public Boolean sendmail(@Valid @RequestBody Mails mails){

        sendmail.sendSimpleMessage(mails.getTouser(),mails.getSubjects(),mails.getTexts());
        System.out.println("ddddddddddddddddddddddddd");
        return true;
    }

}
