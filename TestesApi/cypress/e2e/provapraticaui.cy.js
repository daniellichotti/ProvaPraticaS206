/// <reference types="cypress"/>

describe('Criando cenpario de teste para os campos de reserva do site automationintesting.online', ()=>{

  it('Caso de teste 1: Verificando se o botão Today retorna o dia e mes correto', () => {
    acessarSite()
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(1)').click()
    cy.get('.rbc-now > .rbc-button-link').should('contain.text', verDia())
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(1)').click()
    cy.get('.rbc-toolbar-label').should('contain.text', verMes())
  })
  it('Caso de teste 2: Verificando se o botão Back volta 1 mes', () => {
    acessarSite()
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(1)').click()
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(2)').click()
    cy.get('.rbc-toolbar-label').should('contain.text', antMes())
  })
  it('Caso de teste 3: Verificando se o botão Next adianta 1 mes', () => {
    acessarSite()
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(3)').click()
    cy.get('.rbc-toolbar-label').should('contain.text', proxMes())
    
  })

  it('Caso de teste negativo 1: Testando reservar uma data sem inserir informações', () => {
    acessarSite()
    cy.get('.col-sm-4 > .btn-outline-primary').click()
    cy.get('.alert').should('contain.text', 'não deve ser nulo')
  })

  it('Caso de teste negativo 2: Testando reservar uma data inserindo um email invalido', () => {
    acessarSite()
    cy.get('.room-booking-form > .form-control').type('João')
    cy.get('.col-sm-4 > :nth-child(2) > .form-control').type('Andrade')
    cy.get('.col-sm-4 > :nth-child(3) > .form-control').type('joaoandrade')
    cy.get('.col-sm-4 > :nth-child(4) > .form-control').type('35999999999')
    cy.get('.col-sm-4 > .btn-outline-primary').click()
    cy.get('.alert').should('contain.text', 'deve ser um endereço de e-mail bem formado')
  })

  it('Caso de teste negativo 3: Testando entrar com texto ao invés de número de telefone', () => {
    acessarSite()
    cy.get('.room-booking-form > .form-control').type('João')
    cy.get('.col-sm-4 > :nth-child(2) > .form-control').type('Andrade')
    cy.get('.col-sm-4 > :nth-child(3) > .form-control').type('joaoandrade@gmail.com')
    cy.get('.col-sm-4 > :nth-child(4) > .form-control').type('numerodeteljoao')
    cy.get('.col-sm-4 > .btn-outline-primary').click()
    cy.get('.alert').should('exist')
  })
})

function acessarSite(){
  cy.visit('https://automationintesting.online/')
  cy.get('.col-2 > .btn').click()
  cy.get(':nth-child(4) > :nth-child(1) > .row > .col-sm-7 > .btn').click()
  cy.get(':nth-child(4) > .rbc-row-content > .rbc-row > :nth-child(4) > .rbc-button-link').click()
}

function verDia(){
  let dia = new Date().getDate().toString()

  return dia
}

function verMes(){
  
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const d = new Date();
  let name = month[d.getMonth()];

  return name
}

function proxMes(){
  
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const d = new Date();
  let name = month[d.getMonth()+1];

  return name
}

function antMes(){
  
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const d = new Date();
  let name = month[d.getMonth()-1];

  return name
}