package br.com.code.sinqia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.code.sinqia.domain.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, String>{
	Role findBynomeRole(String nomeRole);
}
