import styled from 'styled-components';
import breakpointValues from '../../settings/breakpoints';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Container = styled.div`
    margin: auto;
    padding: 0;
    @media(min-width: ${breakpointValues.tablet}) {
        width: 90vw;
        max-height: 300px;
    }
    @media(min-width: ${breakpointValues.lg}) {
        max-width: 1200px;
        margin: auto;
    }
`;

const CarouselContainer = styled(Slider)`
    max-width: 1200px;
    max-height: 300px;
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
        left: 0px;
        display: none !important;
        @media(min-width: ${breakpointValues.tablet}) {
            left: -1vw;
            display: block !important;
        }
    }
    .slick-next {
        right: 0px;
        display: none !important;
        @media(min-width: ${breakpointValues.tablet}) {
            right: -1vw;
            display: block !important;
        }
    }
    .slick-list {
        'overflow: hidden;';
    }
`;

interface Props {
    children: React.ReactNode;
    autoplay: boolean;
    autoplaySpeed: number;
    dots: boolean;
    draggable: boolean;
    infinite: boolean;
    swipe: boolean;
}

export const Carousel = ({ children, autoplay, autoplaySpeed, dots, draggable, infinite, swipe }: Props): JSX.Element => {
    const settings = {
        autoplay: autoplay,
        autoplaySpeed: autoplaySpeed,
        dots: dots,
        infinite: infinite,
        draggable: draggable,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: swipe,
    };
    return (
        <Container>
            <CarouselContainer {...settings}>{children}</CarouselContainer>
        </Container>
    );
};
