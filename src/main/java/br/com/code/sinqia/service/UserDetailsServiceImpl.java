package br.com.code.sinqia.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import br.com.code.sinqia.domain.Usuario;
import br.com.code.sinqia.repository.UserSSRepository;
import br.com.code.sinqia.service.exception.UsernameNotFoundException;

@Service
@Transactional
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserSSRepository repo;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Usuario usuario = repo.findByEmail(email);
		if (usuario == null) {
			throw new UsernameNotFoundException("Usuario não encontrado! "+email);
		}
		return new User(usuario.getUsername(), usuario.getPassword(), true,true,true,true,usuario.getAuthorities());
	}
}
