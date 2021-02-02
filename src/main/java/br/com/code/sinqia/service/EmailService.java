package br.com.code.sinqia.service;

import javax.mail.internet.MimeMessage;

import org.springframework.mail.SimpleMailMessage;

import br.com.code.sinqia.domain.Cliente;
import br.com.code.sinqia.domain.Usuario;

public interface EmailService {

	void sendEmail(SimpleMailMessage msg);

	void sendHtmlEmail(MimeMessage msg);

	void sendNewPasswordEmail(Usuario user, String newPass);

	void sendWelcomeEmail(Cliente user);

}
