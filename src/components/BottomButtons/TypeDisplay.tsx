const typeColors = {
    grass: '#78C850',
    fire: '#F08030',
    water: '#6890F0',
    bug: '#A8B820',
    normal: '#A8A878',
    poison: '#A040A0',
    electric: '#F8D030',
    ground: '#E0C068',
    fairy: '#EE99AC',
    fighting: '#C03028',
    psychic: '#F85888',
    rock: '#B8A038',
    ghost: '#705898',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#5F4632',
    steel: '#7b8e8a',
    flying: '#5EB9B1'
}

export interface TypeDisplayProps {
    typeName: string,
}

export default function TypeDisplay({typeName}:TypeDisplayProps) {
    // gets the value of the property that have the key equal to the typeName prop and associate
    // to the colorCode variable. Then, uses colorCode to apply the style to the div
    const colorCode = `${Object.getOwnPropertyDescriptor(typeColors, typeName)?.value}`;

    return(
        <div className='flex-1 border-black border-2 rounded-md p-2' style={{backgroundColor: `${colorCode}`}}>
            <p>{typeName.charAt(0).toUpperCase() + typeName.substring(1)}</p>
        </div>
    )
}

// possível resolução sobre o background: usar um array de objetos para pegar o código hex da cor baseado no tipo do pokémon
// por enquanto o que "deu certo" (tem hr q funciona e tem hr q n) foi usar as cores no tailwind, e botar o tipo como chave,
// que aí usa o tipo que recebe por parâmetro da função para definir qual cor usar
