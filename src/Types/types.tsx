export type MovieData = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: String;
};

export type MovieCard = {
  Response?: string;
  Error?: string;
  Search: [];
  totalResults: string;
};

export type RootState = {
  movies: Record<string, MovieCard>;
};
