export type pokemonModel = {
    name: string,
    id: number,
    types: [ { type: { name: string, }, } ],
    sprites: {  front_default: string   }
};

export async function getPokemonData(pokemonId:number) {
    var pokemon: pokemonModel = {
        name: '',
        id: 1,
        types: [ { type: { name: '', }, } ],
        sprites: {  front_default: '' }
    };
    
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((resposta) => resposta.json())
    .then((data) => {
        pokemon = data;
    }); 
    return pokemon;
}