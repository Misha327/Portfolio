import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header/Header";
import HomeSection from "../components/HomeSection";
import ProjectSection from "../components/ProjectSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ReactDOM from "react-dom";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
	apiKey: "AIzaSyB65IhtuJXdKEqFxnH9rOhIAZY4D7HnmVQ",
	authDomain: "misha-vasiljev.firebaseapp.com",
	projectId: "misha-vasiljev",
	storageBucket: "misha-vasiljev.appspot.com",
	messagingSenderId: "697374592251",
	appId: "1:697374592251:web:0fe4337db9506cd3b5b45e",
	measurementId: "G-8VSDVEX3Y8",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const LoadingProjects = (props) => {
	return function WrapperFunction(props) {
		const messagesRef = firestore.collection("projects");
		const query = messagesRef.limit(25);

		const [values, loading, error] = useCollectionData(query, {
			idField: "id",
		});

		return <Home {...props} loading={loading} values={values} />;
	};
};

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			hamburgerActive: false,

			projectVisible: false,
			cardsVisible: false,
			aboutVisible: false,

			photoVisible: false,
			contactVisible: false,
			formVisible: false,
			projectWinSize: 0,
			aboutTextVisible: false,

			values: [],

			section: null,
			homeHeight: 0,
			projectHeight: 0,
			aboutHeight: 0,
			contactHeight: 0,
		};

		this.homeRef = React.createRef();
		this.projectRef = React.createRef();
		this.aboutRef = React.createRef();
		this.contactRef = React.createRef();

		this.myRef = [];

		this.activeWindow = this.activeWindow.bind(this);
	}

	componentDidMount() {
		this.calculateWindowSizes();
		// console.log(this.projectRef.current.offsetHeight);
		window.addEventListener("scroll", this.activeWindow);
		window.addEventListener("resize", this.calculateWindowSizes);
	}

	// Remove the event listener when the component is unmount.
	componentWillUnmount() {
		window.removeEventListener("scroll", this.activeWindow);
	}

	calculateWindowSizes = () => {
		const homeHeight = this.homeRef.current.offsetHeight;
		const projectHeight = this.projectRef.current.offsetHeight;
		const aboutHeight = this.aboutRef.current.offsetHeight;
		const contactHeight = this.contactRef.current.offsetHeight;

		this.setState((prevState) => ({
			homeHeight: homeHeight,
			projectHeight: projectHeight + homeHeight,
			aboutHeight: homeHeight + projectHeight + aboutHeight,
			contactHeight: homeHeight + projectHeight + aboutHeight + contactHeight,
		}));
		this.activeWindow();
	};

	activeWindow = () => {
		const scrollBot = -document.body.getBoundingClientRect().top;

		// Project section
		if (
			scrollBot >= this.state.homeHeight / 3 &&
			scrollBot <= this.state.projectHeight
		) {
			this.setState({ projectVisible: true });
		}
		if (
			scrollBot >= (this.state.homeHeight * 2) / 3 &&
			scrollBot <= this.state.projectHeight
		) {
			this.setState({ cardsVisible: true });
		}
		// 3rd
		if (
			scrollBot >= (this.state.projectHeight * 4) / 6 &&
			scrollBot <= this.state.aboutHeight
		) {
			this.setState({ aboutVisible: true });
		}
		if (
			scrollBot >= (this.state.projectHeight * 5) / 6 &&
			scrollBot <= this.state.aboutHeight
		) {
			this.setState({ photoVisible: true });
			this.setState({ aboutTextVisible: true });
		}

		if (
			scrollBot >= (this.state.aboutHeight * 5) / 6 &&
			scrollBot <= this.state.contactHeight
		) {
			this.setState({ contactVisible: true });
		}
		if (
			scrollBot >= (this.state.aboutHeight * 6) / 7 &&
			scrollBot <= this.state.contactHeight
		) {
			this.setState({ formVisible: true });
		}
	};

	toggle = () => {
		this.setState((state) => {
			return {
				hamburgerActive: !state.hamburgerActive,
			};
		});
	};

	render() {
		return (
			<div style={{ width: "100%" }}>

				<Header
					toggle={this.toggle}
					hamburgerActive={this.state.hamburgerActive}
					homeHeight={this.state.homeHeight}
					projectHeight={this.state.projectHeight}
					aboutHeight={this.state.aboutHeight}
					contactHeight={this.state.contactHeight}
				/>
				<div ref={this.homeRef}>
					<HomeSection></HomeSection>
				</div>
				<div ref={this.projectRef}>
					<ProjectSection
						isVisible={this.state.projectVisible}
						cardsVisible={this.state.cardsVisible}
						projects={this.props.values}
						loading={this.props.loading}
					></ProjectSection>
				</div>
				<div ref={this.aboutRef}>
					<AboutSection
						textVisible={this.state.aboutTextVisible}
						photoIsVisible={this.state.photoVisible}
						isVisible={this.state.aboutVisible}
					></AboutSection>
				</div>
				<div ref={this.contactRef}>
					<ContactSection
						formVisible={this.state.formVisible}
						isVisible={this.state.contactVisible}
					></ContactSection>
				</div>
			</div>
		);
	}
}

export default LoadingProjects(Home);
