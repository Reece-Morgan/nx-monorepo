import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';
import { GameTile } from '@allus-interactive/component-library';
import { useRouter } from 'next/router';
import { PlatformerData, PrototypesData, RpgData } from '../../static';

interface Props {
    gameTile: {
        gameName: string;
        imageUrl: string;
        altText: string;
        url: string;
        lineOne: string;
        lineTwo: string;
    }[];
}

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 170px);
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-bottom: 1rem;
  color: rgba(55, 65, 81, 1);
  width: 100%;
  @media (max-width: ${breakpointValues.lg}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const GamePage = ({gameTile}: Props) => {
    const router = useRouter();
    const { game } = router.query;

    if (game === 'platformers') {
        gameTile = PlatformerData;
    } else if (game === 'demos-and-prototypes') {
        gameTile = PrototypesData;
    } else if (game === 'rpgs') {
        gameTile = RpgData;
    } 

    return (
        <Wrapper>
            <Container>
                <p>{game} games</p>
                <FlexContainer>
                    {gameTile && gameTile.map((tile, key) =>
                        <GameTile
                            key={tile.gameName}
                            imageUrl={tile.imageUrl}
                            altText={tile.altText}
                            url={tile.url}
                            lineOne={tile.lineOne}
                            lineTwo={tile.lineTwo}
                        />
                    )}
                </FlexContainer>
            </Container>
        </Wrapper>
    )
}

export default GamePage;
