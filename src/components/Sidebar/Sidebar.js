import React from "react";
import {
	MenuList,
	SidebarLink,
	CloseIcon,
	SidebarContainer,
	Icon,
} from "./style";

export default function Sidebar({ isOpen, toggle }) {
	return (
		<>
			<SidebarContainer isOpen={isOpen}>
				<Icon onClick={toggle}>
					<CloseIcon />
				</Icon>
				<div>
					<MenuList>
						<SidebarLink to="home" smooth={true} onClick={toggle}>
							Home
						</SidebarLink>
						<SidebarLink to="projects" smooth={true} onClick={toggle}>
							Projects
						</SidebarLink>
						<SidebarLink to="about" smooth={true} onClick={toggle}>
							About
						</SidebarLink>
						<SidebarLink to="contact" smooth={true} onClick={toggle}>
							Contact
						</SidebarLink>
					</MenuList>
				</div>
			</SidebarContainer>
		</>
	);
}
