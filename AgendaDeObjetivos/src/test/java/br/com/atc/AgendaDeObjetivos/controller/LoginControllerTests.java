package br.com.atc.AgendaDeObjetivos.controller;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


public class LoginControllerTests {

	private LoginController controller;
	
	
//	O before ajuda a rodar um setup
	@Before
	public void setup() {
		controller = new LoginController();
	}
	
	@Test
	public void loginComSucesso() {
		ResponseEntity<String> resposta = controller.validarLogin(new Credenciais("123", "123"));

		assertEquals(HttpStatus.OK, resposta.getStatusCode());
		assertEquals("Sucesso", resposta.getBody());
	}

	@Test
	public void loginComFalha() {
		LoginController controller = new LoginController();
		
		ResponseEntity<String> resposta = controller.validarLogin(new Credenciais("Login", "Senha"));

		assertEquals(HttpStatus.UNAUTHORIZED, resposta.getStatusCode());
		assertEquals("Erro", resposta.getBody());
	}
	
	

}
