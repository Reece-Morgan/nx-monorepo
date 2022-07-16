import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';

interface Props {
    imageUrl: string;
    altText: string;
    url: string;
    lineOne: string;
    lineTwo: string;
}

const Wrapper = styled.div`
    width: 100%;
    @media (min-width: ${breakpointValues.sm}) {
        width: 45%;
        max-width: 500px;
    }
`;

const ImageLink = styled.a``;

const Image = styled.img`
    width: 100%;
`;

const TextContainer = styled.div`
    width: 100%;
    text-align: justify;
`;

const Text = styled.p``;

export const GameTile = ({imageUrl, altText, url, lineOne, lineTwo}: Props) => {
    return (
        <Wrapper>
            <ImageLink href={url} target='_blank'>
                <Image src={imageUrl} alt={altText} />
            </ImageLink>
            <TextContainer>
                <Text>{lineOne}</Text>
                <Text>{lineTwo}</Text>
            </TextContainer>
        </Wrapper>
    )
};
