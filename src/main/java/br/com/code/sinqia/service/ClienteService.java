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

import br.com.code.sinqia.domain.Cliente;
import br.com.code.sinqia.domain.Endereco;
import br.com.code.sinqia.domain.Telefone;
import br.com.code.sinqia.domain.Usuario;
import br.com.code.sinqia.domain.enums.Perfil;
import br.com.code.sinqia.dto.ClienteNewDTO;
import br.com.code.sinqia.dto.ClienteUpdateDTO;
import br.com.code.sinqia.repository.ClienteRepository;
import br.com.code.sinqia.repository.RoleRepository;
import br.com.code.sinqia.repository.UserSSRepository;
import br.com.code.sinqia.security.JWTUtil;
import br.com.code.sinqia.service.exception.AccessDeniedException;
import br.com.code.sinqia.service.exception.AuthorizationException;
import br.com.code.sinqia.service.exception.DatabaseException;
import br.com.code.sinqia.service.exception.ObjectNotFoundException;
import br.com.code.sinqia.service.exception.ResourceNotFoundException;
import br.com.code.sinqia.service.exception.UniqueFieldException;

@Service
public class ClienteService {
	@Autowired
	UserSSRepository usuRepo;
	@Autowired
	ClienteRepository repo;
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
	@Autowired
	private EmailService emailService;

	public List<Cliente> findAll() {
		return repo.findAll();
	}

	public Cliente find(Integer id) {
		Optional<Cliente> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
				"Objeto não encontrado! id: " + id + " Tipo: " + Cliente.class.getName()));
	}

	public Cliente findByMySelf() {
		Integer idCliente = jwtUtil.getIdDoUsuario(jwtUtil.getTokenFromRequest(request));
		return repo.findById(idCliente).orElseThrow(() -> new ObjectNotFoundException("Cliente não encontrado"));
	}

	public Cliente insert(Cliente newObj) {
		Cliente obj = repo.findByEmail(newObj.getEmail());
		if (obj != null && newObj.getId() != obj.getId()) {
			throw new UniqueFieldException("O e-mail já existe no sistema. Por favor, tente outro");
		}
		newObj.setRoles(Arrays.asList(roleRepo.findBynomeRole(Perfil.CLIENTE.getDescricao())));
		newObj.setId(null);
		newObj.setProfile(picture);
		emailService.sendWelcomeEmail(newObj);
		return repo.save(newObj);
	}

	public Cliente update(Cliente obj) {
		Optional<Usuario> usuario = usuRepo.findById(jwtUtil.getIdDoUsuario(jwtUtil.getTokenFromRequest(request)));
		if (obj.getId() != usuario.get().getId() && !usuario.get().userHasAuthority(Perfil.ADMIN.getDescricao())) {
			throw new AuthorizationException("Acesso Negado, contate o Adiministrador!");
		}
		Cliente upObj = find(obj.getId());
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

	public Page<Cliente> findPage(Integer page, Integer linesPerPage, String orderBy, String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Sort.Direction.valueOf(direction), orderBy);
		return repo.findAll(pageRequest);
	}

	public Cliente fromDto(ClienteNewDTO objDto) {
		Endereco endereco = objDto.getEndereco();
		Telefone telefone = objDto.getTelefone();
		Cliente obj = new Cliente(objDto.getId(), objDto.getEmail(), encoder.encode(objDto.getSenha()), null,
				objDto.getNome(), objDto.getNascimento(), objDto.getCpf(), telefone, endereco);
		return obj;
	}

	public Cliente fromDto(ClienteUpdateDTO objDto) {
		Cliente obj = new Cliente(objDto.getId(), objDto.getEmail(), objDto.getSenha(), objDto.getProfile(),
				objDto.getNome(), objDto.getNascimento(), objDto.getCpf(), objDto.getTelefone(), objDto.getEndereco());
		return obj;
	}

	public void updateData(Cliente upObj, Cliente obj) {
		Optional<Usuario> usuario = usuRepo.findById(jwtUtil.getIdDoUsuario(jwtUtil.getTokenFromRequest(request)));

		if (obj.getNome() != null) {
			upObj.setNome(obj.getNome());
		}

		if (obj.getEmail() != null) {
			upObj.setEmail(obj.getEmail());
		}

		if (obj.getSenha() != null) {
			upObj.setSenha(encoder.encode(obj.getSenha()));
		}

		if (obj.getNascimento() != null) {
			upObj.setNascimento(obj.getNascimento());
		}
		if (obj.getCpf() != null) {
			if (!usuario.get().userHasAuthority(Perfil.ADMIN.getDescricao())) {
				throw new AuthorizationException(
						"Acesso Negado, somente o administador pode alterar o cpf, contate o Administrador!");
			} else {
				upObj.setCpf(obj.getCpf());
			}	
		}
		if (obj.getTelefone() != null) {
			upObj.setTelefone(obj.getTelefone());
			if (obj.getTelefone().getDdd() != null) {
				upObj.getTelefone().setDdd(obj.getTelefone().getDdd());
			}
			if (obj.getTelefone().getNumero() != null) {
				upObj.getTelefone().setNumero(obj.getTelefone().getNumero());
			}
			if (obj.getTelefone().getTipoTelefone() != null) {
				upObj.getTelefone().setTipoTelefone(obj.getTelefone().getTipoTelefone());
			}
		}

		if (obj.getEndereco() != null) {
			upObj.setEndereco(obj.getEndereco());

			if (obj.getEndereco().getCep() != null) {
				upObj.getEndereco().setCep(obj.getEndereco().getCep());
			}
			if (obj.getEndereco().getCidade() != null) {
				upObj.getEndereco().setCidade(obj.getEndereco().getCidade());
				;
			}
			if (obj.getEndereco().getUf() != null) {
				upObj.getEndereco().setUf(obj.getEndereco().getUf());
			}
			if (obj.getEndereco().getBairro() != null) {
				upObj.getEndereco().setBairro(obj.getEndereco().getBairro());
			}
			if (obj.getEndereco().getRua() != null) {
				upObj.getEndereco().setRua(obj.getEndereco().getRua());
			}
			if (obj.getEndereco().getNumero() != null) {
				upObj.getEndereco().setNumero(obj.getEndereco().getNumero());
			}
			if (obj.getEndereco().getComplemento() != null) {
				upObj.getEndereco().setComplemento(obj.getEndereco().getComplemento());
			}
		}
	}

	public Cliente updatePassword(String password, String newPassword) {
		Cliente userAuth = findByMySelf();
		if (!encoder.matches(password, userAuth.getPassword())) {
			throw new AccessDeniedException("a senha atual não inválida");
		}
		userAuth.setSenha(encoder.encode(newPassword));
		return repo.save(userAuth);

	}
}
