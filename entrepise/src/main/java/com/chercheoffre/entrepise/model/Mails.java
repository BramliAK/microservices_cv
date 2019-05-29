package com.chercheoffre.entrepise.model;

/**
 * Created by ahmed on 11/12/2018.
 */
public class Mails {

    private String touser;
    private String subjects;
    private String texts;

    public Mails() {
    }

    public Mails(String touser, String subjects, String texts) {
        this.touser = touser;
        this.subjects = subjects;
        this.texts = texts;
    }

    public String getTouser() {
        return touser;
    }

    public void setTouser(String touser) {
        this.touser = touser;
    }

    public String getSubjects() {
        return subjects;
    }

    public void setSubjects(String subjects) {
        this.subjects = subjects;
    }

    public String getTexts() {
        return texts;
    }

    public void setTexts(String texts) {
        this.texts = texts;
    }
}
