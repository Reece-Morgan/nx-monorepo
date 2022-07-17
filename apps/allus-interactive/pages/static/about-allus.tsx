import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';
import colourValues from '../../settings/colours';

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

export function AboutAllus() {
  return (
    <Wrapper>
      <Container>
        <Section>
            <Title>About Allus Interactive</Title>
        </Section>
        <Section>
            <SectionTitle></SectionTitle>
            <Paragraph>
                Allus Interactive is a one man indie game development studio run by me, Reece. Starting out in the summer of 2017 under the name 
                RM Games, I rebranded as Allus Interactive several months later. I have since designed, developed and released a number of different 
                games for a wide range of platforms, including Android, Windows and MacOS. All my PC games can be downloaded from/played on my 
                <Link href="" target="_blank">itch.io</Link> page. My Android games can be downloaded from the 
                <Link href="https://play.google.com/store/apps/developer?id=Allus+Interactive" target="_blank">Google Play Store</Link>.
            </Paragraph>
            <Paragraph>
                During the course of my journey as an indie game developer, I have explored and used many different game engines to develop my 
                games. I currently use Unity and RPG Maker MV, and I&#39;m currently teaching myself the basics in Gotdot. The type of project I 
                work on influences the game engine I use. For any 2D game I develop, I am starting to use Godot. For 3D games, I stick with Unity. 
                And if I start developing any type of RPG game, I turn to RPG Maker. I can&#39;t fault any of these engines, and if any aspiring 
                indie game dev plans to develop a 2D, 3D or RPG game, I cannot recommend these engines strongly enough. 
            </Paragraph>
            <Paragraph>
                Another big passion of mine (besides making my own games) is playing (and admiring) other games made by my fellow developers. 
                For any game jam I enter, I love to view other entries and discover what ideas other developers come up with. I love seeing how 
                other devs will interpret a theme, and the results they come up with. I also find that providing feedback is very fulfilling. 
                I love getting feedback on my games from other developers (or anyone who plays my games). Finding out what they liked, or didn&#39;t 
                like. Any bugs, or issues, they might have found. Or suggestions into any improvements I could make. It&#39;s all part and parcel of 
                being an indie game developer. So please feel free to try any of my games, and leave me some feedback. Whether it&#39;s on social media, 
                or the game pages on itch.io, or through an email (if you want to leave some private feedback) I appreciate any and all feedback I may 
                receive. And I will do my best to take it all onboard. 
            </Paragraph>
        </Section>
        <Section>
            <SectionTitle>Who Am I?</SectionTitle>
            <Paragraph>
                My name is Reece, and along with being an indie game developer, I also work as a Software Engineer.
            </Paragraph>
            <Paragraph>
                My love for designing and devloping games started during my HNC Computing course at Moray College UHI. I was introduced to game 
                development by a fellow indie game dev who was attending the same course. Over the course of the next two years I studied 
                Computing/Computer Science, whilst trying to find my feet as an indie game developer. 
            </Paragraph>
            <Paragraph>
                After finishing my studies in Computer Science, I once again entered a HNC course at Moray College, this time for Interactive 
                Media. I spent the next 4 years studying Interactive Media, before concluding my studies and leaving college with a Bachelor 
                of Science (Bsc) in Interactive Media. During my last 2 years at college, I was hired as a part time Graduate Developer for a 
                gaming company whilst I finished my studies. I now work full time for the same company as a Software Engineer. 
            </Paragraph>
        </Section>
      </Container>
    </Wrapper>
  );
}

export default AboutAllus;
