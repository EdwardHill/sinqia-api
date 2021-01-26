package br.com.code.sinqia.domain.enums;

public enum TipoTelefone {

	CELULAR("Celular"),
	FIXO("Fixo"),
	INDEFINIDO("indefinido");
	
	private final String tipo;

	private TipoTelefone(String tipo) {
		this.tipo = tipo;
	}

	public String getTipo() {
		return tipo;
	}
}
