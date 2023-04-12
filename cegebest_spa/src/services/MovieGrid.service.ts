import { BACKEND_URL } from "../utils/config";
import { getData } from "../utils/helper";
import { ApiMessage, PopularMovie } from "../utils/types";

export const fetchMoviesByPage = async (page: number) => {
  try {
    const data = await getData<PopularMovie[]>(
      `${BACKEND_URL}/popular?page=${page}`
    );
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
