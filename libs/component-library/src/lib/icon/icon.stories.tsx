import { Icon } from './icon';
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Components/Icon",
    component: Icon,
} as ComponentMeta<typeof Icon>;

export const FacebookIcon: ComponentStory<typeof Icon> = () => {
    return (
        <Icon
            iconUrl='/images/icon-placeholder.png'
            altText='Facebook Icon'
            url='https://www.facebook.com/AllusInteractive/'
        />
    )
}

export const TwitterIcon: ComponentStory<typeof Icon> = () => {
    return (
        <Icon
            iconUrl='/images/icon-placeholder.png'
            altText='Twitter Icon'
            url='https://twitter.com/AllusGameDev'
        />
    )
}

export const InstagramIcon: ComponentStory<typeof Icon> = () => {
    return (
        <Icon
            iconUrl='/images/icon-placeholder.png'
            altText='Instagram Icon'
            url='https://www.instagram.com/allusinteractive/'
        />
    )
}

export const ItchIcon: ComponentStory<typeof Icon> = () => {
    return (
        <Icon
            iconUrl='/images/icon-placeholder.png'
            altText='itch.io Icon'
            url='https://allusinteractive.itch.io/'
        />
    )
}