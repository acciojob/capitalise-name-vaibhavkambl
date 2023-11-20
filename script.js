//your JS code here. If required.
body: "() => { 
  cy.visit(baseUrl); 
  cy.get('#fname').type('jOhN dOe').blur(); 
  cy.get('#fname').should(($input) => {
    expect($input.val()).to.equal('JOHN DOE');
  }); 
}"