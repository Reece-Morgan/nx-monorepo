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
                <Title>Platformer Games</Title>
                <FlexContainer>
                    <GameTile
                        imageUrl='/images/game-tile/Kiwi.png'
                        altText='Kiwi the Koala'
                        url='hhttps://allusinteractive.itch.io/kiwi-the-koala'
                        lineOne='Play as Kiwi the Koala as she sets out to find her missing family. But watch out!'
                        lineTwo='There is danger at every turn. Hungry predators have begun to prowl the land, and a little koala would make a nice snack!'
                    />
                    <GameTile
                        imageUrl='/images/game-tile/Kiwi2.png'
                        altText='Kiwi the Koala 2'
                        url='https://allusinteractive.itch.io/kiwi-the-koala-2'
                        lineOne='Play as Karl the Koala as he sets out to find his little sister Kiwi. But be careful!'
                        lineTwo='There is bound to be danger at every turn. Enemy creatures prowl the land.'
                    />
                    <GameTile
                        imageUrl='/images/game-tile/OneChance.png'
                        altText='One Chance'
                        url='https://allusinteractive.itch.io/one-chance'
                        lineOne='Run and jump your way through this 2d platformer, evading the zombies and trying not to die! One touch from a zombie and it is game over.'
                        lineTwo='Navigate the different levels, through the wastelands into a city, and find a means of escape. '
                    />
                </FlexContainer>
            </Container>
        </Wrapper>
    )
}

export default RpgGamePage;
