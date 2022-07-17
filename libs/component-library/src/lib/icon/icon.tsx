import styled from 'styled-components';

interface Props {
    iconUrl: string;
    altText: string;
    url: string;
}

const SocialMediaLink = styled.a``;

const SocialMediaIcon = styled.img`
    width: 50px;
    height: 50px;
`;

export const Icon = ({ iconUrl, altText, url }: Props) => {
    return (
        <SocialMediaLink href={url} target='_blank'>
            <SocialMediaIcon src={iconUrl} alt={altText} />
        </SocialMediaLink>
    )
}