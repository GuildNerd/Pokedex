import { DisplayPokemon } from "./DisplayPokemon"

export function PokedexCase() {
    return(
        <div className='bg-red-500 rounded-sm flex flex-col gap-2 justify-center align-middle p-6 case-internal'>
            <div className='flex flex-row gap-3 border-black border-b-2 mb-2 pb-2'>
                <div className='bg-white rounded-full w-fit p-1'>
                    <button className="rounded-full h-12 w-12 border-2 border-black led" disabled= {true}>⠀</button>
                </div>
                <div>
                    <button className="bg-red-600 rounded-full w-3 h-3 border-2 border-black mx-1" disabled= {true}>⠀</button>
                    <button className="bg-yellow-400 rounded-full w-3 h-3 border-2 border-black mx-1" disabled= {true}>⠀</button>
                    <button className="bg-green-400 rounded-full w-3 h-3 border-2 border-black mx-1" disabled= {true}>⠀</button>
                </div>
            </div>
            <DisplayPokemon />
        </div>
    )
}