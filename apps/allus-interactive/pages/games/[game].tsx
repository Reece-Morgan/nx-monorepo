import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';
import { GameTile } from '@allus-interactive/component-library';
import { useRouter } from 'next/router';

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

const GamePage = () => {
    const router = useRouter();
    const { game } = router.query;

    return (
        <Wrapper>
            <Container>
                <p>{game} games</p>
                <FlexContainer>
                    <GameTile 
                        imageUrl='/images/game-tile-placeholder.png'
                        altText='Game Tile Placeholder'
                        url='https://allusinteractive.itch.io'
                        lineOne='Game Tile Component - Line One. A short sentence talking about the game.'
                        lineTwo='Game Tile Component - Line Two. A short sentence talking about the game.'
                    />
                    <GameTile 
                        imageUrl='/images/game-tile-placeholder.png'
                        altText='Game Tile Placeholder'
                        url='https://allusinteractive.itch.io'
                        lineOne='Game Tile Component - Line One. A short sentence talking about the game.'
                        lineTwo='Game Tile Component - Line Two. A short sentence talking about the game.'
                    />
                </FlexContainer>
            </Container>
        </Wrapper>
    )
}

export default GamePage;
