interface Props {
    movies: {
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string;
    }[];
}

export const MovieList = ({ movies }: Props) => {
    return (
        <>
            {movies && movies.map((movie, i) => (
                <div key={i}>
                    <img src={movie.Poster} alt='Movie Poster' />
                </div>
            ))}
        </>
    )
}