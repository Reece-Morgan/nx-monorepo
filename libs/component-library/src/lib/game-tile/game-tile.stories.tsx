import { GameTile } from './game-tile';
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Components/GameTile",
    component: GameTile,
} as ComponentMeta<typeof GameTile>;

export const PlatformerGameTile: ComponentStory<typeof GameTile> = () => {
    return (
        <GameTile />
    )
}