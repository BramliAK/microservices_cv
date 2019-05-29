package com.chercheoffre.microservice_cv.beans;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Created by ahmed on 20/10/2018.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RoleBean {
    private Long id;
    private String role;
}
