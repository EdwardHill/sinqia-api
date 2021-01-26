package br.com.code.sinqia.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import br.com.code.sinqia.domain.Usuario;
import br.com.code.sinqia.repository.UserSSRepository;
import br.com.code.sinqia.security.JWTUtil;
import br.com.code.sinqia.service.exception.ObjectNotFoundException;
@Service
public class UserServiceSS {
	
	@Autowired
	private UserSSRepository usuRepo;
	@Autowired
	private HttpServletRequest request;
	@Autowired
	private JWTUtil jwtUtil;
	
	public Usuario findByMySelf() {
		Integer idUsuario = jwtUtil.getIdDoUsuario(jwtUtil.getTokenFromRequest(request));
		return usuRepo.findById(idUsuario).orElseThrow(() -> new ObjectNotFoundException("Usuario não encontrado"));
	}

	public static Usuario authenticated() {
		try {
			return (Usuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		}
		catch (Exception e) {
			return null;
		}
	}
}
