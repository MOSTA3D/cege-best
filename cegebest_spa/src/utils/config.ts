export const BACKEND_URL =
  window.location.port === "3000"
    ? "http://localhost:8080/movies"
    : "https://ASSIGN_IT_LATER.net/movies";
export const POSTER_API = "https://images.tmdb.org/t/p";

export enum ResponseStatus {
  Informational,
  Success,
  Redirection,
  ClientError,
  ServerError,
}

export type StatusKey = '1' | '2' | '3' | '4' | '5';

export const responseStatusMap = {
  "1": ResponseStatus.Informational,
  "2": ResponseStatus.Success,
  "3": ResponseStatus.Redirection,
  "4": ResponseStatus.ClientError,
  "5": ResponseStatus.ServerError,
};
