import { BasePage } from "./basePage";

export class SavedPaymentMethodsPage extends BasePage{
    
    static get AddNewButton() {
        return cy.get('[class="mat-expansion-panel-header-title"]');
    }

    static get NameField(){
        return cy.get('#mat-input-2');
    }

    static get CardField(){
        return cy.get('#mat-input-3');
    }

    static get ExpiryMonthField(){
        return cy.get('select').first();
    }

    static get ExpiryYearField(){
        return cy.get('select').eq(1);
    }

    static get submitButton(){
        return cy.get('#submitButton');
    }

    static get verifyCard(){
        return cy.get('.cdk-column-Number');
    }

}