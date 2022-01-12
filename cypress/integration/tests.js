// CAN NAVIGATE TO AN EXISTING PAGE

it("Can navigate to an existing page", () => {
    // fails
    // cy.visit("localhost:3333/abou");
  
    // works
    cy.visit("about");
  });
  
  
  
//   // CAN LOOK FOR TEXT
  
//   it("Can look for text", () => {
//     cy.visit("localhost:3333");
  
//     // fails because it's case sensitive
//     // cy.contains("about");
  
//     // succeeds
//     cy.contains("About");
//   })
  
  
  
  // CAN SUBMIT A FORM
  
  it("Can submit a form", () => {
  
    cy.visit("localhost:3333/sign-up");
  
    // // enter email
    // cy.get("form").find("#email").type("helloemail@gmail.com");
  
    // // enter password
    // cy.get("form").find("#password").type("secretpassword");
  
    // submit the form
    cy.get("form").submit();
  })
  
  
  
  // CAN REDIRECT AFTER SUBMITTING FORM
  
  it("Redirects to welcome page", () => {
  
    cy.visit("localhost:3333/sign-up");
  
    // enter email
    cy.get("form").find("#email").type("helloemail@gmail.com");
  
    // enter password
    cy.get("form").find("#password").type("secretpassword");
  
    // submit the form
    cy.get("form").submit();
  
    // checks if after submitting the form it redirects to the welcome page
    cy.url().should("include", "/welcome");
  
  
  })