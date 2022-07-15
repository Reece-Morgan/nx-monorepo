import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Container = styled.div`
    width: 85vw;
    margin: auto;
    padding: 0;
    @media(min-width: ${breakpointValues.sm}) {
        width: 90vw;
        max-height: 265px;
    }
    @media(min-width: ${breakpointValues.lg}) {
        max-width: 1200px;
        margin: auto;
    }
`;

const CarouselContainer = styled(Slider)`
    max-width: 1360px;
    max-height: 265px;
    margin-bottom: 30px;
    & > button {
        z-index: 1;
        height: 100%;
        width: 5vw;
        &:before {
            color: black;
        }
    }
    ul li button {
        &:before {
            font-size: 10px;
        }
    }
    .slick-prev {
        left: -40px;
        @media(min-width: ${breakpointValues.md}) {
            left: -60px;
        }
    }
    .slick-next {
        right: -40px;
        @media(min-width: ${breakpointValues.md}) {
            right: -60px;
        }
    }
    .slick-list {
        'overflow: hidden;';
    }
`;

interface Props {
    children: React.ReactNode;
    dots: boolean;
    draggable: boolean;
    infinite: boolean;
    autoplay: boolean;
    autoplaySpeed: number;
}

export const Carousel = ({ children, dots, draggable, infinite, autoplay, autoplaySpeed }: Props): JSX.Element => {
    const settings = {
        dots: dots,
        infinite: infinite,
        draggable: draggable,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: autoplaySpeed,
    };
    return (
        <Container>
            <CarouselContainer {...settings}>{children}</CarouselContainer>
        </Container>
    );
};
