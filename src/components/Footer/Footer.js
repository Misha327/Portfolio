import React from "react";
import { Container, Wrapper, Icon, IconWrapper } from "./FooterElements";

import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<>
			<Container>
					<IconWrapper>
							<a href={"https://github.com/Misha327"}>
						<Icon>
								<FaGithub></FaGithub>
						</Icon>
							</a>
							<a href={"https://www.instagram.com/mish.327/"}>
						<Icon>
								<FaInstagram></FaInstagram>
						</Icon>
							</a>
					</IconWrapper>
			</Container>
		</>
	);
}
