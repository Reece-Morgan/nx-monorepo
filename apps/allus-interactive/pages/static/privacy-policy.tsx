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

const SectionTitle = styled(Title)`
  font-weight: 800;
`;

const Subtitle = styled.h5`
  font-weight: 800;
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
            <SectionTitle>1. WHAT INFORMATION DO WE COLLECT?</SectionTitle>
        </Section>
        <Section>
            <SectionTitle>2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</SectionTitle>
            <Paragraph>
                We may process or share your data that we hold based on the following legal basis:
            </Paragraph>
            <Subtitle>Consent:</Subtitle>
            <Paragraph>
                We may process your data if you have given us specific consent to use your personal information in a specific purpose.
            </Paragraph>
            <Subtitle>Legitimate Interests:</Subtitle>
            <Paragraph>
                We may process your data when it is reasonably necessary to achieve our legitimate business interests.
            </Paragraph>
            <Subtitle>Performance of a Contract:</Subtitle>
            <Paragraph>
                Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
            </Paragraph>
            <Subtitle>Legal Obligations:</Subtitle>
            <Paragraph>
                We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental 
                requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including 
                in response to public authorities to meet national security or law enforcement requirements). 
            </Paragraph>
            <Subtitle>Vital Interests:</Subtitle>
            <Paragraph>
                We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential 
                violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal 
                activities, or as evidence in litigation in which we are involved. 
            </Paragraph>
            <Subtitle>Business Transfers:</Subtitle>
            <Paragraph>
                We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, 
                financing, or acquisition of all or a portion of our business to another company. 
            </Paragraph>
        </Section>
        <Section>
            <SectionTitle>3. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</SectionTitle>
            <Paragraph>
                We will not transfer, store, and/or process your information in countries other than your own.
            </Paragraph>
        </Section>
        <Section>
            <SectionTitle>4. HOW LONG DO WE KEEP YOUR INFORMATION?</SectionTitle>
            <Paragraph>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, 
                unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). 
            </Paragraph>
            <Paragraph>
                When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such 
                information, or, if this is not possible (for example, because your personal information has been stored in backup archives), 
                then we will securely store your personal information and isolate it from any further processing until deletion is possible. 
            </Paragraph>
        </Section>
        <Section>
            <SectionTitle>5. HOW DO WE KEEP YOUR INFORMATION SAFE?</SectionTitle>
            <Paragraph>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal 
                information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over 
                the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, 
                cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, 
                or modify your information. Although we will do our best to protect your personal information, transmission of personal information 
                to and from our Services is at your own risk. You should only access the Services within a secure environment. 
            </Paragraph>
        </Section>
        <Section>
            <SectionTitle>6. WHAT ARE YOUR PRIVACY RIGHTS?</SectionTitle>
            <Paragraph>
                If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you 
                also have the right to complain to your local data protection supervisory authority. You can find their contact details 
                <Link href="https://ec.europa.eu/info/law/law-topic/data-protection_en" target="_blank">here</Link>. 
            </Paragraph>
            <Paragraph>
                If you are resident in Switzerland, the contact details for the data protection authorities are available 
                <Link href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank">here</Link>. 
            </Paragraph>
        </Section>
        <Section>
            <SectionTitle>7. CONTROLS FOR DO-NOT-TRACK FEATURES</SectionTitle>
            <Paragraph>
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting 
                you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. 
                At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not 
                currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. 
                If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised 
                version of this privacy notice. 
            </Paragraph>
        </Section>
        <Section>
            <SectionTitle>8. DO WE MAKE UPDATES TO THIS NOTICE?</SectionTitle>
            <Paragraph>
                We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the 
                updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify 
                you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review 
                this privacy notice frequently to be informed of how we are protecting your information. 
            </Paragraph>
        </Section>
        <Section>
            <SectionTitle>9. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</SectionTitle>
            <Paragraph>
                If you have questions or comments about this notice, you may email us at <Link href="allus.interactive@gmail.com">
                allus.interactive@gmail.com</Link>.
            </Paragraph>
        </Section>
      </Container>
    </Wrapper>
  );
}

export default PrivacyPolicy;
