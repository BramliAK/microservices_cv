package com.chercheoffre.entrepise.service;

/**
 * Created by ahmed on 11/12/2018.
 */
public interface Sendmail {
    public void sendSimpleMessage(String to, String subject, String text);
}
