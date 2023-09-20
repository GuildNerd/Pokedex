import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export interface SearchBarProps {
    onClickSearch: (event: React.MouseEvent<HTMLButtonElement>, searchType: string, wantedPokemon: string | number) => {},
    onInputChange: (content: string) => void
}

export default function SearchBar({onClickSearch, onInputChange}: SearchBarProps) {
    const [inputContent, setInputContent] = useState("");

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setInputContent(event.currentTarget.value);
        onInputChange(event.currentTarget.value);
    }

    const handleSearchBtn = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClickSearch(event, "search", inputContent)
    }

    return (
        <div className="w-full mt-4 flex gap-1 justify-end rounded-md border-2 border-black bg-gray-900 ">
            <input type="text" placeholder="Search for a pokémon" onChange={handleInputChange} value={inputContent} className="flex-1 text-center text-white bg-gray-900 outline-none" />
            <button onClick={(event) => handleSearchBtn(event)}>
                <SearchIcon className='text-white' ></SearchIcon>
            </button>
        </div>
    )
}