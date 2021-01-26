package br.com.code.sinqia.service.exception;

public class AuthorizationException extends  RuntimeException{
	private static final long serialVersionUID = 1L;
	
	public AuthorizationException(String msg) {
		super(msg);
	}
	public AuthorizationException(String msg, Throwable cause) {
		super(msg,cause);
	}
	

}
