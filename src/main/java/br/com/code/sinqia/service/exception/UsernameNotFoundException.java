package br.com.code.sinqia.service.exception;

public class UsernameNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	

    public UsernameNotFoundException(String msg) {
        super(msg);
    }

    public UsernameNotFoundException(String msg, Throwable cause) {
        super(msg, cause);
    }
}
