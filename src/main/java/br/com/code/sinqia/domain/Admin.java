package br.com.code.sinqia.domain;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("ADMIN")
public class Admin extends Usuario {
	private static final long serialVersionUID = 1L;
	private String nome;

	public Admin() {

	}

	public Admin(Integer id, String email, String senha, String profile, String nome) {
		super(id, email, senha, profile);
		this.nome = nome;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}
