package br.com.code.sinqia.dto;

import java.io.Serializable;

import javax.validation.constraints.NotEmpty;

import br.com.code.sinqia.domain.Admin;

public class AdminNewDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	@NotEmpty(message = "Informe o nome")
	private String nome;
	@NotEmpty(message = "Informe o E-mail")
	private String email;
	@NotEmpty(message = "Insira uma Senha")
	private String senha;

	public AdminNewDTO() {

	}

	public AdminNewDTO(Admin obj) {
		super();
		this.id = obj.getId();
		this.nome = obj.getNome();
		this.email = obj.getEmail();
		this.senha = obj.getSenha();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

}
