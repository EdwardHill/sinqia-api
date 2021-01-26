package br.com.code.sinqia.domain.enums;

public enum UF {

	AC(0,"Acre"),
	AL(1,"Alagoas"),
	AM(2,"Amazonas"),
	AP(3,"Amapá"),
	BA(4,"Bahia"),
	CE(5,"Ceará"),
	DF(6,"Distrito Federal"),
	ES(7,"Espirito Santo"),
	GO(8,"Goias"),
	MA(9,"Maranhão"),
	MG(10,"Minas Gerais"),
	MS(11,"Mato Grosso Sul"),
	MT(12,"Mato Grosso"),
	PA(13,"Pará"),
	PB(14,"Paraiba"),
	PE(15,"Pernanbuco"),
	PI(16,"Piaui"),
	PR(17,"Parana"),
	RJ(18,"Rio de Janeiro"),
	RN(19,"Rio Grande do Norte"),
	RO(20,"Rondônia"),
	RR(21,"Roraima"),
	RS(22,"Rio Grande do Sul"),
	SC(23,"Santa Catarina"),
	SE(24,"Sergipe"),
	SP(25,"São Paulo"),
	TO(26,"Tocantins"),
	
	INDEFINIDO(27,"indefinido");
	
	private int cod;
	private  String estado;
	
	
	UF(int cod, String estado) {
		this.estado = estado;
		this.cod = cod;
	}
	
	public int getCod() {
		return cod;
	}
	public String getEstado() {
		return estado;
	}
	public static UF toEnum(Integer cod) {
        if (cod == null) {
            return null;
        }

        for (UF x : UF.values()) {
            if (cod.equals(x.getCod())) {
                return x;
            }
        }
        throw new IllegalArgumentException("Id inválido: " + cod);
    }

}
