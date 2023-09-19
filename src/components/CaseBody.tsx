import { useState } from "react";
import { getPokemonData, pokemonModel } from "../utilities/GetPokemonData";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import TypeDisplay from "./CaseBottom/TypeDisplay";
import Display from "./PokemonDisplay/Display";
import SearchBar from "./CaseBottom/SearchBar";

export interface CaseBodyProps {
    pokemonData: pokemonModel,
    handlePrevPokemon: (pokemon: pokemonModel) => void,
    handleNextPokemon: (pokemon: pokemonModel) => void,
}

export function CaseBody({ pokemonData, handlePrevPokemon, handleNextPokemon }: CaseBodyProps) {
    const [localPokemonData, setLocalPokemonData] = useState(pokemonData);
    const [isPokemonShown, setIsPokemonShown] = useState(true);

    const handleShowPokemon = () => {
        setIsPokemonShown(!isPokemonShown);
    }

    // receives the type of search (previous, next or specific pokémon) and fetch it from the PokéAPI
    const handleGetPokemon = async (event: React.MouseEvent<HTMLButtonElement>, searchType: string, wantedPokemon: string | number) => {
        searchType === "prev" && pokemonData.id > 1 ?
            await getPokemonData(pokemonData.id - 1)
                .then((data) => {
                    setLocalPokemonData(data);
                    handlePrevPokemon(data);
                })
            :
        searchType === "next" ?
            await getPokemonData(pokemonData.id + 1)
                .then((data) => {
                    setLocalPokemonData(data);
                    handleNextPokemon(data);
                })
        :
            await getPokemonData(wantedPokemon)
                .then((data) => {
                    setLocalPokemonData(data);
                    handleNextPokemon(data);
                });
    }

    return (
        <div>
            <Display imgUrl={localPokemonData.sprites.front_default} pokemonName={localPokemonData.name} pokemonId={localPokemonData.id} pokemonType={localPokemonData.types[0].type.name} isPokemonShown={isPokemonShown} handleShowPokemon={handleShowPokemon}></Display>
            <div className="grid grid-cols-2 mt-4 gap-4">
                <TypeDisplay typeName={localPokemonData.types[0].type.name} isShowType={isPokemonShown} />
                <div className="flex flex-1 gap-4 justify-center rounded-lg px-0 py-1 border-2 border-black bg-gray-300">
                    <button onClick={(event) => handleGetPokemon(event, "prev", "")}>
                        <ArrowCircleLeftIcon className="text-gray-900" fontSize="large" />
                    </button>
                    <button onClick={(event) => handleGetPokemon(event, "next", "")}>
                        <ArrowCircleRightIcon className="text-gray-900" fontSize="large" />
                    </button>
                </div>
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
    )
}