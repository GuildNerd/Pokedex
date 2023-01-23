import { colorCodeByType } from "../../utilities/colorByType";

export interface TypeDisplayProps {
    typeName: string,
}

export default function TypeDisplay({typeName}:TypeDisplayProps) {
    const colorCode = colorCodeByType(typeName);

    return(
        <div className='flex-1 border-black border-2 rounded-md p-2 text-white text-lg font-semibold' style={{backgroundColor: `${colorCode}`}}>
            <p>{typeName.charAt(0).toUpperCase() + typeName.substring(1)}</p>
        </div>
    )
}