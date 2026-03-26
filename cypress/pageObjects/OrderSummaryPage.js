import { BasePage } from "./basePage";

export class OrderSummaryPage extends BasePage{
    
    static get placeOrder() {
        return cy.get('#checkoutButton');
    }
}