import React, { MouseEventHandler, useCallback, useEffect, useState } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import TypeDisplay from "./BottomButtons/TypeDisplay";

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

export function DisplayPokemon() {
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
            <div className="bg-white grid grid-cols-1 text-center justify-center rounded-sm rounded-bl-2xl p-4 pb-0 shadow-sm shadow-gray-400">
                <div>
                    <button className="bg-red-500 rounded-full text-red-500 h-2 w-2 mx-2 border-2 border-black" disabled= {true}>⠀</button>
                    <button className="bg-red-500 rounded-full text-red-500 h-2 w-2 mx-2 border-2 border-black" disabled= {true}>⠀</button>
                </div>
                
                <div className="rounded-md flex justify-center bg-img-pokemon p-2">
                    <img src={ pokemonData.sprites.other.official_artwork.front_default } alt= {"Foto: "+ pokemonData.name} className="h-32 w-32" />
                </div>

                <div className="grid grid-cols-3 justify-center mt-2">
                    <button className="bg-red-500 rounded-full text-red-500 h-4 w-4 m-2 border-2 border-black" disabled= {true}>⠀</button>
                    <p className="text text-lg black col-start-2 col-end-3"> { pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.substring(1) }</p>
                </div>
            </div>
            
            <div className="flex flex-row gap-4 mt-4">
                <TypeDisplay typeName={pokemonData.types[0].type.name}/>
                <div className="flex flex-1 gap-4 justify-center bg-gray-300 rounded-lg px-0 py-1">
                    <button onClick={ handlePrevPokemon }>
                        <ArrowCircleLeftIcon className="text-gray-900" fontSize="large"/>
                    </button>
                    <button onClick={ handleNextPokemon }>
                        <ArrowCircleRightIcon className="text-gray-900" fontSize="large"/>
                    </button>
                </div>
            </div>
        </div>
    )
}