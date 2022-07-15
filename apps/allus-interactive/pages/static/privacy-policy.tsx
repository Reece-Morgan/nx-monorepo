import colourValues from 'apps/allus-interactive/settings/colours';
import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';

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
  padding: 10px 0;
`;

const Title = styled.h1`
  margin: 10px 0 0 0;
  color: ${colourValues.title};
`;

const Date = styled.p`
  font-size: 0.75em;
  margin: 5px 0 0 0;
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

export function PrivacyPolicy() {
  return (
    <Wrapper>
      <Container>
        <Section>
            <Title>Privacy Policy</Title>
            <Date>Date effective: 26th June 2020</Date>
        </Section>
        <Section>
            <Paragraph>
                Thank you for choosing to be part of our community at Allus Interactive (&#34;Company&#34;, &#34;we&#34;, &#34;us&#34;, &#34;our&#34;). 
                We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this 
                privacy notice, or our practices with regards to your personal information, please contact us at 
                <Link href="mailto:allus.interactive@gmail.com"> allus.interactive@gmail.com</Link>.
            </Paragraph>
            <Paragraph>
                When you visit our website (the &#34;Website&#34;), use our mobile application(s), (the &#34;App&#34;) and more generally, use any of 
                our services (the &#34;Services&#34;, which includes the Website and any Apps) we appreciate that you are trusting us with your personal 
                information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what 
                information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, 
                as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately. 
            </Paragraph>
            <Paragraph>
                This privacy notice applies to all information collected through our Services (which, as described above, includes our Website and App), as 
                well as any related services, sales, marketing or events. 
            </Paragraph>
            <Paragraph>
                Please read this privacy notice carefully as it will help you understand what we do with the information that we collect. 
            </Paragraph>
        </Section>
        <Section>
            <Title>1. WHAT INFORMATION DO WE COLLECT?</Title>
        </Section>
        <Section>
            <Title>2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</Title>
        </Section>
        <Section>
            <Title>3. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</Title>
            <Paragraph>
                We will not transfer, store, and/or process your information in countries other than your own.
            </Paragraph>
        </Section>
        <Section>
            <Title>4. HOW LONG DO WE KEEP YOUR INFORMATION?</Title>
        </Section>
        <Section>
            <Title>5. HOW DO WE KEEP YOUR INFORMATION SAFE?</Title>
        </Section>
        <Section>
            <Title>6. WHAT ARE YOUR PRIVACY RIGHTS?</Title>
        </Section>
        <Section>
            <Title>7. CONTROLS FOR DO-NOT-TRACK FEATURES</Title>
        </Section>
        <Section>
            <Title>8. DO WE MAKE UPDATES TO THIS NOTICE?</Title>
        </Section>
        <Section>
            <Title>9. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Title>
        </Section>
      </Container>
    </Wrapper>
  );
}

export default PrivacyPolicy;
