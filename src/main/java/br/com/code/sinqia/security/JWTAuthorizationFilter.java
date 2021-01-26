package br.com.code.sinqia.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import br.com.code.sinqia.config.SecurityConstants;
import br.com.code.sinqia.service.UserDetailsServiceImpl;
import io.jsonwebtoken.Jwts;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {
	@Autowired
	private UserDetailsServiceImpl userDetailService;
	
	public JWTAuthorizationFilter(AuthenticationManager authenticationManager,
			UserDetailsServiceImpl userDetailService) {
		super(authenticationManager);
		this.userDetailService = userDetailService;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		String header = request.getHeader(SecurityConstants.HEADER_STRING);
		if (header == null || !header.startsWith(SecurityConstants.TOKEN_PREXI)) {
			chain.doFilter(request, response);
			return;
		}
	  UsernamePasswordAuthenticationToken authenticationToken =  getAuthenticationToken(request);
	  SecurityContextHolder.getContext().setAuthentication(authenticationToken);
	  chain.doFilter(request, response);
	}

	private UsernamePasswordAuthenticationToken getAuthenticationToken(HttpServletRequest request) {
		String token = request.getHeader(SecurityConstants.HEADER_STRING);
		if (token == null)
			return null;
		String username = Jwts.parser().setSigningKey(SecurityConstants.SECRET)
				.parseClaimsJws(token.replace(SecurityConstants.TOKEN_PREXI, "")).getBody().getSubject();
		UserDetails userDetails = userDetailService.loadUserByUsername(username);
		return username != null ? new UsernamePasswordAuthenticationToken(username,"", userDetails.getAuthorities())
				: null;
	}
}
