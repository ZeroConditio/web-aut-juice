import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton(){
    return cy.get('#navbarAccount');
  }

  static get loginButton(){
    return cy.get('#navbarLoginButton');
  }

  static get userProfileButton(){
    return cy.get("button[aria-label='Go to user profile']");
    // return cy.get("button[aria-label='Go to user profile']").find('XXXXX');
  }

  static get searchIcon(){
    return cy.get('#searchQuery')
  }

  static get searchField(){
    return cy.get('#searchQuery input');
  }

  static get productNames(){
    return cy.get('[class="mat-grid-tile ng-star-inserted"]').find('[class="info-box"]');
  }

  static get productBoxInfo(){
    return cy.get('mat-dialog-content .details-row');
  }

  static get closeButton(){
    return cy.get('.close-dialog');
  }

  static get expandComments(){
    return cy.get('[class="mat-expansion-panel-header-title"]');
  }

  static get comment(){
    return cy.get('.comment');
  }

  static get reviewField(){
    return cy.get('textarea[placeholder="What did you like or dislike?"]');
  }

  static get submitButton(){
    return cy.get('#submitButton');
  }

  static get cardAmount(){
    return cy.get('.mat-mdc-select-min-line');
  }

  static get cardAmountSelect() {
    return cy.get('.mat-mdc-paginator-page-size-select');
  }

  static get changeCardAmount(){
    return cy.get('mat-option');
  }
}
