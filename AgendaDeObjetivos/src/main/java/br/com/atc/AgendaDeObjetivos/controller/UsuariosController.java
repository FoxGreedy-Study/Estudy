package br.com.atc.AgendaDeObjetivos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.atc.AgendaDeObjetivos.domain.Usuario;
import br.com.atc.AgendaDeObjetivos.repository.UsuariosRepository;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UsuariosController {
	
	@Autowired
	UsuariosRepository usuariosRepository;
	
	@GetMapping
	public ResponseEntity<List<Usuario>> getAll(){
		return new ResponseEntity<>(usuariosRepository.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/{name}/name")
	public ResponseEntity<Usuario> getOneByName(@PathVariable("name") String name){
		return new ResponseEntity<>(usuariosRepository.findByNome(name), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Usuario> postOne (@RequestBody Usuario usuario){
		return new ResponseEntity<>(usuariosRepository.save(usuario), HttpStatus.CREATED);
	}
	
}
