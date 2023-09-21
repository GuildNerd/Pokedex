export interface PokemonDetailsProps {
    hp: number,
    atk: number,
    def: number,
    sp_atk: number,
    sp_def: number,
    spd: number
}

export default function PokemonDetails({ hp, atk, def, sp_atk, sp_def, spd }: PokemonDetailsProps) {
    const numberStyle = { "fontWeight": "normal", "color": "black"}
    
    return (
        <div className="min-w-[20rem] p-4 flex flex-col gap-2 rounded-md bg-red-500 border-[1px] border-black">
            <div className="p-2 bg-white border-[1px] border-black rounded-md font-thin">
                <div className="flex justify-center">
                    <h4 className="font-bold">BASE STATS</h4>
                </div>
                <div className="flex gap-2">
                    <p>Health Points: </p>
                    <p style={numberStyle}>{hp}</p>
                </div>
                <div className="flex gap-2">
                    <p>Attack: </p>
                    <p style={numberStyle}>{atk}</p>
                </div>
                <div className="flex gap-2">
                    <p>Defense: </p>
                    <p style={numberStyle}>{def}</p>
                </div>
                <div className="flex gap-2">
                    <p>Special-Attack: </p>
                    <p style={numberStyle}>{sp_atk}</p>
                </div>
                <div className="flex gap-2">
                    <p>Special-Defense: </p>
                    <p style={numberStyle}>{sp_def}</p>
                </div>
                <div className="flex gap-2">
                    <p>Speed: </p>
                    <p style={numberStyle}>{spd}</p>
                </div>
            </div>
        </div>
    )
}