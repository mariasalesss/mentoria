describe('Testes de Login Quero Passagem', () => {

  it('o usuário faz login com sucesso', () => {

    //pagina inicial
    cy.visit('https://queropassagem.com.br/', { timeout: 60000 });

    //clica no botão de entrar pra fazer login
    cy.contains('button', 'ENTRAR').first().click();

    //verifica o titulo do site
    cy.title().should('match', /QueroPassagem/);

    //preenche o email
    cy.get('input[name="log_email"]', { timeout: 60000 })
      .type('amoravicentinagata@gmail.com');
 
    cy.get('label[for="nome"]').click();

    //prenche senha
    cy.get('input[name="log_acesso"]', { timeout: 60000 })
      .type('Amoravicentina123');

    // clica no botão para fazer login
    cy.contains('Continuar com email').click();
  });

});
