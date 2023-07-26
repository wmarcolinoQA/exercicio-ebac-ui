///<reference types="cypress" />

context("Funcionalidade Login", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Deve Fazer login com sucesso", () => {
    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get("#password").type("teste@teste.com");
    cy.get(".woocommerce-form > .button").click();

    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá,"
    );
  });

  it("Deve exibir uma mensagem de erro ao inserir usuário invalido", () => {
    cy.get("#username").type("testeqaebac@teste.com");
    cy.get("#password").type("teste@teste.com");
    cy.get(".woocommerce-form > .button").click();

    cy.get(".woocommerce-error > li").should(
      "contain",
      "Endereço de e-mail desconhecido."
    );
  });

  it("Deve exibir uma mensagem de erro ao inserir senha invalida", () => {
    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get("#password").type("123456");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error > li").should("contain", "Perdeu a senha?");
  });
});