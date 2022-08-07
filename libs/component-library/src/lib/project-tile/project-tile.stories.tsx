import { ProjectTile } from './project-tile';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from 'styled-components';

export default {
    title: "Components/ProjectTile",
    component: ProjectTile,
} as ComponentMeta<typeof ProjectTile>;

export const PortfolioProjectTile: ComponentStory<typeof ProjectTile> = ()=> {
    return (
        <ProjectTile 
            imageUrl='/images/game-tile-placeholder.png'
            altText='Placeholder Image'
        />
    )
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const PortfolioProjectTiles: ComponentStory<typeof ProjectTile> = ()=> {
    return (
        <Wrapper>
            <ProjectTile 
                imageUrl='/images/game-tile-placeholder.png'
                altText='Placeholder Image'
            />
            <ProjectTile 
                imageUrl='/images/game-tile-placeholder.png'
                altText='Placeholder Image'
            />
            <ProjectTile 
                imageUrl='/images/game-tile-placeholder.png'
                altText='Placeholder Image'
            />
        </Wrapper>
    )
};
