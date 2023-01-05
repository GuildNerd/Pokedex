interface DisplayProps {
    imgUrl: string,
    pokemonName: string
}

export default function Display({imgUrl, pokemonName}: DisplayProps) {
    return(
        <div className="bg-white flex flex-col text-center justify-center rounded-sm rounded-bl-2xl p-4 pb-0 shadow-sm shadow-gray-400">
            <div>
                <button className="bg-red-500 rounded-full text-red-500 h-2 w-2 mx-2 border-2 border-black" disabled= {true}>⠀</button>
                <button className="bg-red-500 rounded-full text-red-500 h-2 w-2 mx-2 border-2 border-black" disabled= {true}>⠀</button>
            </div>
            
            <div className="rounded-md flex justify-center bg-img-pokemon p-2 w-full">
                <img src={imgUrl} alt= {"Foto: "+ pokemonName} className="w-32 h-32" />
            </div>

            <div className="grid grid-cols-3 justify-center mt-2">
                <button className="bg-red-500 rounded-full text-red-500 h-4 w-4 m-2 border-2 border-black" disabled= {true}>⠀</button>
                <p className="text text-lg black col-start-2 col-end-3"> { pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1) }</p>
            </div>
        </div>
    )
}