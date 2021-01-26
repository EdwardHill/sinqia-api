package br.com.code.sinqia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.code.sinqia.domain.Usuario;
@Repository
public interface UserSSRepository extends JpaRepository<Usuario, Integer>, PagingAndSortingRepository<Usuario, Integer> {
	Usuario findByEmail(String email);
	
}
