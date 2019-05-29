package com.chercheoffre.microservice_cv.Proxies;

import com.chercheoffre.microservice_cv.beans.UserBean;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;


@FeignClient(name = "microservice-users",url = "localhost:8088")
public interface MicroserviceUserProxy{

   @GetMapping(value = "/appUsers")
    List<UserBean> listusersd();

   @GetMapping(value = "/appUsers/{id}")
    UserBean getuserd(@PathVariable("id") Long id);
}
