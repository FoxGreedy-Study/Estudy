package br.com.atc.AgendaDeObjetivos.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ch.qos.logback.core.status.Status;

@RestController
public class UsuariosController {

	private ArrayList<Usuario> usuarios;

	public UsuariosController() {
		this.usuarios = obterTodosUsuarios();
	}

	@GetMapping("/usuarios/nome/{nomeDoUsuario}")
	public ResponseEntity<List<Usuario>> obterPorNome(@PathVariable("nomeDoUsuario") String nome) {
		List<Usuario> usuariosPorNome = new ArrayList<Usuario>();
		for (Usuario u : usuarios) {
			if (u.getNome().equals(nome)) {
				usuariosPorNome.add(u);
			}
		}
		if (usuariosPorNome.isEmpty()) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.ok(usuariosPorNome);
	}

	@GetMapping("/usuarios/idade/{idadeDoUsuario}")
	public ResponseEntity<List<Usuario>> obterNome(@PathVariable("idadeDoUsuario") Integer idade) {
		List<Usuario> usuariosPorIdade = new ArrayList<Usuario>();
		for (Usuario u : usuarios) {
			if (u.getIdade() == idade) {
				usuariosPorIdade.add(u);
			}
		}
		if (usuariosPorIdade.isEmpty()) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.ok(usuariosPorIdade);
	}

	private ArrayList<Usuario> obterTodosUsuarios() {
		usuarios = new ArrayList<Usuario>();
		
		usuarios.add(new Usuario("Rodrigo", 20));
		usuarios.add(new Usuario("Joao", 29));
		usuarios.add(new Usuario("Marcos", 18));
		return usuarios;
	}

	@PostMapping("/usuarios")
	public ResponseEntity<Usuario> cadastrarUsuario(@RequestBody Usuario usuario) {
		this.usuarios.add(usuario);
		return ResponseEntity.ok(usuario);		
	}

}
