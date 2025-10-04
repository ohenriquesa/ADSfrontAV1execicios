const POKEMONS = [
    { nome: "BULBASAUR", tipo: "grass, poison", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { nome: "CHARMANDER", tipo: "fire", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { nome: "SQUIRTLE", tipo: "water", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
    { nome: "PIKACHU", tipo: "electric", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
    { nome: "BUTTERFREE", tipo: "bug, flying", imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" }
];

const Botao = document.getElementById('botao');
const Nome = document.getElementById('pokemonNome');
const Imagem = document.getElementById('pokemonImagem');
const Tipo = document.getElementById('pokemonTipo');

Botao.addEventListener('click', mostrarPokemonAleatorio);

function mostrarPokemonAleatorio() {
    const pokemon = POKEMONS[Math.floor(Math.random() * POKEMONS.length)];
    
    Nome.textContent = pokemon.nome;
    Imagem.src = pokemon.imagem;
    Tipo.textContent = "Tipo: " + pokemon.tipo;
}

mostrarPokemonAleatorio();