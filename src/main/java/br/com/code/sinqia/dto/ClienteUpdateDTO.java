package br.com.code.sinqia.dto;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import br.com.code.sinqia.domain.Cliente;
import br.com.code.sinqia.domain.Endereco;
import br.com.code.sinqia.domain.Telefone;

public class ClienteUpdateDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer id;
	@NotEmpty(message = "Informe o nome completo!")
	private String nome;
	private String cpf;
	@NotEmpty(message = "Informe o e-mail!")
	@Email
	@Column(unique = true)
	private String email;
	@NotEmpty(message = "Insira uma senha!")
	private String senha;
	private Date nascimento;
	private Telefone telefone;
	private Endereco endereco;
	private String profile;
	
	public ClienteUpdateDTO() {
		
	}
	
	public ClienteUpdateDTO(Cliente obj) {
		super();
		id = obj.getId();
		nome = obj.getNome();
		cpf= obj.getCpf();
		email = obj.getEmail();
		nascimento = obj.getNascimento();
		telefone = obj.getTelefone();
		endereco = obj.getEndereco();
		profile = obj.getProfile();
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

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
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

	public Date getNascimento() {
		return nascimento;
	}

	public void setNascimento(Date nascimento) {
		this.nascimento = nascimento;
	}

	public Telefone getTelefone() {
		return telefone;
	}

	public void setTelefone(Telefone telefone) {
		this.telefone = telefone;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

}
