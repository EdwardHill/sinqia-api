package br.com.code.sinqia.dto;

import java.io.Serializable;

public class EmailSendDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String subject;
	private String text;
	
	public EmailSendDTO(){
		
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	

}
