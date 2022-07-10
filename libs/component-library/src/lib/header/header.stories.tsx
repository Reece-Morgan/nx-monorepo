import { Header } from './header';
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const linkData = [
  { url: '/rpgs', text: 'RPGs' },
  { url: '/platformers', text: 'Platformers' },
  { url: '/demos-and-prototypes', text: 'Demos/Prototype' },
];

export const AllusInteractiveHeader: ComponentStory<typeof Header> = () => {
  return (
    <Header 
      bgColour='#1f1f1f' 
      titleColour='#dd0207' 
      hoverColour='#fff' 
      mobileImageUrl='../../../../apps/allus-interactive/public/images/allus-logo.png' 
      desktopImageUrl='../../../../apps/allus-interactive/public/images/allus-banner.png'
      links={linkData}
    />
  )
}
