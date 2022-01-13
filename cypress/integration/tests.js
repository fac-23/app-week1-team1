// CAN NAVIGATE TO AN EXISTING PAGE

it("Can navigate to an existing page", () => {
  // fails
  // cy.visit("localhost:3333/wrong");

  // works
  // cy.visit("about");
  cy.visit("localhost:3333/");
});

//   // CAN LOOK FOR TEXT

//   it("Can look for text", () => {
//     cy.visit("localhost:3333");

//     // fails because it's case sensitive
//     // cy.contains("about");

//     // succeeds
//     cy.contains("About");
//   })

// // CAN SUBMIT A FORM

it("Can submit a form", () => {
  cy.visit("/");

  // // enter name of the user
  cy.get("#submit-post-form")
    .find("input[name='user']")
    .type("Super Luigi");
  cy.contains("Post").click();

  // submit the form

  // cy.get("#submit-post-form").submit();
});

// // CAN REDIRECT AFTER SUBMITTING FORM
it("Can submit and redirects form", () => {
  cy.visit("/");

  // // enter name of the user
  cy.get("#submit-post-form")
    .find("input[name='user']")
    .type("Super Luigi");
  cy.contains("Post").click();
  cy.url().should("include", "/");

  // submit the form

  // cy.get("#submit-post-form").submit();
});

// CAN DELETE A POST
it("Can delete posts from page", () => {
  cy.visit("/");
  cy.get("#Milly")
    .find("#delete-post-btn")
    .click();
  cy.get("#Milly").should("not.exist");
});

// Check user input added to object

// Check message input is working
