import { POSTER_API } from "../utils/config";
import { MovieType } from "../utils/types";

interface ISearchListProps{
    searchList: MovieType[];
}

function SearchList(props:ISearchListProps){
    const { searchList } = props;
    return (
        <div className="search-list">
            <ul>
                {searchList.map(sItem=>(
                    <li>
                        <img src = {`${POSTER_API}/w100/${sItem.poster_path}`} />
                        {sItem.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchList;