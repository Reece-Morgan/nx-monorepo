import colourValues from "apps/movie-search/settings/colours";
import styled from "styled-components";
import { AddFavourite } from "./add-favourite";

interface Props {
    movies: {
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string;
    }[];
    favourites: React.ReactNode;
    onClick: (movie) => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  max-width: 1270px;
  margin: 0 auto;
  min-height: 100%;
  padding: 0 20px;
  flex-wrap: wrap;
`;

const Overlay = styled.div`
    position: absolute;
	background: rgba(0, 0, 0, 0.8);
	width: calc(100% - 20px);
	transition: 0.5s ease;
	opacity: 0;
	bottom: 0;
	font-size: 20px;
	padding: 20px;
	margin: 15px 10px;
	text-align: center;
    color: ${colourValues.white};
`;

const MovieWrapper = styled.div`
    position: relative;
	transition: transform 0.2s;

    :hover {
        cursor: pointer;
	    transform: scale(1.1);
    }

    :hover ${Overlay} {
        opacity: 1;
    }
`;

const Image = styled.img`
    height: 450px;
    width: 300px;
    padding: 10px;
`;

const Link = styled.a``;

export const MovieList = ({ movies, favourites, onClick }: Props) => {
    const url = 'https://www.imdb.com/title/';
    return (
        <Wrapper>
            {movies && movies.map((movie, i) => (
                <MovieWrapper key={i}>
                    <Link href={url + movie.imdbID} target='_blank' rel='noreferrer'>
                        <Image src={movie.Poster} alt='Movie Poster' />
                    </Link>
                    <Overlay onClick={() => onClick(movie)}>
                        {favourites}
                    </Overlay>
                </MovieWrapper>
            ))}
        </Wrapper>
    )
}