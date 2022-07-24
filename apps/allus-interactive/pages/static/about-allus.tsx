import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';
import colourValues from '../../settings/colours';
import { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from '../api/apolloClient';
import { About } from '../../types/about';
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

const Section = styled.section`
  padding: 10px 0 0 0;
`;

const Title = styled.h1`
  margin: 10px 0 0 0;
  color: ${colourValues.title};
`;

const SectionTitle = styled(Title)`
  font-weight: 800;
`;

const Paragraph = styled.p`
  margin: 0 0 10px 0;
`;

const Link = styled.a`
  color: ${colourValues.title};
  &:hover {
    color: ${colourValues.hover};
  }
`;

const query = gql`
  query {
    about(where: {title: "About Allus Interactive"}) {
      aboutTitle
      aboutMeContent {
        text
      }
      content {
        text
      }
      title
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({query});
  return {
    props: {
      aboutData: data.about || []
    },
    revalidate: 90,
  };
};

type AboutPageProps = {
  aboutData: About;
};

const AboutAllus = ({ aboutData }: AboutPageProps) => {
  const [about, setAbout] = useState<About>();

  useEffect(() => {
    setAbout(aboutData);
  }, [aboutData]);

  return (
    <Wrapper>
      <Container>
        {about && (
          <div>
            <Section>
                <Title>{about.title}</Title>
            </Section>
            <Section>
                <SectionTitle></SectionTitle>
                <Paragraph>
                  {about.content.text}
                </Paragraph>
            </Section>
            <Section>
                <SectionTitle>{about.aboutTitle}</SectionTitle>
                <Paragraph>
                  {about.aboutMeContent.text}
                </Paragraph>
            </Section>
          </div>
        )}
      </Container>
    </Wrapper>
  );
}

export default AboutAllus;
