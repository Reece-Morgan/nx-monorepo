import styled from 'styled-components';
import breakpointValues from '../../../settings/breakpoints';

interface Props {
    imageUrl: string;
    url: string;
}

const Container = styled.div`
    width: 100%;
    max-height: 30vw;
    background-color: transparent;
    box-shadow: rgb(0 0 0 / 40%) 3px 5px 6px 1px;
    display: flex;
    aspect-ratio: 16/9;
    cursor: pointer;
    @media(min-width: ${breakpointValues.tablet}) {
        height: 300px;
    }
    @media(min-width: ${breakpointValues.lg}) {
        width: 1200px;
    }
`;

const Image = styled.div<{ imageUrl: string }>`
    width: 100%;
    background: url('${props => props.imageUrl}');
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-size: cover !important;
    aspect-ratio: 16/9;
`;

export const SingleTile = ({ imageUrl, url }: Props): JSX.Element => {
    return (
        <Container>
            <Image imageUrl={imageUrl} />
        </Container>
    );
};