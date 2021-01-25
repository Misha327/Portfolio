import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  background-color: white;
  align-items:center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

  left: 0;
  transition 0.4s ease-in-out;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const CloseIcon = styled.div`
	color: black;
	height: 35px;
	width: 35px;
	transition: transform 0.1s ease-in;
	:hover {
		transform: scale(1.3);
	}
	padding: 5px;
	user-select: none;
`;

export const Icon = styled.div`
	color: black;
	position: absolute;
	top: 30px;
	right: 53px;
	cursor: pointer;
	user-select: none;
`;

export const MenuList = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, 100px);
	text-align: center;
`;

export const SidebarLink = styled(LinkScroll)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
	color: black;
	position: relative;
	text-transform: uppercase;
	text-decoration: none;
	transition: 0.2 ease-in-out;
	font-size: 1.5rem;
	list-style: none;
	width: auto;
	transition: background-color 0.2s ease-in;
	:hover {
		background-color: #35d49f;
	}

	.activeLink {
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
