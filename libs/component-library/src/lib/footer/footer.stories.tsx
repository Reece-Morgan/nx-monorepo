import { Footer } from "./footer";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Footer",
  component: Footer
} as ComponentMeta<typeof Footer>;

export const AllusInteractiveFooter: ComponentStory<typeof Footer> = () => {
  return <Footer bgColour="#1f1f1f" textColour='#fff' hoverColour='#dd0207' />;
}
