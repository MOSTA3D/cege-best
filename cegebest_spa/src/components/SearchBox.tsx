import { useState, FormEvent, PropsWithChildren, Dispatch} from "react";

import { ISearchBoxProps } from "../utils/types";

function SearchBox (props:ISearchBoxProps){
    const [ searchValue, setSearchValue ] = useState("");
    
    const {setMoviesList} = props;

    // handlers
    const handleSearchChange = (e:FormEvent<HTMLInputElement>):void => {
        const value = e.currentTarget.value;
        if(value.length > 3){

            
            // get request to the backend to search from the movie and render the movie grid component
            console.log("triggered");
            // dispatch the changes
        }
        setSearchValue(value);
    }

    return (
        <div className="search-box">
            <input type="text" name="search" placeholder="Search For a Movie" value={searchValue} onChange={handleSearchChange}/>
        </div>
    )
}

export default SearchBox;