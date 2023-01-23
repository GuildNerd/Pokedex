import { colorCodeByType } from "../../utilities/colorByType"

interface DisplayProps {
    imgUrl: string,
    pokemonName: string,
    pokemonType: string
}

export default function Display({imgUrl, pokemonName, pokemonType}: DisplayProps) {
    return(
        <div className="flex flex-col p-4 pb-0 text-center justify-center rounded-sm rounded-bl-2xl shadow-md bg-white shadow-gray-400">
            <div>
                <button className="bg-red-500 rounded-full text-red-500 h-2 w-2 mx-2 border-2 border-black" disabled= { true }>⠀</button>
                <button className="bg-red-500 rounded-full text-red-500 h-2 w-2 mx-2 border-2 border-black" disabled= { true }>⠀</button>
            </div>
            
            <div className="rounded-md flex justify-center w-full" style={{ backgroundColor: `${colorCodeByType(pokemonType) }`}}>
                <img src={ imgUrl } alt= { "Foto: "+ pokemonName } className="w-32 h-32" />
            </div>

            <div className="grid grid-cols-3 justify-center mt-2">
                <button className="bg-red-500 rounded-full text-red-500 h-4 w-4 m-2 border-2 border-black" disabled={ true }>⠀</button>
                <p className="text text-lg black col-start-2 col-end-3"> { pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1) }</p>
            </div>
        </div>
    )
}