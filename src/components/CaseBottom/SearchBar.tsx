import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';

export interface SearchBarProps {
    onClickSearch: (searchType: string, wantedPokemon: string | number) => {},
    onInputChange: (content: string) => void
}

export default function SearchBar({onClickSearch, onInputChange}: SearchBarProps) {
    const [inputContent, setInputContent] = useState("");

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setInputContent(event.currentTarget.value);
        onInputChange(event.currentTarget.value);
    }

    const handleSearchBtn = () => {
        onClickSearch("search", inputContent)
    }
    
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {    
        if (event.key === 'Enter') {
          handleSearchBtn();
        }
    };

    return (
        <div className="w-full mt-4 flex gap-1 justify-end rounded-md border-2 border-black bg-gray-900 ">
            <input type="text" placeholder="Search for a pokémon" value={inputContent} onChange={handleInputChange} onKeyDown={(event) => handleKeyDown(event)} className="flex-1 text-center text-white bg-gray-900 outline-none" />
            <button onClick={handleSearchBtn}>
                <SearchIcon className='text-white' ></SearchIcon>
            </button>
        </div>
    )
}