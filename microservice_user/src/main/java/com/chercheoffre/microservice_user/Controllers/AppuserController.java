package com.chercheoffre.microservice_user.Controllers;

import com.chercheoffre.microservice_user.dao.UserRepository;
import com.chercheoffre.microservice_user.model.AppUser;
import com.chercheoffre.microservice_user.model.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Created by ahmed on 27/11/2018.
 */
@RestController
@RequestMapping("/AppUsers")
public class AppuserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @CrossOrigin("*")
    @PostMapping("/login")
    public AppUser createUser(@Valid @RequestBody Login login){

        System.out.println(login.getEmail());
        AppUser user=userRepository.findByEmailAndPassword(login.getEmail(),login.getPassword());
        System.out.println("******************************************");

        System.out.println("******************************************");

        return user;
    }
}
