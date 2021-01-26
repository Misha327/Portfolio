import styled from "styled-components/macro";
import { Link } from "react-scroll";

const size = {
	xs: "320px",
	sm: "480px",
	md: "768px",
	lg: "1200px",
	xl: "1600px",
};

const heightSize = {
	xs: "320px",
	sm: "480px",
	md: "720px",
	lg: "900px",
	xl: "1080px",
};

export const Outer = styled.div`
	background-color: ${({ backgroundColor }) => backgroundColor};
	display: flex;
	scroll-snap-type: y mandatory;

	min-height: ${({ minHeight }) => minHeight};
	padding: 1.875rem 0.9375rem 1.875rem;
	flex-wrap: wrap;
	@media only screen and (min-width: ${size.sm}) {
		padding: 3.125rem 1.875rem 1.7rem;
	}
	@media only screen and (min-width: ${size.md}) {
		padding: 2.5rem 5rem 1.7rem;
	}
	@media only screen and (min-height: 590px) {
		padding: 30px 0.9375rem 1.375rem;
	}

	align-items: center;
	width: 100%;
	flex-direction: column;

	height: 100%;
	@media only screen and (min-height: 44.25rem) {

	}
	justify-content: ${({ justify }) => justify};
`;

export const Content = styled.div`
	scroll-snap-align: start;

	display: flex;
	background-color: transparent;
	justify-content: ${({ justify }) => justify};
	align-items: ${({ alignment }) => alignment};
	color: ${({ color }) => color};
	flex-direction: column;
	height: 100%;
	position: relative;
	@media only screen and (min-width: ${size.sm}) {
		width: 400px;
	}
	@media only screen and (min-width: 570px) {
		width: 500px;
	}
	@media only screen and (min-width: ${size.md}) {
		width: 700px;
	}
	@media only screen and (min-width: ${size.lg}) {
		width: 1000px;
	}
	@media only screen and (min-width: ${size.xl}) {
		width: 1200px;
	}
`;

export const TextWrapper = styled.div`
	position: relative;
	pointer-events: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	display: -webkit-box;

	display: -ms-flexbox;

	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	text-align: center;
`;

export const WelcomeTitle = styled.h1`
	position: relative;

	text-transform: uppercase;
	font-size: 2.3125rem;

	@media only screen and (min-width: 30rem) {
		@media only screen and (min-height: ${heightSize.lg}) {
			font-size: 2.9375rem;
		}
	}
	@media only screen and (min-width: ${heightSize.md}) {
	}
	// iPhone X
	@media only screen and (max-width: ${size.xs}) {
		font-size: 1.875rem;
	}
	@media only screen and (min-width: ${size.sm}) {
		font-size: 40px;

		@media only screen and (min-height: ${size.md}) {
		}
		@media only screen and (min-height: ${size.lg}) {
      font-size: 50px;
		}
	}
	@media only screen and (min-width: ${size.md}) {
		// font-size: 2.9375rem;

		font-size: 3.75rem;
		// @media only screen and (max-height: ${size.md}) {
		// }
		// @media only screen and (min-height: ${size.md}) {
		// 	font-size: 60px;
		// }
	}
	@media only screen and (min-width: ${size.lg}) {
		@media only screen and (max-height: ${heightSize.lg}) {
		}
		@media only screen and (min-height: ${size.lg}) {
		}
	}
`;

export const UnderlinedTitle = styled.h1`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	@media only screen and (min-width: ${size.xs}) {
		margin-top: 30px;
		margin-bottom: 1.875rem;
		font-size: 1.875rem;

		@media only screen and (min-height: ${heightSize.md}) {
			margin-top: 65px;
			font-size: 2.3125rem;
		}
	}
	@media only screen and (min-width: ${size.sm}) {
    
		font-size: 3.125rem;
		margin-top: 3.75rem;
	}
	@media only screen and (min-width: ${size.md}) {
		@media only screen and (min-height: ${size.xl}) {
			margin-top: 4.375rem;
		}
	}
	// @media only screen and (min-width: ${size.lg}) {
	//   font-size: 3.1875rem;
	// }
	@media only screen and (min-width: ${size.lg}) {
		font-size: 3.125rem;
		margin-top: 4.375rem;
		margin-bottom: 1.875rem;
		@media only screen and (max-height: ${heightSize.md}) {
			font-size: 2.5rem;
			margin-top: 3.75rem;
			margin-bottom: 1.875rem;
		}
		@media only screen and (min-height: ${heightSize.md}) {
			margin-top: 4.375rem;
		}
	}
	@media only screen and (min-width: ${size.xl}) {
		font-size: 3.375rem;
		margin-top: 4.6875rem;
	}
	@media only screen and (min-height: ${size.lg}) {
		margin-bottom: 3.125rem;
		margin-top: 100px;
	}

	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	font-size: 1.875rem;
	text-align: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	text-transform: uppercase;
	padding-bottom: 0.625rem;
	margin-bottom: 1.875rem;

	position: relative;
	:after {
		bottom: 0;
		content: "";
		display: block;
		height: 0.125rem;
		left: 50%;
		position: absolute;
		transform: translate(-50%, 0);
		@media only screen and (min-width: ${size.xl}) {
			width: 8rem;
		}
		width: 6rem;
		background-color: ${({ color }) => color};
	}
`;

export const SecondaryText = styled.p`
	// pointer-events: none;
	text-align: center;
	margin-bottom: 1.25rem;

	@media only screen and (min-width: ${size.xs}) {
		font-size: 1.25rem;

		@media only screen and (min-height: 41.6875rem) {
		}
		@media only screen and (min-height: ${size.lg}) {
			font-size: 1.5625rem;
		}
	}

	@media only screen and (min-width: ${size.sm}) {
		padding: 0 2rem;
		font-size: 21px;

		@media only screen and (min-height: ${size.md}) {
			font-size: 21px;
		}
		@media only screen and (min-height: ${size.lg}) {
			font-size: 1.6875rem;
		}
	}
	@media only screen and (min-width: ${size.md}) {
		font-size: 2rem;
		@media only screen and (min-height: ${size.md}) {
			margin: ${({ margin }) => margin};
		}
		@media only screen and (min-height: ${size.md}) {
		}
		@media only screen and (min-height: 56.25rem) {
		}
	}

	@media only screen and (min-height: ${heightSize.md}) {
		@media only screen and (min-width: ${size.lg}) {
			font-size: 2rem;
		}
	}
	@media only screen and (min-height: ${heightSize.lg}) {
		@media only screen and (min-width: ${size.lg}) {
			font-size: 2rem;
		}
	}
`;

export const Text = styled.p`
	// pointer-events: none;
	text-align: center;
	margin: ${({ margin }) => margin};

	@media only screen and (min-width: ${size.xs}) {
		@media only screen and (min-height: ${heightSize.xs}) {
			font-size: 1.0625rem;
		}
		@media only screen and (min-height: ${heightSize.md}) {
			font-size: 1.25rem;
		}

		@media only screen and (min-height: 41.6875rem) {
		}
		@media only screen and (min-height: ${heightSize.lg}) {
			font-size: 1.5625rem;
		}
	}

	@media only screen and (min-width: ${size.sm}) {
		font-size: 1.25rem;

		@media only screen and (min-height: ${size.md}) {
			font-size: 1.5rem;
		}
	}
	@media only screen and (min-width: ${heightSize.lg}) {
		@media only screen and (min-height: ${size.md}) {
			margin: ${({ margin }) => margin};
		}
		@media only screen and (min-height: 56.25rem) {
			font-size: 2rem;
		}
	}
	@media only screen and (min-width: ${size.lg}) {
		@media only screen and (min-height: ${heightSize.sm}) {
			font-size: 1.5rem;
		}
	}

	@media only screen and (min-height: ${heightSize.md}) {
		@media only screen and (min-width: ${size.lg}) {
			font-size: 1.6875rem;
		}
	}
	@media only screen and (min-height: ${heightSize.lg}) {
		@media only screen and (min-width: ${size.lg}) {
			font-size: 2rem;
		}
	}
`;

export const Image = styled.img`
	width: 12.5rem;
	height: 12.5rem;
	@media only screen and (min-height: ${size.md}) {
		width: 15.9375rem;
		height: 15.9375rem;
		margin: 0 0 1.875rem;
		@media only screen and (min-width: ${size.xs}) {
			margin: 0 0 1.25rem;
		}
	}
	@media only screen and (min-width: 46.5625rem) {
		width: 15.9375rem;
		height: 15.9375rem;
		margin: 0 0 0.625rem;
	}
	@media only screen and (min-width: ${size.lg}) {
		width: 18.75rem;
		height: 18.75rem;
		margin: 0 0 1.875rem;

		@media only screen and (max-height: ${size.md}) {
			width: 15.9375rem;
			height: 15.9375rem;
		}
	}
	@media only screen and (min-width: ${size.xl}) {
		width: 350px;
		height: 350px;
	}
	@media only screen and (min-height: ${size.lg}) {
		width: 420px;
		height: 420px;
	}
	border-radius: 50%;
	margin: 0 0 1.25rem;
	border: 0.1875rem solid white;
	-webkit-box-shadow: 0rem 0.125rem 0.3125rem #00000063;
	box-shadow: 0rem 0.125rem 0.3125rem #00000063;
`;

export const Button = styled.button`
	border: 0.1875rem solid black;
	padding: 0.625rem 1.5625rem;
	background-color: #ffffff9e;
	outline: none;
	font-size: 1.125rem;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	position: relative;
	-o-transition: background-color 0.2s linear;
	transition: background-color 0.2s linear;
	font-weight: bold;
	-webkit-transition: background-color 0.2s linear;

	-webkit-box-shadow: none;
	box-shadow: none;
	:hover {
		-webkit-box-shadow: 0.125rem 0.125rem 0.3125rem #00000080;
		box-shadow: 0.125rem 0.125rem 0.3125rem #00000080;
		background-color: #35d49f;
		border: 0.1875rem solid #35d49f;
		.spinner {
			fill: #35d49f;
			-webkit-transform: rotate(90deg);
			-ms-transform: rotate(90deg);
			transform: rotate(90deg);
		}
	}
	:active {
		-webkit-box-shadow: none;
		box-shadow: none;
	}

	@media only screen and (min-width: ${size.md}) {
		font-size: 1.625rem;
		padding: 0.8125rem 1.6875rem;
	}
`;

export const Anchor = styled.a``;

export const Icon = styled.img``;

export const ButtonText = styled.p`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
`;
