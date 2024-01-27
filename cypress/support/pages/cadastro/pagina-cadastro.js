
const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro(){
        cy.visit('http://localhost:4200');
        cy.get(el.registerNow).click();
    }

    preencherFormulario(){
        cy.get(el.email).type(usuario.email);
        cy.get(el.fullName).type(usuario.fullName);
        cy.get(el.registerUserName).type(usuario.userName);
        cy.get(el.registerPassword).type(usuario.password);
    }

    submeterCadastro(){
        cy.get(el.btnRegister).click();
    }
}

    
export default new Cadastro();