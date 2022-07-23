import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';
import colourValues from '../../settings/colours';
import { GameTile } from '@allus-interactive/component-library';

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
  padding: 10px 0;
`;

const Title = styled.h1`
  margin: 10px 0 0 0;
  color: ${colourValues.title};
`;

const RpgGamePage = () => {
    return (
      <Wrapper>
        <Container>
          <Title>Ongoing Projects</Title>
          <FlexContainer>
            <GameTile
              imageUrl="/images/game-tile/MobileRPG.png"
              altText="Mobile RPG"
              url="https://allusinteractive.itch.io"
              lineOne="I'm currently developing the mechanics of a pixel art RPG uing Godot"
              lineTwo="I'm planning to incorporate these mechanics into a text adventure game, for a small, linear adventure game"
            />
            <GameTile
              imageUrl="/images/game-tile/RPGMakerJam5.png"
              altText="RPG Maker Jam #5"
              url="https://allusinteractive.itch.io/the-trials-of-khione"
              lineOne="I'm currently developing a new game in RPG Maker for the 30 Day RPG Maker Themed Game Jam #5"
              lineTwo="This Game Jam runs for 30 days, so my entry should be availble to download towards the end of August"
            />
          </FlexContainer>
        </Container>
      </Wrapper>
    );
}

export default RpgGamePage;
