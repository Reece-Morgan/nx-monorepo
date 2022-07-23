import styled from 'styled-components';
import breakpointValues from '../settings/breakpoints';
import colourValues from '../settings/colours';

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

const Image = styled.img`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: block;
  @media (min-width: ${breakpointValues.tablet}) {
    width: 75%;
  }
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

export function PageNotFound() {
    return (
        <Wrapper>
            <Container>
                <Image src="/images/404.png" alt="404 - Page Not Found" />
                <Paragraph>We can&#39;t seem to find what you&#39;re looking for.</Paragraph>
                <Paragraph>Have you tried one of these pages?</Paragraph>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/static/about-allus">About</Link></li>
                    <li><Link href="/games/rpgs">RPG Games</Link></li>
                    <li><Link href="/games/platformers">Platformer Games</Link></li>
                    <li><Link href="/games/demos-and-prototypes">Demos and Prototypes</Link></li>
                    <li><Link href="/games/ongoing-projects">Ongoing Projects</Link></li>
                </ul>
            </Container>
        </Wrapper>
    )
}

export default PageNotFound;