import { BasePage } from "./basePage";

export class SelectAddressPage extends BasePage{
    
    static get addressButton() {
        return cy.get('.cdk-column-Country');
    }

    static get continueButton(){
        return cy.get('[aria-label="Proceed to payment selection"]');
    }

}