  describe('Testes de Login Quero Passagem', () => {
  //ignora o erro do sendmessage
  Cypress.on('uncaught:exception', (err, runnable) => {   
  //dizer pro cypress nao falhar no teste
  if (err.message.includes("reading 'sendMessage'")) {
  //impede o cypress de falhar
  return false;
    }
  return true;
  });

  it('deve exibir uma mensagem de erro ao errar a senha', () => {

  //pagina inicial
    cy.visit('https://queropassagem.com.br/', { timeout: 60000 });

  //clica em entrar
    cy.contains('button', 'ENTRAR').first().click();

  //insere o email
    cy.get('input[name="log_email"]', { timeout: 60000 })
      .type('amoravicentinagata@gmail.com');

  //clica na label
    cy.contains('label', 'Código da compra ou sua senha').click();

  //insere a senha errada
    cy.get('input[name="log_acesso"]', { timeout: 60000 })
      .type('amorafeia'); 

  //clica em continuar
    cy.get('.continuarLogin').click();

  //verifica a mensagem de erro (se está correta)
    cy.get('.box-modal-branco').should('be.visible');
    
  //procura a mensagem dentro do modal
    cy.get('.box-modal-branco')
      .contains('Insira uma combinação de e-mail e senha válidos.');
  });

});
