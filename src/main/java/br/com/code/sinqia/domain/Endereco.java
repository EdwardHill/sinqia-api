package br.com.code.sinqia.domain;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import br.com.code.sinqia.domain.enums.UF;



@Embeddable 
public class Endereco implements Serializable {
	private static final long serialVersionUID = 1L;
	private String cep;
	@NotEmpty(message = "O campo cidade não pode estar vázio.")
	private String cidade;
	@NotNull(message = "Escolha pelo menos uma das opções.")
	private UF uf;
	@NotEmpty(message = "O campo bairro não pode estar vázio.")
	private String bairro;
	@NotEmpty(message = "O campo rua não pode estar vázio.")
	private String rua;
	@NotEmpty(message = "O campo numero não pode estar vázio.")
	private String numero;
	private String complemento;
	
	public Endereco() {

	}
	
	public Endereco( String cep, String cidade, UF uf, String bairro, String rua, String numero,
			String complemento ) {
		super();	
		this.cep = cep;
		this.cidade = cidade;
		this.uf = uf;
		this.bairro = bairro;
		this.rua = rua;
		this.numero = numero;
		this.complemento = complemento;
		
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public UF getUf() {
		return uf;
	}

	public void setUf(UF uf) {
		this.uf = uf;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

}


