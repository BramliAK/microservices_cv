package com.chercheoffre.microservice_user.Controllers;

import com.chercheoffre.microservice_user.dao.CvRepository;
import com.chercheoffre.microservice_user.model.Cv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.*;
import java.util.List;
import java.util.Optional;

/**
 * Created by ahmed on 03/12/2018.
 */
@RestController
public class CvRestController {

    @Autowired
    private CvRepository cvRepository;

    @CrossOrigin("*")
    @PostMapping(value = "/doUpload",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseBody
    public String createVente(@RequestParam("file") MultipartFile file, @RequestParam("nom") String nom, @RequestParam("description") String description, @RequestParam("iduser") String iduser) throws IOException {

        File convertFile=new File("D:\\gi3\\projet cv\\frontcv\\src\\assets\\pdf\\"+file.getOriginalFilename());
        convertFile.createNewFile();
        FileOutputStream fout=new FileOutputStream(convertFile);
        fout.write(file.getBytes());
        fout.close();
        System.out.println(file.getOriginalFilename());
        Cv cv =new Cv(nom,description,file.getOriginalFilename(), Long.parseLong(iduser));

        cvRepository.save(cv);


        return "rr";
    }

    @CrossOrigin("*")
    @GetMapping("/cvid/{iduser}")
    public List<Cv> Listcv(@PathVariable Long iduser){

        return cvRepository.findByIduser(iduser);
    }

    @CrossOrigin("*")
    @PostMapping(value = "/doUpload/{id}",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public boolean update(@PathVariable Long id, @RequestParam("file") MultipartFile file, @RequestParam("nom") String nom, @RequestParam("description") String description, @RequestParam("iduser") String iduser) throws IOException {

        File convertFile=new File("D:\\gi3\\projet cv\\frontcv\\src\\assets\\pdf\\"+file.getOriginalFilename());
        convertFile.createNewFile();
        FileOutputStream fout=new FileOutputStream(convertFile);
        fout.write(file.getBytes());
        fout.close();
        System.out.println(file.getOriginalFilename());
        Cv cv =new Cv(nom,description,file.getOriginalFilename(), Long.parseLong(iduser));
        cv.setId(id);
        cvRepository.save(cv);



        return true;
    }

}

