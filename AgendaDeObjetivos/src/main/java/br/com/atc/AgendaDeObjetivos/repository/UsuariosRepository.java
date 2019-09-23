package br.com.atc.AgendaDeObjetivos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.atc.AgendaDeObjetivos.domain.Usuario;

public interface UsuariosRepository extends JpaRepository<Usuario, Long>{

	Usuario findByNome(String nome);
	
}
