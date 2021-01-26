package br.com.code.sinqia.domain;

import java.util.Date;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("CLIENTE")
public class Cliente extends Pessoa {
	private static final long serialVersionUID = 1L;
	
	public Cliente() {

	}
	public Cliente(Integer id, String email, String senha, String profile, String nome,
			Date nascimento, String cpf, Telefone telefone, Endereco endereco) {
		super(id, email, senha, profile, nome,nascimento, cpf, telefone, endereco);
		// TODO Auto-generated constructor stub
	}

	
}
