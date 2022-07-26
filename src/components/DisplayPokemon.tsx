import React, { MouseEventHandler, useState } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

var basePokemon = {
    name: 'bulbasaur',
    id: 1,
    types: [
        {
            type: {
                name: 'grass',
            },
        }
    ],
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

export function DisplayPokemon() {
    const [countNumPokemon, setNumPokemon] = useState(1);
    const [pokemonData, setPokemonData] = useState(basePokemon);

    async function handleDecrNumPokemon() {

        if(countNumPokemon > 0) {
            setNumPokemon(basePokemon.id - 1);
            console.log(countNumPokemon);
            await getPokemonData(countNumPokemon);
            setPokemonData(basePokemon);
        }
    }

    async function handleAddNumPokemon() {
        setNumPokemon(basePokemon.id + 1);
        console.log(countNumPokemon);
        await getPokemonData(countNumPokemon);
        setPokemonData(basePokemon);
    }

    async function getPokemonData(numPokemon: number) {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${numPokemon}`)
        .then((resposta) => resposta.json())
        .then((data) => { 
            basePokemon = data;
            basePokemon.sprites.other.official_artwork = data.sprites.other['official-artwork'];
        })
    }

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
                <div className="flex-1 border-black border-2 bg-green-400 rounded-md p-2">
                    <p>{ pokemonData.types[0].type.name.charAt(0).toUpperCase() + pokemonData.types[0].type.name.substring(1) }</p>
                </div>
                <div className="flex flex-1 gap-4 justify-center bg-gray-300 rounded-lg px-0 py-1">
                    <button onClick={ handleDecrNumPokemon }>
                        <ArrowCircleLeftIcon className="text-gray-900" fontSize="large"/>
                    </button>
                    <button onClick={ handleAddNumPokemon }>
                        <ArrowCircleRightIcon className="text-gray-900" fontSize="large"/>
                    </button>
                </div>
            </div>
        </div>
    )
}