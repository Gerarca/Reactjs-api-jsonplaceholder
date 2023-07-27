import App from "../../src/App"

describe('main.cy.jsx', () => {
  it('playground', () => {
    cy.viewport(1200,750)
     cy.mount(<App />)
  })
})