import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const Span = styled.span``;

const SvgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const AddFavourite = () => {
    return (
		<Wrapper>
			<Span>Add to Favourites</Span>
            <SvgWrapper>
                <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    fill='red'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fill-rule='evenodd'
                        d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                    />
                </svg>
            </SvgWrapper>
		</Wrapper>
    );
};