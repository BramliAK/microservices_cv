package com.chercheoffre.microservice_user;

import com.chercheoffre.microservice_user.Service.AccountService;
import com.chercheoffre.microservice_user.dao.CometenceRpository;
import com.chercheoffre.microservice_user.dao.CvRepository;
import com.chercheoffre.microservice_user.dao.ExperienceRepository;
import com.chercheoffre.microservice_user.dao.FormationRepository;
import com.chercheoffre.microservice_user.model.AppRole;
import com.chercheoffre.microservice_user.model.AppUser;
import com.chercheoffre.microservice_user.model.Competences;
import com.chercheoffre.microservice_user.model.Cv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@SpringBootApplication
@EnableDiscoveryClient
public class MicroserviceUserApplication  implements CommandLineRunner {

	@Autowired
	private AccountService accountService;

	@Bean
	public BCryptPasswordEncoder getpasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	public static void main(String[] args) {
		SpringApplication.run(MicroserviceUserApplication.class, args);



	}

	@Override
	public void run(String... args) throws Exception {

		/*accountService.saveUser(new AppUser("admin","admin","admin@gmail.com","1234","ROLE_ADMIN"));
		accountService.saveUser(new AppUser("khalil","bramli","khalil@gmail.com","1234","ROLE_ENR"));
		accountService.saveUser(new AppUser("user","user","user@gmail.com","1234","ROLE_USER"));
		/*accountService.addRoleToUser("admin@gmail.com","ROLE_ADMIN");
		accountService.addRoleToUser("admin@gmail.com","ROLE_USER");
		accountService.addRoleToUser("user@gmail.com","ROLE_USER");
		accountService.addRoleToUser("khalil@gmail.com","ROLE_USER");
		/*accountService.saveRole(new AppRole("ROLE_ADMIN"));
		accountService.saveRole(new AppRole("ROLE_USER"));
		accountService.saveRole(new AppRole("ROLE_ENREPISE"));*/
	/*	accountService.saveUser(new AppUser("admin","admin","admin@gmail.com","1234",null));
		accountService.saveUser(new AppUser("khalil","bramli","khalil@gmail.com","1234",null));
		accountService.saveUser(new AppUser("user","user","user@gmail.com","1234",null));
		accountService.addRoleToUser("admin@gmail.com","ROLE_ADMIN");
		accountService.addRoleToUser("admin@gmail.com","ROLE_USER");
		accountService.addRoleToUser("user@gmail.com","ROLE_USER");
		accountService.addRoleToUser("khalil@gmail.com","ROLE_USER");*/


	}
}
