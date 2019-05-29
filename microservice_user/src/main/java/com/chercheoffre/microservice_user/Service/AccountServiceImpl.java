package com.chercheoffre.microservice_user.Service;

import com.chercheoffre.microservice_user.dao.RoleRepository;
import com.chercheoffre.microservice_user.dao.UserRepository;
import com.chercheoffre.microservice_user.model.AppRole;
import com.chercheoffre.microservice_user.model.AppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * Created by ahmed on 27/11/2018.
 */

@Service
public class AccountServiceImpl implements AccountService{

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    @Override
    public AppUser saveUser(AppUser appUser) {
       /* String hashPW=bCryptPasswordEncoder.encode(appUser.getPassword());
        appUser.setPassword(hashPW);*/
        return userRepository.save(appUser);
    }

    @Override
    public AppRole saveRole(AppRole role) {
        return roleRepository.save(role);
    }

    /*@Override
    public void addRoleToUser(String mail, String rolenom) {
        AppRole role=roleRepository.findByRole(rolenom);
        System.out.println(role.getRole());
        AppUser appUser =userRepository.findByEmail(mail);
        System.out.println(appUser.getEmail());
        appUser.getRole().add(role);
    }*/
    @Override
    public AppUser findUserBymail(String mail) {
        return userRepository.findByEmail(mail);
    }
}
