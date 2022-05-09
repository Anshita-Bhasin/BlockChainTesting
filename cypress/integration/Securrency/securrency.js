import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'


Given('I open dapp', () => {
    cy.visit('https://securrencydapp.vercel.app/add-citizen')
});

And('I click add citizen button', () => {
    cy.get(button['type="button"]').click();
});

Then('I verify the logo', ()=> {
cy.get('img[data-nimg="intrinsic"]')
.should('contain', 'Securrency')

});

Then('I should see Id',()=>{
    cy.get('thead>tr>th:contains("id")').should('contain','ID')

});
Then('I should see name',()=> {
    cy.get('thead>tr>th:contains("name")').should('contain','NAME')
});
Then('I should see age',()=>{
    cy.get('thead>tr>th:contains("age")').should('contain','AGE')
});

Then('I should see city', ()=> {
    cy.get('thead>tr>th:contains("city")').should('contain','CITY')
});


Given('I enter name',()=> {
    cy.get('input[id="name-input"]').type('TestAB')
});

Given('I enter age',()=> {
    cy.get('input[id="age-input"]').type('21')
});
Given('I enter city',()=>{
    cy.get('input[id="city-input"]').type('dubai')
});
Given('I add somenotes',()=>
{
    cy.get('textarea[id="someNote-input"]').type('notes description')
});
And('I click on AddCitizen',()=>
{
    cy.get('button[type="submit"]').click();
});
