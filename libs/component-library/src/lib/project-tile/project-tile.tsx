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
    @media (min-width: ${breakpointValues.md})
    {
        width: 50%;
    }
`;

const Figure = styled.figure`
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
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

const Description = styled.p`
    font-size: 0.875em;
    @media (min-width: ${breakpointValues.md})
    {
        font-size: 1em;
    }
    
    @media (min-width: ${breakpointValues.lg})
    {
        font-size: 1.125em;
    }
`;

const Link = styled.a`
    border: 2px solid #fff;
    padding: 5px 10px;
    max-width: fit-content;
    margin: 0 auto;
    border-radius: 20px;
`;

export const ProjectTile = ({ imageUrl, altText, description, url, urlText }: Props) => {
    return (
        <Wrapper>
            <Figure>
                <Image src={imageUrl} alt={altText} />
                <FigCaption>
                    <Description>{description}</Description>
                    <Link href={url} target='_blank' rel='noreferrer'>{urlText}</Link>
                </FigCaption>
            </Figure>
        </Wrapper>
    )
};