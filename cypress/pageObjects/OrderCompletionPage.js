import { BasePage } from "./basePage";

export class OrderCompletionPage extends BasePage{
    
    static get confirmationValidation() {
        return cy.get('[class="confirmation"]');
    }
}