package br.com.code.sinqia.service;

import java.text.ParseException;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.code.sinqia.domain.Admin;
import br.com.code.sinqia.domain.Role;
import br.com.code.sinqia.domain.enums.Perfil;
import br.com.code.sinqia.repository.AdminRepository;
import br.com.code.sinqia.repository.RoleRepository;

@Service
public class DBService {
	@Autowired
	private BCryptPasswordEncoder encoder;

	@Autowired
	AdminRepository adminRepo;
	@Autowired
	AdminService adminService;

	@Autowired
	RoleRepository roleRepo;
	
	public void instantiateTestDatabase() throws ParseException {	
		if (roleRepo.count() < 1) {
			Role role1 = new Role();
			Role role2 = new Role();
			role1.setNomeRole("ROLE_ADMIN");
			role2.setNomeRole("ROLE_CLIENTE");
			roleRepo.saveAll((Arrays.asList(role1, role2)));
		}

		if (adminRepo.count() < 1) {
			Admin admin = new Admin(null, "sinqia@gmail.com",encoder.encode("123456"), null,"Carlos");
			admin.setRoles(Arrays.asList(roleRepo.findBynomeRole(Perfil.ADMIN.getDescricao())));
			adminService.insert(admin);
		}
	}
}
