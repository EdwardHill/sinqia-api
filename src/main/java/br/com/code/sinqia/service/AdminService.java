package br.com.code.sinqia.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.code.sinqia.domain.Admin;
import br.com.code.sinqia.domain.enums.Perfil;
import br.com.code.sinqia.dto.AdminNewDTO;
import br.com.code.sinqia.dto.AdminUpdateDTO;
import br.com.code.sinqia.repository.AdminRepository;
import br.com.code.sinqia.repository.RoleRepository;
import br.com.code.sinqia.security.JWTUtil;
import br.com.code.sinqia.service.exception.AuthorizationException;
import br.com.code.sinqia.service.exception.DatabaseException;
import br.com.code.sinqia.service.exception.ObjectNotFoundException;
import br.com.code.sinqia.service.exception.ResourceNotFoundException;
import br.com.code.sinqia.service.exception.UniqueFieldException;

@Service
public class AdminService {
	@Autowired
	private AdminRepository repo;
	@Autowired
	private RoleRepository roleRepo;
	@Autowired
	private HttpServletRequest request;
	@Autowired
	private JWTUtil jwtUtil;
	@Autowired
	private BCryptPasswordEncoder encoder;
	@Value("${img.user.profile}")
	private String picture;
	
	public List<Admin> findAll() {
		return repo.findAll();
	}

	public Admin find(Integer id) {
		Optional<Admin> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! id: " + id + "Tipo: " + Admin.class.getName()));
	}

	public Admin findByMySelf() {
		Integer idUsuario = jwtUtil.getIdDoUsuario(jwtUtil.getTokenFromRequest(request));
		return repo.findById(idUsuario).orElseThrow(() -> new ObjectNotFoundException("Usuario não encontrado"));
	}

	public Admin insert(Admin newObj) {
		Admin obj = repo.findByEmail(newObj.getEmail());
		if (obj != null && newObj.getId() != obj.getId()) {
			throw new UniqueFieldException("O e-mail já existe no sistema. Por favor, tente outro");
		}
		newObj.setRoles(Arrays.asList(roleRepo.findBynomeRole(Perfil.ADMIN.getDescricao())));
		newObj.setId(null);
		newObj.setProfile(picture);
		return repo.save(newObj);
	}

	public Admin update(Admin obj) {
		Optional<Admin> usuario = repo.findById(jwtUtil.getIdDoUsuario(jwtUtil.getTokenFromRequest(request)));
		if (obj.getId() != usuario.get().getId() && !usuario.get().userHasAuthority(Perfil.ADMIN.getDescricao())) {
			throw new AuthorizationException("Acesso Negado, contate o Adiministrador!");
		}
		Admin upObj = find(obj.getId());
		updateData(upObj, obj);
		return repo.save(upObj);
	}

	public void delete(Integer id) {
		find(id);
		try {
			repo.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException(e.getMessage());
		}
	}

	public Page<Admin> findPage(Integer page, Integer linesPerPage, String orderBy, String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Sort.Direction.valueOf(direction), orderBy);
		return repo.findAll(pageRequest);
	}

	public Admin fromDto(AdminNewDTO objDto) {
		Admin obj = new Admin(objDto.getId(), objDto.getEmail(), encoder.encode(objDto.getSenha()), objDto.getNome(),
				null);
		return obj;
	}

	public Admin fromDto(AdminUpdateDTO objDto) {
		Admin obj = new Admin(objDto.getId(), objDto.getEmail(), objDto.getSenha(), objDto.getNome(),
				objDto.getProfile());
		return obj;
	}

	public void updateData(Admin upObj, Admin obj) {
		if (obj.getNome() != null) {
			upObj.setNome(obj.getNome());
		}
		if (obj.getEmail() != null) {
			upObj.setEmail(encoder.encode(obj.getSenha()));
		}
		if (obj.getSenha() != null) {
			upObj.setSenha(obj.getSenha());
		}
	}

	

}
