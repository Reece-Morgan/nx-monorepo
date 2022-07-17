import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';
import { Carousel, SingleTile, GameTile } from '@allus-interactive/component-library';

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

const Title = styled.h1`
  margin: 10px 0 0 0;
  color: ${colourValues.title};
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 0;
`;

export function Index() {
  return (
    <Wrapper>
      <Carousel
        autoplay={true}
        autoplaySpeed={5000}
        dots={true}
        draggable={true}
        infinite={true}
        swipe={true}
      >
        <SingleTile imageUrl='/images/carousel/Rpgs.png' altText='RPG Games Banner' url='/games/rpgs' />
        <SingleTile imageUrl='/images/carousel/Platformers.png' altText='Platformers Banner' url='/games/platformers' />
        <SingleTile imageUrl='/images/carousel/Prototypes.png' altText='Demos and Prototypes Banner' url='/games/demos-and-prototypes' />
      </Carousel>
      <Container>
        <Title>Welcome to Allus Interactive</Title>
        <p>
          Allus Interactive is an indie game developer designing, developing and publishing games across PC and Android.
        </p>
        <Title>Featured Games</Title>
        <FlexContainer>
          <GameTile
            imageUrl='/images/game-tile/Khione.png'
            altText='The Trials of Khione'
            url='https://allusinteractive.itch.io/the-trials-of-khione'
            lineOne='Play as the Greek Goddess of Snow, Khione.'
            lineTwo='Stripped of your immortality by your father Boreas and sent to the mortal world, you find yourself in a small village suspicious of outsiders.'
          />
          <GameTile
            imageUrl='/images/game-tile/BeardedBeatdown.png'
            altText='Bearded Beatdown'
            url='https://allusinteractive.itch.io/bearded-beatdown'
            lineOne='Bearded Beatdown is a pixel art side scrolling beat em up  game I was developing in Construct 3.'
            lineTwo='I have plans to rebuild this game in another engine, and develop it further than this prototype.'
          />
        </FlexContainer>
      </Container>
    </Wrapper>
  );
}

export default Index;
