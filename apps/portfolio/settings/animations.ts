import { keyframes } from "styled-components";

export const NeonAnimation = keyframes`{
    0%,
    100% {
        text-shadow: 0 0 10px #ef00e3a8, 0 0 20px #ef00e3a8, 0 0 20px #ef00e3a8, 0 0 20px #ef00e3a8, 0 0 2px #fed128, 2px 2px 2px #806914;
        color: #f5efcb;
    }
    50% {
        text-shadow: 0 0 2px #800e0b, 0 0 5px #800e0b, 0 0 5px #800e0b, 0 0 5px #800e0b, 0 0 2px #800e0b, 4px 4px 2px #40340a;
        color: #eda0d3;
    }
}
`;
