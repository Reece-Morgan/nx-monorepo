import { StickyNav } from "./sticky-nav";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/StickyNav",
  component: StickyNav
} as ComponentMeta<typeof StickyNav>;

const linkData = [
  { url: '#about', text: 'About' },
  { url: '#projects', text: 'Projects' },
  { url: '#journey', text: 'Journey' },
];

export const AllusInteractiveFooter: ComponentStory<typeof StickyNav> = () => {
  return (
    <StickyNav 
        bgColour='#000d68'
        linkColour='#ffffff'
        hoverColour="#c31014"
        links={linkData}
    />
  );
}
