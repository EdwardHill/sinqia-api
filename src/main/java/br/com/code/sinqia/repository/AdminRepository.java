package br.com.code.sinqia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import br.com.code.sinqia.domain.Admin;
@Repository
public interface AdminRepository  extends JpaRepository<Admin, Integer>,PagingAndSortingRepository<Admin,Integer>{
	Admin findByEmail(String email);
}
