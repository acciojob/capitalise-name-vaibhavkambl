//your JS code here. If required.
function convertToUpperCase() {
	var inputField = document.getElementById('fname');
	inputField.value = inputField.value.toUpperCase();
}
body: "() => { 
  cy.visit(baseUrl); 
  cy.get('#fname').type('jOhN dOe').blur(); 
  cy.get('#fname').should('have.value', 'JOHN DOE'); 
}"