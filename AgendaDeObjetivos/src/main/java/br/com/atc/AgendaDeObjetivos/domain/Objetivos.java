package br.com.atc.AgendaDeObjetivos.domain;

import java.time.LocalDate;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Objetivos {

	@Id
	@JsonProperty
	@GeneratedValue
	private String id;
	
	@JsonProperty
	private String titulo;
	
	@JsonProperty
	private String descricao;
	
	@JsonProperty
	private LocalDate dataMaximaParaExecucao;
	
	public Objetivos() {}
	
	public Objetivos(String titulo, String descricao, LocalDate dataMaximaParaExecucao) {
		this.titulo = titulo;
		this.descricao = descricao;
		this.dataMaximaParaExecucao = dataMaximaParaExecucao;
	}
	
	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public LocalDate getDataMaximaParaExecucao() {
		return dataMaximaParaExecucao;
	}

	public void setDataMaximaParaExecucao(LocalDate dataMaximaParaExecucao) {
		this.dataMaximaParaExecucao = dataMaximaParaExecucao;
	}

	@Override
	public String toString() {
		return "Objetivo [titulo=" + titulo + ", descricao=" + descricao + ", dataMaximaParaExecucao="
				+ dataMaximaParaExecucao + "]";
	}

	public boolean ate(LocalDate data) {
		return dataMaximaParaExecucao.isBefore(data) || dataMaximaParaExecucao.isEqual(data);
	}

	
}
