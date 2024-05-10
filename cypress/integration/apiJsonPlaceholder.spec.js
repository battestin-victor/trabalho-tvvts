const { describe } = require("mocha")

describe('Teste da API JSONPlaceholder', () => {
    it('Verifica se a rota /posts retorna dados', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.length).to.be.greaterThan(0)
        })
    })
  })

describe('POST em Klingon', () => {
  it('cria um novo post', () => {
    const body = {
      title: 'ghIlab',
      body: 'jaD tlhInganpu u tlhInganpu!',
      userId: 1,
    };

    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: body,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => {
      expect(response.status).to.equal(201);
    });
  });
});


describe('PUT em Klingon', () => {
  it('atualiza um post existente', () => {
    const updatedPost = {
      id: 1,
      title: 'ghIlab',
      body: 'QeHchumeH quvHamoHlaH QeHchumeH qu ghorDaq QottaHvIS DuHmey chenmoHmeH mIwDaj. rojmo tIqwIjDaq u mInDuwIje.',
      userId: 1,
    };

    cy.request({
      method: 'PUT',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
      body: updatedPost,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});