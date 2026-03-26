import { BasePage } from "./basePage";

export class DeliveryMethodPage extends BasePage{
    
    static get deliveryType() {
        return cy.get('.mat-column-Name');
    }

    static get continueButton(){
        return cy.get('[aria-label="Proceed to delivery method selection"]');
    }
}