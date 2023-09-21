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
    handleSearchPokemon: (pokemon: pokemonModel) => void,
}

export function CaseBody({ pokemonData, handlePrevPokemon, handleNextPokemon, handleSearchPokemon }: CaseBodyProps) {
    const [localPokemonData, setLocalPokemonData] = useState(pokemonData);
    const [isPokemonShown, setIsPokemonShown] = useState(true);
    const [inputSearchContent, setInputSearchContent] = useState("bulbasaur");

    function handleShowPokemon() {
        setIsPokemonShown(!isPokemonShown);
    }

    function handleInputSearchChange(content: string) {
        setInputSearchContent(content);
    }

    // receives the type of search (previous, next or specific pokémon) and fetch it from the PokéAPI
    const handleGetPokemon = async (searchType: string, wantedPokemon: string | number) => {
        if (searchType === "prev" && pokemonData.id > 1) {
            try {
                let data = await getPokemonData(pokemonData.id - 1)
                setLocalPokemonData(data);
                handlePrevPokemon(data);
            }
            catch {

            }
        }
        else if (searchType === "next") {
            try {
                let data = await getPokemonData(pokemonData.id + 1)
                setLocalPokemonData(data);
                handleNextPokemon(data);
            }
            catch {

            }
        }
        else if (searchType === "search") {
            try {
                let data = await getPokemonData(wantedPokemon)
                setLocalPokemonData(data);
                handleSearchPokemon(data);
            }
            catch {

            }

        }
    }

    return (
        <div>
            <Display imgUrl={localPokemonData.sprites.front_default} pokemonName={localPokemonData.name} pokemonId={localPokemonData.id} pokemonType={localPokemonData.types[0].type.name} isPokemonShown={isPokemonShown} handleShowPokemon={handleShowPokemon}></Display>
            <div className="grid grid-cols-2 mt-4 gap-4">
                <TypeDisplay typeName={localPokemonData.types[0].type.name} isShowType={isPokemonShown} />
                <div className="flex flex-1 gap-4 justify-center rounded-lg px-0 py-1 border-2 border-black bg-gray-300">
                    <button onClick={() => handleGetPokemon("prev", "")}>
                        <ArrowCircleLeftIcon className="text-gray-900" fontSize="large" />
                    </button>
                    <button onClick={() => handleGetPokemon("next", "")}>
                        <ArrowCircleRightIcon className="text-gray-900" fontSize="large" />
                    </button>
                </div>
            </div>
            <div>
                <SearchBar onClickSearch={() => handleGetPokemon("search", inputSearchContent)} onInputChange={(content) => handleInputSearchChange(content)} />
            </div>
        </div>
    )
}