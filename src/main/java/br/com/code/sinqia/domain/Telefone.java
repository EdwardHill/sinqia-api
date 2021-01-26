package br.com.code.sinqia.domain;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import br.com.code.sinqia.domain.enums.TipoTelefone;

@Embeddable
public class Telefone implements Serializable {
	private static final long serialVersionUID = 1L;	
	@NotEmpty(message = "O campo ddd não pode estar vázio.")
	private String ddd;
	@NotEmpty(message = "O campo número não pode estar vázio.")
	private String numero;

	@NotNull(message = "Escolha pelo menos uma das opções.")
	private TipoTelefone tipoTelefone;

	

	public Telefone() {

	}

	public Telefone( String ddd, String numero, TipoTelefone tipoTelefone) {
		super();
		this.ddd = ddd;
		this.numero = numero;
		this.tipoTelefone = tipoTelefone;
		
	}

	public String getDdd() {
		return ddd;
	}

	public void setDdd(String ddd) {
		this.ddd = ddd;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public TipoTelefone getTipoTelefone() {
		return tipoTelefone;
	}

	public void setTipoTelefone(TipoTelefone tipoTelefone) {
		this.tipoTelefone = tipoTelefone;
	}
}
