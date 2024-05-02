import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';
import { ImageFlipTileData } from './types/types';
import { useState } from 'react';

interface Props {
    project: ImageFlipTileData;
}

export const ImageFlipTile = ({ project }: Props) => {
    const [isImageFlipped, setIsImageFlipped] = useState<boolean>(false);
    return (
        <Container>
            <Card isFlipped={isImageFlipped}>
                <Front>
                    <Figure>
                        <Image src={project.imageUrl} alt={project.altText} onClick={() => setIsImageFlipped(true)} />
                    </Figure>
                </Front>
                <Back>
                    <Figure>
                        <Image src={project.siteUrl} alt={project.altText} />
                        <FigCaption onClick={() => setIsImageFlipped(false)}>
                            <Description>{project.description}</Description>
                            <Link href={project.url} target='_blank' rel='noreferrer'>{project.urlText}</Link>
                        </FigCaption>
                    </Figure>
                </Back>
            </Card>
        </Container>
    )
};

const Container = styled.div`
    perspective: 1000px;
    width: 50%;
    height: 300px;
    @media (max-width: ${breakpointValues.lg})
    {
        height: 25vw;
    }
    @media (max-width: ${breakpointValues.tablet})
    {
        width: 100%;
        height: 50vw;
    }
`;

const Card = styled.div<{ isFlipped: boolean }>`
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;

  ${Container}:hover & {
    transform: rotateY(180deg);
  }

  ${(props) => props.isFlipped ? `
        transform: rotateY(180deg);
    ` : `
        transform: rotateY(0deg);
    `}
`;

const CardFace = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
`;

const Front = styled(CardFace)`
  z-index: 2;
  transform: rotateY(0deg);
`;

const Back = styled(CardFace)`
  transform: rotateY(180deg);
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
    opacity: 1;
    transition: .45s ease-in-out;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
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
