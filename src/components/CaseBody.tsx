import { useState } from "react";
import { getPokemonData, pokemonModel } from "../utilities/GetPokemonData";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import TypeDisplay from "./CaseBottom/TypeDisplay";
import Display from "./PokemonDisplay/Display";
import BottomButtons from "./CaseBottom/BottomButtons";
import PokemonDetails from "./PokemonDetails";

export function CaseBody() {
    const [pokemonData, setPokemonData] = useState<pokemonModel>({
        name: 'bulbasaur',
        id: 1,
        types: [{ type: { name: 'grass', }, }],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
        stats: [{ base_stat: 0 }, { base_stat: 0 }, { base_stat: 0 }, { base_stat: 0 }, { base_stat: 0 }, { base_stat: 0 }]
    });
    const [isPokemonShown, setIsPokemonShown] = useState(true);

    const handleShowPokemon = () => {
        setIsPokemonShown(!isPokemonShown);
    }

    async function handlePrevPokemon() {
        if (pokemonData.id > 1) {
            await getPokemonData(pokemonData.id - 1)
                .then((data) => {
                    setPokemonData(data);
                });
        }
    }

    async function handleNextPokemon() {
        await getPokemonData(pokemonData.id + 1)
            .then((data) => {
                setPokemonData(data);
            });
    }

    return (
        <div>
            <div>
                <Display imgUrl={pokemonData.sprites.front_default} pokemonName={pokemonData.name} pokemonId={pokemonData.id} pokemonType={pokemonData.types[0].type.name} isPokemonShown={isPokemonShown} handleShowPokemon={handleShowPokemon}></Display>
                <div className="grid grid-cols-2 mt-4 gap-4">
                    <TypeDisplay typeName={pokemonData.types[0].type.name} isShowType={isPokemonShown} />
                    <div className="flex flex-1 gap-4 justify-center rounded-lg px-0 py-1 border-2 border-black bg-gray-300">
                        <button onClick={handlePrevPokemon}>
                            <ArrowCircleLeftIcon className="text-gray-900" fontSize="large" />
                        </button>
                        <button onClick={handleNextPokemon}>
                            <ArrowCircleRightIcon className="text-gray-900" fontSize="large" />
                        </button>
                    </div>
                </div>
                <div>
                    <BottomButtons></BottomButtons>
                </div>
            </div>
            <div>
                <PokemonDetails
                    hp={pokemonData.stats[0].base_stat}
                    atk={pokemonData.stats[1].base_stat}
                    def={pokemonData.stats[2].base_stat}
                    sp_atk={pokemonData.stats[3].base_stat}
                    sp_def={pokemonData.stats[4].base_stat}
                    spd={pokemonData.stats[5].base_stat}>
                </PokemonDetails>
            </div>
        </div>
    )
}