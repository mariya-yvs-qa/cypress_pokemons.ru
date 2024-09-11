import * as data from "../helpers/default_data.json"

describe('Тестирование staya', function () {

    it('search something', function () {
       cy.visit('https://pokemonbattle.ru/');
       cy.get(':nth-child(1) > .auth__input').type(data.login);
       cy.get('#password').type(data.password);
       cy.get('.auth__button').click();
       cy.wait(2000);
       cy.get('.header__container > .header__id').click({ force: true });
       cy.get('[href="/premium"]').should('be.visible');
       cy.get('[href="/shop"]').click();
       cy.get(':nth-child(12) > .shop__button').click({ force: true }); //выбор аватара
       cy.wait(2000);
       cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5432 5432 5432 5430'); //номер карты
       cy.get(':nth-child(1) > .pay_base-input-v2').type('09.34'); //дата
       cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //cvv
       cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Mary Berry'); //имя
       cy.get('.pay-btn').click();      
       cy.get('#cardnumber').type('56456');
       cy.get('.payment__submit-button').click();
       cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); 
})
})