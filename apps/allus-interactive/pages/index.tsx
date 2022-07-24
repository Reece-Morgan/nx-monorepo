import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';
import {
  Carousel,
  SingleTile,
  GameTile,
} from '@allus-interactive/component-library';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from './api/apolloClient';
import { Banner } from '../types/banner';
import { Game } from '../types/game';
import { useState, useEffect } from 'react';

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

const query = gql`
  query {
    banners {
      altText
      image {
        url
      }
      title
      url
    }
    games {
      title
      altText
      description {
        text
      }
      featuredGame
      image {
        url
      }
      url
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({query});
  return {
    props: {
      banners: data.banners || [],
      games: data.games || []
    },
    revalidate: 90,
  };
};

type HomePageProps = {
  banners: Banner[];
  games: Game[];
};

const Home = ({ banners, games }: HomePageProps) => {
  const [carouselBanners, setCarouselBanners] = useState<Banner[]>([]);
  const [featuredGames, setFeaturedGames] = useState<Game[]>([]);

  useEffect(() => {
    setCarouselBanners(banners);
    setFeaturedGames(
      games.filter(
        (game) => game.featuredGame === true
      )
    );
  }, [banners, games]);

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
        {carouselBanners && (
          carouselBanners.map((tile, index) => (
            <SingleTile
              key={index}
              imageUrl={tile.image.url}
              altText={tile.altText}
              url={tile.url}
            />
          ))
        )}
      </Carousel>
      <Container>
        <Title>Welcome to Allus Interactive</Title>
        <p>
          Allus Interactive is an indie game developer designing, developing and
          publishing games across PC and Android.
        </p>
        <Title>Featured Games</Title>
        <FlexContainer>
          {featuredGames && featuredGames.map((tile, index) => (
            <GameTile
              key={index}
              imageUrl={tile.image.url}
              altText={tile.altText}
              url={tile.image.url}
              lineOne={tile.description.text}
              lineTwo=""
            />
          ))}
        </FlexContainer>
      </Container>
    </Wrapper>
  );
}

export default Home;
