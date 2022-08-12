import colourValues from "apps/movie-search/settings/colours";
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

const Wrapper = styled.div`
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
    cursor: auto;
`;

export const MovieList = ({ movies }: Props) => {
    return (
        <>
            {movies && movies.map((movie, i) => (
                <Wrapper key={i}>
                    <Image src={movie.Poster} alt='Movie Poster' />
                    
                    <Overlay>Add to Favourites</Overlay>
                </Wrapper>
            ))}
        </>
    )
}