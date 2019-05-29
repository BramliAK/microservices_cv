package com.chercheoffre.zullserveur;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@SpringBootApplication
@EnableZuulProxy
@EnableDiscoveryClient
public class ZullServeurApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ZullServeurApplication.class, args);
	}

	@Override
	public void run(String... strings) throws Exception {


	}
}
