import styled from 'styled-components';
import breakpointValues from '../../../settings/breakpoints';

interface Props {
    imageUrl: string;
    altText: string;
    url: string;
}

const Container = styled.div`
    width: 100%;
    max-height: 25vw;
    background-color: transparent;
    box-shadow: rgb(0 0 0 / 40%) 3px 5px 6px 1px;
    display: flex;
    aspect-ratio: 16/9;
    cursor: pointer;
    @media(min-width: ${breakpointValues.tablet}) {
        height: 22vw;
    }
    @media(min-width: ${breakpointValues.lg}) {
        width: 1200px;
        height: 300px;
    }
`;

const ImageLink = styled.a``;

const Image = styled.img`
    width: 100vw;
`;

export const SingleTile = ({ imageUrl, altText, url }: Props): JSX.Element => {
    return (
        <Container>
            <ImageLink href={url}>
                <Image src={imageUrl} alt={altText} />
            </ImageLink>
        </Container>
    );
};