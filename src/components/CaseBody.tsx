import React, { MouseEventHandler, useCallback, useEffect, useState } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import TypeDisplay from "./CaseBottom/TypeDisplay";
import Display from "./PokemonDisplay/Display";
import BottomButtons from "./CaseBottom/BottomButtons";

type pokemonModel = {
    name: string,
    id: number,
    types: [ { type: { name: string, }, } ],
    sprites: {
        other: {
            official_artwork: {
                front_default: string
            }
        },
        front_default: string,
        back_default: string
    }
};

export function CaseBody() {
    const basePokemon: pokemonModel = {
        name: 'bulbasaur',
        id: 1,
        types: [ { type: { name: 'grass', }, } ],
        sprites: {
            other: {
                official_artwork: {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
                }
            },
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            back_default: ''
        }
    };

    const [pokemonData, setPokemonData] = useState(basePokemon);

    async function handlePrevPokemon() {
        if(pokemonData.id > 1) {
            await getPokemonData(pokemonData.id - 1)
            .then((data) => {
                const returnedPokemon:pokemonModel = data;
                setPokemonData(returnedPokemon);
            });
        }
    }

    async function handleNextPokemon() {
        await getPokemonData(pokemonData.id + 1)
        .then((data) => {
            const returnedPokemon:pokemonModel = data;
            setPokemonData(returnedPokemon);
        });
    }

    const getPokemonData = useCallback(async (numPokemon: number) => {
        var pokemon:pokemonModel = basePokemon;

        await fetch(`https://pokeapi.co/api/v2/pokemon/${numPokemon}`)
        .then((resposta) => resposta.json())
        .then((data) => {
            pokemon = data;
            pokemon.sprites.other.official_artwork = data.sprites.other['official-artwork'];
            return pokemon;
        })
        return pokemon;
    }, []);

    useEffect(() => {
        getPokemonData(pokemonData.id);
    }, [pokemonData, pokemonData.id]);

    return(
        <div>
            <Display imgUrl={pokemonData.sprites.front_default} pokemonName={pokemonData.name} pokemonType={pokemonData.types[0].type.name}></Display>
            <div className="grid grid-cols-2 mt-4 gap-4">
                <TypeDisplay typeName={pokemonData.types[0].type.name}/>
                <div className="flex flex-1 gap-4 justify-center rounded-lg px-0 py-1 border-2 border-black bg-gray-300">
                    <button onClick={ handlePrevPokemon }>
                        <ArrowCircleLeftIcon className="text-gray-900" fontSize="large"/>
                    </button>
                    <button onClick={ handleNextPokemon }>
                        <ArrowCircleRightIcon className="text-gray-900" fontSize="large"/>
                    </button>
                </div>
            </div>
            <div>
                <BottomButtons></BottomButtons>
            </div>
        </div>
    )
}