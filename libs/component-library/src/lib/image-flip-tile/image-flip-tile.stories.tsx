
import { ImageFlipTile } from './image-flip-tile';
import { ImageFlipTileData } from './types/types';
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Components/ImageFlipTile",
    component: ImageFlipTile,
} as ComponentMeta<typeof ImageFlipTile>;

export const PortfolioImageFlipTile: ComponentStory<typeof ImageFlipTile> = ()=> {
    const project: ImageFlipTileData = {
            imageUrl: '/images/game-tile-placeholder.png',
            altText: 'Placeholder Image',
            description: 'This is a placeholder tile created for storybook',
            url: 'https://www.reecemorgan.co.uk',
            urlText: 'View Website'
    }
    return (
        <ImageFlipTile project={project} />
    )
};
