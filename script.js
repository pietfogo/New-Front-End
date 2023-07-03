// Função para fazer a solicitação HTTP para a PokeAPI
/*function fetchPokemonData() {
    var pokemonValue = document.getElementById("input-pesq").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}/`)
      .then(response => response.json())
      .then(data => {
        // Processar os dados recebidos
        const pokemonAbilities = data.abilities;
    
        // Gerar o HTML para exibir as habilidades do Pokémon
        const abilitiesHTML = pokemonAbilities.map(ability => {
          return `<p>${ability.ability.name}</p>`;
        }).join('');
    
        // Exibir as habilidades do Pokémon na página
        const pokemonAbilitiesContainer = document.getElementById('pokemonAbilities');
        pokemonAbilitiesContainer.innerHTML = abilitiesHTML;
      })
      .catch(error => {
        console.log('Ocorreu um erro:', error);
      });
  }*/


// Função para fazer a solicitação HTTP para a PokeAPI

  var main2 = document.getElementById("pokedex-main2")
  function criarBlocoPoke() {
    var newDiv = document.createElement("div")
    newDiv.id = "novaDiv"
    var newDiv4 = document.createElement("div")
    newDiv4.id = "newddvv"
    main2.appendChild(newDiv)
    var newDiv2 = document.createElement("div")
    var newDiv3 = document.createElement("div")
    newDiv2.appendChild(newDiv4)
    newDiv2.id = "novaDiv2"
    newDiv3.id = "novaDiv3"
    newDiv.appendChild(newDiv2)
    newDiv.appendChild(newDiv3)
    var imgElement = document.createElement("img")
    imgElement.id = "imgElement"
    var pokemonValue = "pikachu"
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}/`)
      .then(response => response.json())
      .then(data => {
        // Obter a URL da imagem do Pokémon
        const pokemonImageURL = data.sprites.front_default;
        
        // Definir a URL da imagem como o atributo src
        imgElement.src = pokemonImageURL;
      })
      newDiv4.appendChild(imgElement)
  }
  
  
  