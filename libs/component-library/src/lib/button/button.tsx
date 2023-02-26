import styled from "styled-components"

const BaseButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    cursor: pointer;
    font-weight: 800;
    border: 2px solid #000d68;
    background-color: #000d68;
    color: #fff;
    :hover {
        background-color: #fff;
        color: #000d68;
    }
`;

const Primary = styled(BaseButton)``;

const Secondary = styled(BaseButton)`
    background-color: #fff;
    color: #000d68;
    :hover {
        background-color: #000d68;
        color: #fff;
    }
`;

interface Props {
    variant: 'primary' | 'secondary'
    onClick: () => void;
    text: string;
}

const ButtonMap = {
    primary: Primary,
    secondary: Secondary,
}

export const Button = ({ variant, onClick, text }: Props) => {
    const StyledButton = ButtonMap[variant];
    return (
        <StyledButton onClick={onClick}>
            {text}
        </StyledButton>
    )
}