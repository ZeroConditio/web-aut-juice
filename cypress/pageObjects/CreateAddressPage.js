import { BasePage } from "./basePage";

export class CreateAddressPage extends BasePage{

    static get CountryField(){
        return cy.get('#mat-input-2');
    }

    static get NameField(){
        return cy.get('#mat-input-3');
    }

    static get MobileField(){
        return cy.get('#mat-input-4');
    }

    static get ZipField(){
        return cy.get('#mat-input-5');
    }

    static get AddressField(){
        return cy.get('#address');
    }

    static get CityField(){
        return cy.get('#mat-input-7');
    }

    static get StateField(){
        return cy.get('#mat-input-8');
    }

    static get SubmitButton(){
        return cy.get('#submitButton');
    }

    static get addressCheckField(){
        return cy.get('.mat-column-Address');
    }
}