import { useState, useRef, FormEvent, PropsWithChildren, Dispatch} from "react";

import SearchList from "./SearchList";

import { Err, ISearchBoxProps, MovieType } from "../utils/types";
import { FetchFacad, testData } from "../utils/helper";
import { BACKEND_URL } from "../utils/config";

function SearchBox (){
    const [ searchValue, setSearchValue ] = useState("");
    // const searchList = useRef([] as unknown as MovieType[]);
    const [searchList, setSearchList] = useState([] as MovieType[]);
    const [isBlured, setIsBlured] = useState(true);

    // handlers
    const handleInputBlur = ()=>{
        setIsBlured(true);
    }

    const handleInputFocus = ()=>{
        setIsBlured(false);
    }

    const handleSearchChange = (e:FormEvent<HTMLInputElement>):void => {
        const value = e.currentTarget.value;
        if(value.length > 3){

            const fetchFacad = FetchFacad.getFetchFacad();
            // get request to the backend to search from the movie and render the SearchList component

            (async function(){
                const data = await fetchFacad.getData<MovieType[]>(`${BACKEND_URL}/search?query=${searchValue}`);
                if((data as Err).message){
                    return;
                }
                setSearchList(data as MovieType[]);
                console.log("triggered");
            })()

           
            // dispatch the changes
        }
        setSearchValue(value);
    }

    return (
        <div className="search-box">
            <input type="text" name="search" placeholder="Search For a Movie" value={searchValue} onBlur={handleInputBlur} onFocus={handleInputFocus} onChange={handleSearchChange}/>
            <SearchList isBlured = {isBlured} searchList = {searchList} />
        </div>
    )
}

export default SearchBox;