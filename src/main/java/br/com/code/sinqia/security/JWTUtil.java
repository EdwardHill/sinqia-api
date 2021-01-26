package br.com.code.sinqia.security;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import br.com.code.sinqia.config.SecurityConstants;
import br.com.code.sinqia.domain.Usuario;
import br.com.code.sinqia.repository.UserSSRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JWTUtil {

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private UserSSRepository usuarioRepository;

	public String generateToken(String username) {
		Usuario usuario = usuarioRepository.findByEmail(username);
		return Jwts.builder().setSubject(username).claim("id", usuario.getId()).claim("Role", usuario.getAuthorities())
				.setExpiration(new Date(System.currentTimeMillis() + SecurityConstants.EXPIRATION_TIME))
				.signWith(SignatureAlgorithm.HS512, SecurityConstants.SECRET).compact();
	}
	
	public Integer getIdDoUsuario(String token) {
        Claims claims = getClaims(token);
        if (claims != null) {
            return Integer.parseInt(claims.get("id").toString());
        }
        return null;
    }
 
	public boolean tokenValido(String token) {
		Claims claims = getClaims(token);
		if (claims != null) {
			String username = claims.getSubject();
			Date expirationDate = claims.getExpiration();
			Date now = new Date(System.currentTimeMillis());
			if (username != null && expirationDate != null && now.before(expirationDate)) {
				return true;
			}
		}
		return false;
	}
	
	public String getUsername(String token) {
		Claims claims = getClaims(token);
		if (claims != null) {
			return claims.getSubject();
		}
		return null;
	}

	private Claims getClaims(String token) {
		try {
			return Jwts.parser().setSigningKey(SecurityConstants.SECRET).parseClaimsJws(token).getBody();
		} catch (Exception e) {
			return null;
		}
	}
	 public String getTokenFromRequest(HttpServletRequest request) {
	        return request.getHeader("Authorization").replace("Bearer ", "");
	    }
	
}
