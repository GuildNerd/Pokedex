import { colorCodeByType } from "../../utilities/colorByType";

export interface TypeDisplayProps {
    typeName: string,
    isShowType: boolean
}

export default function TypeDisplay({typeName, isShowType}:TypeDisplayProps) {
    const colorCode = colorCodeByType(typeName);

    return(
        <div className='flex-1 border-black border-2 rounded-md p-2 text-white text-lg font-semibold' style={isShowType? {backgroundColor: `${colorCode}`} : { backgroundColor: '#1f2937' }}>
            {   <p>{    isShowType? typeName.charAt(0).toUpperCase() + typeName.substring(1) : <p>&nbsp;</p>    }</p>  }
        </div>
    )
}