import { colorCodeByType } from "../../utilities/colorByType"

import { useState } from "react";

interface DisplayProps {
    imgUrl: string,
    pokemonName: string,
    pokemonType: string,
    isPokemonShown: boolean,
    handleShowPokemon: () => void
}

export default function Display({imgUrl, pokemonName, pokemonType, isPokemonShown, handleShowPokemon}: DisplayProps) {
    const [isPokemonShownLocal, setIsPokemonShownLocal] = useState(isPokemonShown)

    const handleShowPokemonLocal = () => {
        setIsPokemonShownLocal(!isPokemonShownLocal);
        handleShowPokemon();
    }

    return(
        <div className="flex flex-col p-4 pb-0 text-center justify-center rounded-sm rounded-bl-2xl shadow-md bg-white shadow-gray-400">
            <div>
                <button className="bg-red-500 rounded-full text-red-500 h-2 w-2 mx-2 border-2 border-black" disabled= { true }>⠀</button>
                <button className="bg-red-500 rounded-full text-red-500 h-2 w-2 mx-2 border-2 border-black" disabled= { true }>⠀</button>
            </div>
            
            <div className="rounded-md flex justify-center w-full" style={isPokemonShownLocal? { backgroundColor: `${colorCodeByType(pokemonType) }`} : { backgroundColor: '#1f2937' }}>
                {
                    isPokemonShownLocal ? 
                    <img src={ imgUrl } alt= { "Foto: "+ pokemonName } className="w-32 h-32" />
                    :
                    <p className="w-32 h-32">&nbsp;</p>
                }
            </div>

            <div className="grid grid-cols-3 justify-center mt-2 w-60">
                <button className="bg-red-500 rounded-full text-red-500 h-4 w-4 m-2 border-2 border-black" onClick={handleShowPokemonLocal}>⠀</button>
                {
                    isPokemonShownLocal? 
                    <p className="text-black col-start-2 col-end-3"> { pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1) }</p>
                    :
                    null
                }
            </div>
        </div>
    )
}