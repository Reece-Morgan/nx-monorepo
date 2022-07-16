import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import { Carousel, SingleTile } from '@allus-interactive/component-library';

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
        <SingleTile imageUrl='/images/carousel-placeholder.png' altText='Placeholder banner' url='/games/rpgs' />
        <SingleTile imageUrl='/images/carousel-placeholder.png' altText='Placeholder banner' url='/games/platformers' />
        <SingleTile imageUrl='/images/carousel-placeholder.png' altText='Placeholder banner' url='/games/demos-and-prototypes' />
      </Carousel>
      <Container>
        <p>Container content goes here</p>
      </Container>
    </Wrapper>
  );
}

export default Index;
