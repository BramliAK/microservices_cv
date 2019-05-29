package com.chercheoffre.microservice_user.Service;

import com.chercheoffre.microservice_user.model.AppRole;
import com.chercheoffre.microservice_user.model.AppUser;

/**
 * Created by ahmed on 27/11/2018.
 */
public interface AccountService {
    public AppUser saveUser(AppUser appUser);
    public AppRole saveRole(AppRole role);
   // public void addRoleToUser(String usernom, String rolenom);
    public AppUser findUserBymail(String nom);
}
