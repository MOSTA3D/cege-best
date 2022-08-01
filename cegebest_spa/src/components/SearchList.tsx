import { POSTER_API } from "../utils/config";
import { MovieType } from "../utils/types";

interface ISearchListProps{
    searchList: MovieType[];
    isBlured: boolean
}

function SearchList(props:ISearchListProps){
    const { searchList, isBlured } = props;
    return (
        <div className={"search-list" + (isBlured ? " blured" : "")}>
            <ul>
                {searchList.map(sItem=>(
                    <li key={sItem.id}>
                        <img src = {`${POSTER_API}/w200/${sItem.posterPath}`} alt={sItem.title} />
                        {sItem.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchList;