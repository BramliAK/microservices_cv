package com.chercheoffre.microservice_cv;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients("com.chercheoffre")
public class MicroserviceCvApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicroserviceCvApplication.class, args);
	}
}
