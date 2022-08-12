import breakpointValues from "apps/movie-search/settings/breakpoints";
import styled from "styled-components"

const Wrapper = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 1em;
    @media (min-width: ${breakpointValues.xs}) {
        font-size: 1.5em;
    }
`;

export const MovieListHeading = () => {
    return (
        <Wrapper>
            <Title>Movie Search Engine</Title>
        </Wrapper>
    )
}