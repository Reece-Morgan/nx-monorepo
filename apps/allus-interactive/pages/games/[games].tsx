import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';
import colourValues from '../../settings/colours';
import { GameTile } from '@allus-interactive/component-library';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from '../api/apolloClient';
import { Game } from '../../types/game';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

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

const query = gql`
  query {
    games {
      title
      altText
      category
      description {
        text
      }
      image {
        url
      }
      url
    }
  }
`;

const gamePages = ['rpgs', 'platformers', 'demos-and-prototypes', 'ongoing-projects'];

export const getStaticPaths = async () => {
  return {
    paths: gamePages.map((games) => ({ params: { games } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({query});
  return {
    props: {
      games: data.games || []
    },
    revalidate: 90,
  };
};

type GamePageProps = {
  games: Game[];
};

const GamesPage = ({ games }: GamePageProps) => {
  const router = useRouter();
  const [allGames, setAllGames] = useState<Game[]>([]);

  const gameType = router.asPath.substring(7);

  useEffect(() => {
    setAllGames(
      games.filter(
        (game) => game.category === gameType
      )
    );
  }, [games, gameType]);

    return (
        <Wrapper>
            <Container>
                <Title>Games</Title>
                <FlexContainer>
                  {allGames && allGames.map((tile, index) => (
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
    )
}

export default GamesPage;
