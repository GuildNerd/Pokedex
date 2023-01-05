import PokedexTop from "./PokedexTop"
import { CaseBody } from "./CaseBody"

export function Pokedex() {
    return(
        <div className='bg-red-500 rounded-sm justify-center only:p-6 case-internal'>
            <PokedexTop></PokedexTop>
            <CaseBody />
        </div>
    )
}