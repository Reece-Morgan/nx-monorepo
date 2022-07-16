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
                <Title>Demos and Prototypes</Title>
                <FlexContainer>
                    <GameTile
                        imageUrl='/images/games/BeardedBeatdown.png'
                        altText='Bearded Beatdown'
                        url='https://allusinteractive.itch.io/bearded-beatdown'
                        lineOne='Bearded Beatdown is a pixel art side scrolling beat em up  game I was developing in Construct 3.'
                        lineTwo='I have plans to rebuild this game in another engine, and develop it further than this prototype.'
                    />
                    <GameTile
                        imageUrl='/images/games/TargetPractice.jpg'
                        altText='Target Practice'
                        url='https://allusinteractive.itch.io/target-practice'
                        lineOne='Target Practice is a prototype game I developed whilst following tutorials and a udemy course on how to create a bow and arrow/archery mechanic in Unity. '
                        lineTwo='I plan to one day take this mechanic and integrate it into a first person archery game.'
                    />
                </FlexContainer>
            </Container>
        </Wrapper>
    )
}

export default RpgGamePage;
