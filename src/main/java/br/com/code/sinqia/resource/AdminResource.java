package br.com.code.sinqia.resource;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.code.sinqia.domain.Admin;
import br.com.code.sinqia.dto.AdminDTO;
import br.com.code.sinqia.dto.AdminNewDTO;
import br.com.code.sinqia.dto.AdminUpdateDTO;
import br.com.code.sinqia.service.AdminService;
@RestController
@RequestMapping(value = "/admin")
public class AdminResource {
	@Autowired
	private AdminService service;

	@GetMapping
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<List<AdminDTO>> findAll() {
		List<Admin> list = service.findAll();
		List<AdminDTO> listDTO = list.stream().map(obj -> new AdminDTO(obj)).collect(Collectors.toList());
		return ResponseEntity.ok().body(listDTO);
	}

	@GetMapping(value = "/{id}")
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Admin> find(@PathVariable Integer id) {
		Admin obj = service.find(id);
		return ResponseEntity.ok().body(obj);
	}

	@PostMapping
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Void> insert(@Valid @RequestBody AdminNewDTO objDTO) {
		Admin obj = service.fromDto(objDTO);
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@GetMapping(value = "/self")
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Admin> findByMySelf() {
		Admin obj = service.findByMySelf();
		return ResponseEntity.ok().body(obj);
	}
	
	@PutMapping(value = "/{id}")
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Void> update(@Valid @RequestBody AdminUpdateDTO objDTO, @PathVariable Integer id) {
		objDTO.setId(id);
		Admin obj = service.fromDto(objDTO);
		obj = service.update(obj);
		return ResponseEntity.noContent().build();
	}

	@DeleteMapping(value = "/{id}")
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

	@GetMapping(value = "/page")
	@PreAuthorize("hasAnyRole('ADMIN')")
	public ResponseEntity<Page<AdminDTO>> findPage(
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "24") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "nome") String orderBy,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction) {
		Page<Admin> list = service.findPage(page, linesPerPage, orderBy, direction);
		Page<AdminDTO> listDto = list.map(obj -> new AdminDTO(obj));
		return ResponseEntity.ok().body(listDto);
	}
}
