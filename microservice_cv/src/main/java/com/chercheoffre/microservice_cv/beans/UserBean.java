package com.chercheoffre.microservice_cv.beans;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.Collection;

/**
 * Created by ahmed on 20/10/2018.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserBean {
    private Long id;
    private String nom;
    private String email;
    private String password;
    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<RoleBean> role=new ArrayList<>();
}
