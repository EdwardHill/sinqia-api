package br.com.code.sinqia.dto;

import java.io.Serializable;

public class PasswordDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String password;
	private String newPassword;
	
	private PasswordDTO() {
		
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	
	
	
	
}
