import { Link } from "react-router-dom";
import { POSTER_API } from "../utils/config";
import { PopularMovie } from "../utils/types";

interface ISearchListProps{
    searchList: PopularMovie[];
    isBlured: boolean
}

function SearchList(props:ISearchListProps){
    const { searchList, isBlured } = props;
    return (
        <div className={"search-list" + (isBlured ? " blured" : "")}>
            <ul>
                {searchList.map(sItem=>(
                    <Link to={"/movies/" + sItem.id} key={sItem.id}>
                        <li>
                            <img src = {`${POSTER_API}/w200/${sItem.posterPath}`} alt={sItem.title} />
                            {sItem.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default SearchList;