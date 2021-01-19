import styled from "styled-components/macro";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
const size = {
	xs: "320px",
	sm: "480px",
	md: "768px",
	lg: "1200px",
	xl: "1600px",
};
export const Navbar = styled.div`
	z-index: 98;
	position: fixed;
	top: 0; /* Position the navbar at the top of the page */
	width: 100%;
	@media only screen and (min-width: ${size.xs}) {
		padding: 1.5rem 2rem;
		@media only screen and (min-height: ${size.md}) {
			padding: 1rem 2.5rem;
		}
	}
	@media only screen and (min-width: ${size.sm}) {
		padding: 1.5rem 3rem;
	}
	@media only screen and (min-width: ${size.lg}) {
		padding: 1.5rem 3rem;
	}
	@media only screen and (max-width: 700px) {
		background: transparent;
		box-shadow: none;
	}
	background-color: ${({ backgroundColor }) => backgroundColor};
	text-align: center;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.08);
`;
export const NavList = styled.ul`
	list-style-type: none;
	margin: 0;
	text-align: center;
	@media only screen and (max-width: 700px) {
		display: none;
	}
	color: ${({ textColor }) => textColor};
`;
export const NavItem = styled.li`
	display: inline-block;
	margin: 0 20px;
`;
export const NavLink = styled(LinkScroll)`
	@media only screen and (min-width: ${size.lg}) {
		font-size: 26px;
	}
	@media only screen and (min-width: ${size.md}) {
		@media only screen and (min-height: ${size.md}) {
			font-size: 26px;
		}
	}
	// text-shadow: 0px 0px 3px #000000c2;
	font-size: 20px;
	position: relative;
	text-transform: uppercase;
	text-decoration: none;
	cursor: default;
	padding-bottom: 8px;
	font-weight: 600;
	:before,
	:after {
		content: "";
		position: absolute;
		bottom: 2px;
		left: 0;
		right: 0;
		height: 3px;
		background-color: ${({ color }) => color};
	}
	:before {
		opacity: 0;
		transform: translateY(-8px);
		transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275) k,
			opacity 0s;
	}
	:after {
		opacity: 0;
		transform: translateY(8px/2);
		transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
			opacity 0.2s;
	}
	:hover,
	:focus {
		:before,
		:after {
			opacity: 1;
			transform: translateY(0);
		}
		:before {
			transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
				opacity 0.2s;
		}
		:after {
			transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
				opacity 0s 0.2s;
		}
	}
`;

const Line = styled.div``;


export const Hamburger = styled.div`
	background: transparent;
	border: none;
	padding: 0.4375rem 0 0;
	outline: none;
	display: none;
	cursor: pointer;
	float: right;
  font-size: 1.8rem;
  
	-webkit-transition: color 1s ease-out;
	-moz-transition: color 1s ease-out;
	-o-transition: color 1s ease-out;
	transition: color 1s ease-out;
	@media only screen and (max-width: 700px) {
		display: block;
	}
`;
