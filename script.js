//your code here
describe('Semantic HTML Table and Media List', () => {
    const baseUrl = 'http://localhost:3000'; // Adjust base URL as needed

    it('Check table structure and contents', () => {
        cy.visit(baseUrl + "/main.html");
        cy.get('table').within(() => {
            cy.get('thead th').should('have.length', 2);
            cy.get('tbody').within(() => {
                cy.get('tr').should('have.length', 3);
                cy.get('td').should('have.length', 6);
            });
        });
    });

    it('Check list of medias', () => {
        cy.visit(baseUrl + "/main.html");
        cy.contains('List of medias');
        cy.get('ol li').should('have.length', 3);

        cy.get('ol li:first img')
            .should('have.attr', 'src', "https://picsum.photos/id/123/200/300")
            .and('have.attr', 'alt');

        cy.get('ol li:nth-child(2) video source')
            .should('have.attr', 'src', "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");

        cy.get('ol li:last audio source')
            .should('have.attr', 'src', "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg");
    });
});
