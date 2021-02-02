package br.com.code.sinqia.service;

import java.util.Date;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import br.com.code.sinqia.domain.Cliente;
import br.com.code.sinqia.domain.Usuario;

public abstract class AbstractEmailService implements EmailService {

	@Value("${default.sender}")
	private String sender;

	@Autowired
	private TemplateEngine templateEngine;

	@Autowired
	private JavaMailSender javaMailSender;

	/*-------------Início  para boas-vindas--------------------- */

	protected String htmlFromTemplateWelcomeEmail(String text, Cliente obj) {
		Context context = new Context();
		context.setVariable("text", text);
		context.setVariable("obj", obj);
		return templateEngine.process("email/welcomeEmail", context);
	}

	protected MimeMessage welcomeEmail(Cliente obj) throws MessagingException {
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper mmh = new MimeMessageHelper(mimeMessage, true);
		String text = "";
		String subject = "Plano de previdência - Sinqia";
		mmh.setTo(obj.getEmail());
		mmh.setFrom(sender);
		mmh.setSubject(subject);
		mmh.setSentDate(new Date(System.currentTimeMillis()));
		mmh.setText(htmlFromTemplateWelcomeEmail(text, obj), true);
		return mimeMessage;
	}

	public void sendWelcomeEmail(Cliente obj) {

		try {
			MimeMessage mm = welcomeEmail(obj);
			sendHtmlEmail(mm);
		} catch (MessagingException e) {
			e.printStackTrace();
		}

	}
	/*---------------Fim para boas-vindas--------------------- */

	/*---------------Início Forgot Password--------------------*/

	protected String htmlFromTemplateForgotPassword(String newPass, Usuario obj) {

		Context context = new Context();
		context.setVariable("pass", newPass);
		context.setVariable("obj", obj);
		return templateEngine.process("email/forgot", context);
	}

	protected MimeMessage prepareNewPasswordEmail(Usuario obj, String newPass) throws MessagingException {
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper mmh = new MimeMessageHelper(mimeMessage, true);
		String subject = "Sua nova senha - Sinquia";
		mmh.setTo(obj.getEmail());
		mmh.setFrom(sender);
		mmh.setSubject(subject);
		mmh.setSentDate(new Date(System.currentTimeMillis()));
		mmh.setText(htmlFromTemplateForgotPassword(newPass, obj), true);
		return mimeMessage;
	}

	public void sendNewPasswordEmail( Usuario obj,String newPass) {

		try {
			MimeMessage mm = prepareNewPasswordEmail(obj,newPass);
			sendHtmlEmail(mm);
		} catch (MessagingException e) {
			e.printStackTrace();
		}

	}
}
/*---------------Fim Forgot Password--------------------*/
