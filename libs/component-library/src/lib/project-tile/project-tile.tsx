import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';

interface Props {
    imageUrl: string;
    altText: string;
}

const Wrapper = styled.div`
    width: 100%;
    @media (min-width: ${breakpointValues.sm})
    {
        width: 50%;
    }
    @media (min-width: ${breakpointValues.md})
    {
        width: 33.3%;
    }
`;

const Figure = styled.figure``;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const ProjectTile = ({ imageUrl, altText }: Props) => {
    return (
        <Wrapper>
            <Figure>
                <Image src={imageUrl} alt={altText} />
            </Figure>
        </Wrapper>
    )
};