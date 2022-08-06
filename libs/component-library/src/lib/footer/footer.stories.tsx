import { Footer } from "./footer";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Layout/Footer",
  component: Footer
} as ComponentMeta<typeof Footer>;

const allusIconData = [
  { imageUrl: "/images/facebook.svg", altText: "Facebook", url: "https://www.facebook.com/AllusInteractive/" },
  { imageUrl: "/images/instagram.svg", altText: "Instagram", url: "https://www.instagram.com/allusinteractive/" },
  { imageUrl: "/images/twitter.svg", altText: "Twitter", url: "https://twitter.com/AllusGameDev" },
  { imageUrl: "/images/itch-io.svg", altText: "itch.io", url: "https://allusinteractive.itch.io/" },
  { imageUrl: "/images/linkedin.svg", altText: "LinkedIn", url: "https://www.linkedin.com/in/reece-morgan-dev/" },
  { imageUrl: "/images/github.svg", altText: "Github",  url: "https://github.com/AllusInteractive"},
];

export const AllusInteractiveFooter: ComponentStory<typeof Footer> = () => {
  return (
    <Footer 
      bgColour="#1f1f1f" 
      textColour='#fff' 
      hoverColour='#dd0207' 
      hasLinks={true} 
      copyrightText='Copyright Allus Interactive 2017-2022' 
      socialMediaLinks={allusIconData} 
    />
  );
}


const portfolioIconData = [
  { imageUrl: "/images/facebook.svg", altText: "Facebook", url: "https://www.facebook.com/reece.morgan.1996/" },
  { imageUrl: "/images/twitter.svg", altText: "Twitter", url: "https://twitter.com/reecemorgandev" },
  { imageUrl: "/images/instagram.svg", altText: "Instagram", url: "https://www.instagram.com/reecemorgandev/" },
  { imageUrl: "/images/linkedin.svg", altText: "LinkedIn", url: "https://www.linkedin.com/in/reece-morgan-dev/" },
  { imageUrl: "/images/github.svg", altText: "Github",  url: "https://github.com/AllusInteractive"},
];

export const PortfolioFooter: ComponentStory<typeof Footer> = () => {
  return (
    <Footer 
      bgColour="#0a0517" 
      textColour='#fff' 
      hoverColour='#c31014' 
      hasLinks={false} 
      copyrightText='&copy; Reece Morgan 2022' 
      socialMediaLinks={portfolioIconData} 
    />
  );
}