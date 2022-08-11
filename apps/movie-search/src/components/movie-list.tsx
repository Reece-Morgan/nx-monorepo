import styled from "styled-components";

interface Props {
    movies: {
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string;
    }[];
}

const Wrapper = styled.div``;

const Image = styled.img`
    height: 450px;
    width: 300px;
`;

export const MovieList = ({ movies }: Props) => {
    return (
        <>
            {movies && movies.map((movie, i) => (
                <Wrapper key={i}>
                    <Image src={movie.Poster} alt='Movie Poster' />
                </Wrapper>
            ))}
        </>
    )
}