import { Carousel } from './carousel';
import { SingleTile } from './tiles/single-tile';
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Components/Carousel",
    component: Carousel,
} as ComponentMeta<typeof Carousel>;

export const SingleTileCarousel: ComponentStory<typeof Carousel> = () => {
    return (
        <Carousel 
            autoplay={true}
            autoplaySpeed={5000}
            dots={true}
            draggable={true}
            infinite={true}
            swipe={true}
        >
            <SingleTile imageUrl='/images/carousel-placeholder.png' />
            <SingleTile imageUrl='/images/carousel-placeholder.png' />
            <SingleTile imageUrl='/images/carousel-placeholder.png' />
        </Carousel>
    )
}