package br.com.atc.AgendaDeObjetivos.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.atc.AgendaDeObjetivos.domain.Objetivos;

public interface ObjetivosRepository extends JpaRepository<Objetivos, Long> {

}
