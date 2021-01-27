package br.com.code.sinqia.security;

import java.util.Collection;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import br.com.code.sinqia.domain.Usuario;

public class UserSS implements UserDetails {
	private static final long serialVersionUID = 1L;
	private Usuario usuario;
	private String username ;
	private String password;

	Set<GrantedAuthority> authorities = null;
	
	public Usuario getUser() {
		return usuario;
	}

	public void setUser(Usuario usuario) {
		this.usuario = usuario;
	}

	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(Set<GrantedAuthority> authorities) {
		this.authorities = authorities;
	}

	public String getPassword() {
		return this.password;
	}
	
	public String getUsername() {
		return username;
	}
	public boolean isAccountNonExpired() {
		return usuario.isAccountNonExpired();
	}

	public boolean isAccountNonLocked() {
		return usuario.isAccountNonLocked();
	}

	public boolean isCredentialsNonExpired() {
		return usuario.isCredentialsNonExpired();
	}

	public boolean isEnabled() {
		return usuario.isEnabled();
	}

}
