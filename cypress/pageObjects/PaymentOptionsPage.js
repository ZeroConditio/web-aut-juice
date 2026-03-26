import { BasePage } from "./basePage";

export class PaymentsOptionPage extends BasePage{
    
    static get paymentType() {
        return cy.get('.mat-mdc-cell');
    }

    static get continueButton(){
        return cy.get('[aria-label="Proceed to review"]');
    }
}