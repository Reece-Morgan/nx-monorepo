import { ProjectTile } from './project-tile';
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Components/ProjectTile",
    component: ProjectTile,
} as ComponentMeta<typeof ProjectTile>;

export const PortfolioProjectTile: ComponentStory<typeof ProjectTile> = ()=> {
    return (
        <ProjectTile 
            imageUrl='/images/game-tile-placeholder.png'
            altText='Placeholder Image'
            description='This is a placeholder tile created for storybook'
            url='https://www.reecemorgan.co.uk'
            urlText='View Website'
        />
    )
};
