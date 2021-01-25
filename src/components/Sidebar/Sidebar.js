import React from "react";
import {
	MenuList,
	SidebarLink,
	CloseIcon,
	SidebarContainer,
	Icon,
} from "./style";
import Hamburger from "../Hamburger/Hamburger";

export default function Sidebar(props) {
	return (
		<>
			<SidebarContainer isOpen={props.isOpen}>
				<div>
					<MenuList>
						<SidebarLink
							className={props.inHome ? "activeLink" : ""}
							to="home"
							smooth={true}
							onClick={props.toggle}
						>
							Home
						</SidebarLink>
						<SidebarLink to="projects" smooth={true} onClick={props.toggle}>
							Projects
						</SidebarLink>
						<SidebarLink to="about" smooth={true} onClick={props.toggle}>
							About
						</SidebarLink>
						<SidebarLink to="contact" smooth={true} onClick={props.toggle}>
							Contact
						</SidebarLink>
					</MenuList>
				</div>
			</SidebarContainer>
		</>
	);
}
