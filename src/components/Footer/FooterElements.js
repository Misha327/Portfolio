import styled from "styled-components/macro";

const size = {
	xs: "320px",
	sm: "480px",
	md: "768px",
	lg: "1200px",
	xl: "1600px",
};

export const Container = styled.div`
	@media only screen and (min-width: 800px) {
		scroll-snap-align: start;
  }

  @media only screen and (min-height: ${size.md}) {

  }
  
  margin-top: auto;

`;

export const Wrapper = styled.div``;

export const IconWrapper = styled.div`
	display: flex;
`;
export const Icon = styled.div`
	display: flex;
	justify-content: center;

	@media only screen and (min-height: ${size.sm}) {
		font-size: 35px;
	}
	@media only screen and (min-height: ${size.md}) {
		font-size: 47px;

  }
	@media only screen and (max-width: ${size.sm}) {
		@media only screen and (max-height: 568px) {
			font-size: 26px;
		}
	}

	@media only screen and (min-width: ${size.xl}) {
		font-size: 47px;
	}
	color: white;
	margin-right: 10px;
	padding: 5px;
	display: flex;
	border-radius: 5px;
	box-shadow: 1px 1px 3px #00000075;
	transition: background-color 0.15s ease-in;
	:hover {
		background-color: #35d49f;
		box-shadow: none;
	}
`;
