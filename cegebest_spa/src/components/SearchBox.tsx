import {
  useState,
  useRef,
  FormEvent,
  PropsWithChildren,
  Dispatch,
  FocusEventHandler,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from "react";

import SearchList from "./SearchList";

import { ApiMessage, ISearchBoxProps, PopularMovie } from "../utils/types";
import { FetchFacad, getData } from "../utils/helper";
import { BACKEND_URL } from "../utils/config";
import { useNavigate } from "react-router";

function SearchBox() {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([] as PopularMovie[]);
  const [isBlured, setIsBlured] = useState(true);

  const navigator = useNavigate();

  const handleInputBlur = (e: any) => {
    if (e.relatedTarget && e.relatedTarget.nodeName === "A") {
      navigator(e.relatedTarget.pathname);
      setIsBlured(true);
      return;
    }
    setIsBlured(true);
  };

  const handleInputFocus = () => {
    setIsBlured(false);
  };

  const handleSearchChange = (e: FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    if (value.length > 3) {
      (async function () {
        try {
          const data = await getData<PopularMovie[]>(
            `${BACKEND_URL}/search?query=${value}`
          );
          setSearchList(data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
    setSearchValue(value);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        name="search"
        placeholder="Search For a Movie"
        value={searchValue}
        onBlurCapture={handleInputBlur}
        onFocus={handleInputFocus}
        onChange={handleSearchChange}
      />
      <SearchList isBlured={isBlured} searchList={searchList} />
    </div>
  );
}

export default SearchBox;
