import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';

interface Props {
    imageUrl: string;
    altText: string;
    description: string;
    url: string;
    urlText: string;
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

const Figure = styled.figure`
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const FigCaption = styled.figcaption`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: .45s ease-in-out;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    :hover {
        opacity: 1;
    }
`;

export const ProjectTile = ({ imageUrl, altText, description, url, urlText }: Props) => {
    return (
        <Wrapper>
            <Figure>
                <Image src={imageUrl} alt={altText} />
                <FigCaption>
                    <p>{description}</p>
                    <a href={url}>{urlText}</a>
                </FigCaption>
            </Figure>
        </Wrapper>
    )
};