package br.com.code.sinqia.service;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.code.sinqia.domain.Usuario;
import br.com.code.sinqia.repository.UserSSRepository;
import br.com.code.sinqia.service.exception.ObjectNotFoundException;

@Service
public class AuthService {
		
	@Autowired
	private UserSSRepository userRepository;

	@Autowired
	private BCryptPasswordEncoder pe;

	
	  @Autowired private EmailService emailService;
	 
	
	private Random rand = new Random();


	public void sendNewPassword(String email) {

		Usuario usuario = userRepository.findByEmail(email);
		if (usuario == null) {
			throw new ObjectNotFoundException("Email não encontrado");
		}
			String newPass = newPassword();
			usuario.setSenha(pe.encode(newPass));
			userRepository.save(usuario);
			emailService.sendNewPasswordEmail(usuario,newPass);
		
	}

	private String newPassword() {
		char[] vet = new char[5];
		for (int i = 0; i < 5; i++) {
			vet[i] = randomChar();
		}
		return new String(vet);
	}

	private char randomChar() {
		int opt = rand.nextInt(3);
		if (opt == 0) { // gera um digito
			return (char) (rand.nextInt(10) + 48);
		} else if (opt == 1) { // gera letra maiuscula
			return (char) (rand.nextInt(26) + 65);
		} else { // gera letra minuscula
			return (char) (rand.nextInt(26) + 97);
		}
	}

}
