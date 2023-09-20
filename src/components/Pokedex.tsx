import { useState } from "react";
import { pokemonModel } from "../utilities/GetPokemonData";

import PokedexTop from "./PokedexTop"
import { CaseBody } from "./CaseBody"
import PokemonDetails from "./PokemonDetails";

export function Pokedex() {
    const [pokemonData, setPokemonData] = useState<pokemonModel>({
        name: 'bulbasaur',
        id: 1,
        types: [{ type: { name: 'grass', }, }],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
        stats: [{ base_stat: 45 }, { base_stat: 49 }, { base_stat: 49 }, { base_stat: 65 }, { base_stat: 65 }, { base_stat: 45 }]
    });

    function handlePrevPokemon(pokemon: pokemonModel) {
        setPokemonData(pokemon);
    }

    function handleNextPokemon(pokemon: pokemonModel) {
        setPokemonData(pokemon);
    }

    function handleSearchPokemon(pokemon: pokemonModel) {
        setPokemonData(pokemon);
    }

    return (
        <div className="flex bg-red-500 rounded-l-md">
            <div className='flex items-center text-center'>
                <div className='bg-red-500 case-3d'>
                    <div className=''>
                        <div className='bg-red-500 rounded-sm justify-center only:p-6 case-internal'>
                            <PokedexTop></PokedexTop>
                            <CaseBody pokemonData={pokemonData} handlePrevPokemon={handlePrevPokemon} handleNextPokemon={handleNextPokemon} handleSearchPokemon={handleSearchPokemon} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <PokemonDetails
                    hp={pokemonData.stats[0].base_stat}
                    atk={pokemonData.stats[1].base_stat}
                    def={pokemonData.stats[2].base_stat}
                    sp_atk={pokemonData.stats[3].base_stat}
                    sp_def={pokemonData.stats[4].base_stat}
                    spd={pokemonData.stats[5].base_stat}
                />
            </div>
        </div>

    )
}