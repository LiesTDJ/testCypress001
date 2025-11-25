describe('Simuler un prospect pour my.clubfibre.com/fibre_secure2', () => {
  const phoneNumber = '06' + Math.floor(Math.random() * 10000000000).toString();
  beforeEach(() => {
    cy.visit('https://my.clubfibre.com/fibre_secure2')
  })
  it('fai_actuel', () => {
    cy.get('#choice-item-operateur_actuel-5').click();
    cy.get('#choice-item-insatisfaction_operateur_actuel-0').click();
    cy.get('#choice-item-tarif_operateur_actuel-2').click();
    cy.get('#choice-item-engagement-0').click();
    cy.get('#address-input-adresse_postale').type('123 Rue de la Paix, 75000 Paris, France');
    cy.get('.suggestion-item').contains('Rue de la Paix').click();
    cy.get('.items-center').contains('Suivant').click();

    cy.get('#normal-input-prenom').type('Jacques');
    cy.get('#normal-input-nom').type('Dupont');
    cy.get('.items-center').contains('Suivant').click();

    cy.get('#email-input-email').type('jacques.dupont@hipto.com');
    cy.get('#telephone-input-telephone').type(phoneNumber);
    cy.get('#partners-consent').click();
    cy.get('.inline-flex').contains('Voir mon offre Fibre').click();

    cy.contains(`Nous avons trouvé l'offre parfaite pour vous !`).should('be.visible');
  })
})