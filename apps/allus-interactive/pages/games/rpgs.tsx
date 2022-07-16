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
                <Title>RPG Games</Title>
                <FlexContainer>
                    <GameTile
                        imageUrl='/images/games/FightForValhalla.png'
                        altText='The Fight for Valhalla'
                        url='https://allusinteractive.itch.io/the-fight-for-valhalla'
                        lineOne='Play as the norse warrior Ingirun, as she fights alongside her brothers for the glory of Valhalla.'
                        lineTwo=''
                    />
                    <GameTile
                        imageUrl='/images/games/TrialsOfKhione.jpg'
                        altText='The Trials of Khione'
                        url='https://allusinteractive.itch.io/the-trials-of-khione'
                        lineOne='Play as the Greek Goddess of Snow, Khione.'
                        lineTwo='Stripped of your immortality by your father Boreas and sent to the mortal world, you find yourself in a small village suspicious of outsiders.'
                    />
                    <GameTile
                        imageUrl='/images/games/LaboursOfHeracles.png'
                        altText='The Labours of Heracles'
                        url='https://allusinteractive.itch.io/the-labours-of-heracles'
                        lineOne='Assume the role of legendary Greek Hero Heracles.'
                        lineTwo='Complete the fabled Labours for King Eurystheus, as penance for severe crimes.'
                    />
                </FlexContainer>
            </Container>
        </Wrapper>
    )
}

export default RpgGamePage;
