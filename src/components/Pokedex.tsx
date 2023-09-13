import PokedexTop from "./PokedexTop"
import { CaseBody } from "./CaseBody"
import PokemonDetails from "./PokemonDetails"

import { useState } from "react"

export function Pokedex() {
    const [isDetailsShown, setIsDetailsShown] = useState(false);

    return (
        <div className='p-4 flex items-center text-center '>
            <div className='bg-red-500 case-3d'>
                <div className=''>
                    <div className='bg-red-500 rounded-sm justify-center only:p-6 case-internal'>
                        <PokedexTop></PokedexTop>
                        <CaseBody />
                    </div>
                </div>
            </div>
            {
                isDetailsShown ?
                <div className='bg-red-500 case-3d'>
                    <PokemonDetails></PokemonDetails>
                </div> : null
            }

        </div>
    )
}