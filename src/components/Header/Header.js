import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { Navbar, Hamburger, NavLink, NavList, NavItem } from "./styles/styles";

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			scrollPos: 0,
			inHome: true,
			inProjects: false,
			inAbout: false,
			inContact: false,
			color: "white",
			textColor: "black",
			underlineColor: "#35d49f",
		};
		this.handleScroll = this.handleScroll.bind(this);
	}

	// Adds an event listener when the component is mount.
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	// Remove the event listener when the component is unmount.
	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}
	// Hide or show the menu.
	handleScroll = () => {
    const scrollBot =
    document.body.getBoundingClientRect().top === 0
    ? document.body.getBoundingClientRect().top
    : -document.body.getBoundingClientRect().top;
    
    console.log(scrollBot, this.props.homeHeight);
		if (scrollBot >= 0 && scrollBot <= this.props.homeHeight) {
			this.setState({
				inHome: true,
				inProjects: false,
				inAbout: false,
				inContact: false,
				color: "white",
				textColor: "black",
				underlineColor: "#35d49f",
			});
		}
		if (
			scrollBot >= (this.props.homeHeight * 95) / 100 &&
			scrollBot <= (this.props.projectHeight * 24) / 25
		) {
			this.setState({
				inProjects: true,
				inHome: false,
				inAbout: false,
				inContact: false,
				color: "#35d49f",
				textColor: "white",
				underlineColor: "white",

				show: true,
			});
		}
		if (
			scrollBot >= (this.props.projectHeight * 24) / 25 &&
			scrollBot <= this.props.aboutHeight
		) {
			this.setState({
				inAbout: true,
				inProjects: false,
				inHome: false,
				inContact: false,
				color: "white",
				textColor: "black",
				underlineColor: "#35d49f",

				show: true,
			});
		}
		if (
			scrollBot >= (this.props.aboutHeight * 95) / 100 &&
			scrollBot <= this.props.contactHeight
		) {
			this.setState({
				inContact: true,
				inAbout: false,
				inHome: false,
				inAbout: false,
				color: "#08415C",
				textColor: "white",
				underlineColor: "#35d49f",

				show: true,
			});
		}
	};

	render() {
		const { toggle, homeRef } = this.props;
		return (
			<>
				<Transition>
					<Navbar
						backgroundColor={this.state.color}
						className={this.state.show ? "active" : "hidden"}
					>
						{" "}
						<Hamburger onClick={toggle}>
							<FontAwesomeIcon
								style={{ color: this.state.textColor }}
								icon={faBars}
							/>
						</Hamburger>
						<NavList textColor={this.state.textColor}>
							<NavItem disabled>
								<NavLink
									color={this.state.underlineColor}
									className={this.state.inHome ? "activeLink" : ""}
									smooth={true}
									to="home"
								>
									Home
								</NavLink>
							</NavItem>
							<NavItem disabled>
								<NavLink
									color={this.state.underlineColor}
									className={this.state.inProjects ? "activeLink" : ""}
									to="projects"
									smooth={true}
								>
									Projects
								</NavLink>
							</NavItem>
							<NavItem disabled>
								<NavLink
									color={this.state.underlineColor}
									className={this.state.inAbout ? "activeLink" : ""}
									to="about"
									smooth={true}
								>
									About
								</NavLink>
							</NavItem>
							<NavItem disabled>
								<NavLink
									color={this.state.underlineColor}
									className={this.state.inContact ? "activeLink" : ""}
									to="contact"
									smooth={true}
								>
									Contact
								</NavLink>
							</NavItem>
						</NavList>
					</Navbar>
				</Transition>
			</>
		);
	}
}

Header.Hamburger = function HeaderHamburger({ children }) {
	return <Hamburger>{children}</Hamburger>;
};

const Transition = styled.div`
	.active {
		visibility: visible;
		transition: all 0.2s ease-in;
	}
	.hidden {
		visibility: hidden;
		transition: all 0.2s ease-out;
		transform: translate(0, -100%);
  }
  .activeLink  {
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
  }
`;
