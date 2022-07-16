import { GameTile } from './game-tile';
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Components/GameTile",
    component: GameTile,
} as ComponentMeta<typeof GameTile>;

export const PlatformerGameTile: ComponentStory<typeof GameTile> = () => {
    return (
        <GameTile 
            imageUrl='/images/game-tile-placeholder.png'
            altText='Game Tile Placeholder'
            url='https://allusinteractive.itch.io'
            lineOne='Game Tile Component - Line One. A short sentence talking about the game.'
            lineTwo='Game Tile Component - Line Two. A short sentence talking about the game.'
        />
    )
}