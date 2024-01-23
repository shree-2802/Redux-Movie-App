export type MovieData = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: string;
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  [key: string]: string ;
};

export type MovieCard = {
  Response?: string;
  Error?: string;
  Search: [];
  totalResults: string;
};

export type jsonData = {
  movies: Record<string, MovieCard>;
};
export type movieSend = {
  movies: Record<string, MovieData>;
};

export type lineDivType = {
  title: string;
  data: string;
};
