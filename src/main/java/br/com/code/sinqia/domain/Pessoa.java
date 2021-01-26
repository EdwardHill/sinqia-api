package br.com.code.sinqia.domain;

import java.util.Date;

import javax.persistence.*;
import javax.persistence.AttributeOverrides;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.validation.constraints.NotEmpty;

@Entity
public abstract class Pessoa extends Usuario {
	private static final long serialVersionUID = 1L;
	@NotEmpty
	private String nome;
	private Date nascimento;
	private String cpf;
	@Embedded
	@AttributeOverrides({ 
		  @AttributeOverride( name = "numero", column = @Column(name = "numero_telefone"))
		})
	private Telefone telefone;
	@Embedded
	@AttributeOverrides({ 
		  @AttributeOverride( name = "numero", column = @Column(name = "numero_endereco"))
		})
	private Endereco endereco;

	public Pessoa() {

	}

	public Pessoa(Integer id, String email, String senha, String profile, String nome,
			Date nascimento,String cpf,  Telefone telefone, Endereco endereco) {
		super(id, email, senha, profile);
		this.nome = nome;
		this.nascimento = nascimento;
		this.cpf = cpf;
		this.telefone = telefone;
		this.endereco = endereco;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getNascimento() {
		return nascimento;
	}

	public void setNascimento(Date nascimento) {
		this.nascimento = nascimento;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
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


	
}
