export type pokemonModel = {
    name: string,
    id: number,
    types: [ { type: { name: string,}, } ],
    sprites: {  front_default: string   },
    stats: [{base_stat: number},{base_stat: number},{base_stat: number},{base_stat: number},{base_stat: number},{base_stat: number}]
};

export async function getPokemonData(pokemonId:number) {
    var pokemon: pokemonModel = {
        name: '',
        id: 1,
        types: [ { type: { name: '', }, } ],
        sprites: {  front_default: '' },
        stats: [{base_stat: 0},{base_stat: 0},{base_stat: 0},{base_stat: 0},{base_stat: 0},{base_stat: 0}]
    };
    
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((resposta) => resposta.json())
    .then((data) => {
        pokemon = data;
    });
    return pokemon;
}