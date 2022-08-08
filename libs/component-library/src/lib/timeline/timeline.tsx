import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';

interface Props {
    data: {
        title: string;
        subtitle: string;
        description: string;
        date: string;
        colour: string;
        icon?: string;
    }[];
}

const Title = styled.h3`
    margin: 0;
`;

const Subtitle = styled.h4<{ colour: string }>`
    margin: 0;
    background-color: #fff;
    padding: 5px;
    color: ${(props) => props.colour};
    max-width: fit-content;
`;

const Description = styled.p`
    font-size: .8125rem;
    font-weight: 500;
    @media (min-width: ${breakpointValues.tablet}) {
        font-size: 1em;
    }
`;

export const Timeline = ({ data }: Props) => {
    return (
            <VerticalTimeline>
                {data && data.map((timeline, i) => (
                    <VerticalTimelineElement
                        key={i}
                        contentStyle={{ background: `${timeline.colour}`, color: '#fff' }}
                        contentArrowStyle={{ borderRight: `7px solid  ${timeline.colour}` }}
                        date={timeline.date}
                        iconStyle={{ background: `${timeline.colour}`, color: '#fff'}}
                    >
                        <Title>{timeline.title}</Title>
                        <Subtitle colour={timeline.colour}>{timeline.subtitle}</Subtitle>
                        <Description>{timeline.description}</Description>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
    )
};