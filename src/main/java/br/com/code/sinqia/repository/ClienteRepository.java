package br.com.code.sinqia.repository;

import javax.transaction.Transactional;

import br.com.code.sinqia.domain.Cliente;

@Transactional
public interface ClienteRepository extends PessoaBaseRepository<Cliente> {
	public Cliente findByEmail(String email);
	

}
