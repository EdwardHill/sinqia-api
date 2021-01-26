package br.com.code.sinqia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

import br.com.code.sinqia.domain.Usuario;

@NoRepositoryBean
public interface PessoaBaseRepository <T extends Usuario> extends JpaRepository<T,Integer>,PagingAndSortingRepository<T, Integer> {
	Usuario findByEmail(String email);
}
