import React from "react";
import {
	MenuList,
	SidebarLink,
	CloseIcon,
	SidebarContainer,
	Icon,
	TextContainer,
	Text,
} from "./style";
import Hamburger from "../Hamburger/Hamburger";

export default function Sidebar(props) {
	return (
		<>
			<SidebarContainer isOpen={props.isOpen}>
				<div>
					<MenuList>
						<SidebarLink to="home" smooth={true} onClick={props.toggle}>
							<TextContainer>
								<Text className={props.inHome ? "activeLink" : ""}>Home</Text>
							</TextContainer>
						</SidebarLink>
						<SidebarLink
							to="projects"
							smooth={true}
							onClick={props.toggle}
						>
							<TextContainer>
								<Text className={props.inProjects ? "activeLink" : ""}>
									Projects
								</Text>
							</TextContainer>
						</SidebarLink>
						<SidebarLink
							to="about"
							smooth={true}
							onClick={props.toggle}
						>
							<TextContainer>
								<Text className={props.inAbout ? "activeLink" : ""}>About</Text>
							</TextContainer>
						</SidebarLink>
						<SidebarLink
							to="contact"
							smooth={true}
							onClick={props.toggle}
						>
							<TextContainer>
								<Text className={props.inContact ? "activeLink" : ""}>
									Contact
								</Text>
							</TextContainer>
						</SidebarLink>
					</MenuList>
				</div>
			</SidebarContainer>
		</>
	);
}
