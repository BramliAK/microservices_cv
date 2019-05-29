package com.chercheoffre.microservice_cv.Controllers;

import com.chercheoffre.microservice_cv.Proxies.MicroserviceUserProxy;
import com.chercheoffre.microservice_cv.beans.UserBean;
import com.chercheoffre.microservice_cv.dao.CvRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by ahmed on 20/10/2018.
 */

@RestController
@RequestMapping("/cv")
public class CvController {

   /* @Autowired
    MicroserviceUserProxy userProxy;*/

    @Autowired
    CvRepository repository;

    @GetMapping("/")
    private String test(){
        /*userProxy.listusersd();
         return userProxy.getuserd(1L);*/
        return "true";

    }







}
