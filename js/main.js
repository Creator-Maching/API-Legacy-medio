fetch('https://pokeapi.co/api/v2/type/dragon')
    .then(resposta => resposta.json())
    .then(json => carregaElementosNaPagina(json))
    .catch(e => alert('Ops algo deu errado!'));

function carregaElementosNaPagina(json) {
  const table = document.createElement('table');
    table.className = 'table table-striped table-hover table-danger'
    const tbody = document.createElement('tbody');


  for (let entry of json.pokemon) {
    const pokemon = entry.pokemon;

    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.textContent = pokemon.name;
    td1.className = 'letras'
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    const img = document.createElement('img');
    const id = pokemon.url.split('/').filter(Boolean).pop();
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    img.width = 100;

    td2.appendChild(img);
    tr.appendChild(td2);
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  const resultados = document.querySelector('.resultados');
  resultados.appendChild(table);
};
