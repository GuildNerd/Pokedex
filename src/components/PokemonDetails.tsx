import { pokemonModel } from "../utilities/GetPokemonData"

export default function PokemonDetails(hp:number, atk:number, def:number, sp_atk:number, sp_def:number, spd:number) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <p>HP: </p>
                <p>{hp}</p>
            </div>
            <div className="flex gap-2">
                <p>ATK: </p>
                <p>{atk}</p>
            </div>
            <div className="flex gap-2">
                <p>DEF: </p>
                <p>{def}</p>
            </div>
            <div className="flex gap-2">
                <p>SP-ATK: </p>
                <p>{sp_atk}</p>
            </div>
            <div className="flex gap-2">
                <p>SP-DEF: </p>
                <p>{sp_def}</p>
            </div>
            <div className="flex gap-2">
                <p>SPD: </p>
                <p>{spd}</p>
            </div>
        </div>
    )
}