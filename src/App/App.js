import React from 'react';
import './App.scss';
import NavigationBar from '../NavigationBar/NavigationBar';
import AboutMe from '../AboutMe/AboutMe';
import Socials from '../Socials/Socials';
import Footer from '../Footer/Footer';

function App() {
	return (
		<>
			<main>
				<NavigationBar />
				<section className='title-section'>
					<p className='introduction'>Hello! ¡Hola! Bonjour! My name is</p>
					<h1>Edwin Del Bosque.</h1>
					<h1 className='sub-header-title'>I build things for the web.</h1>
					<p className='description-title'>
						I'm a{' '}
						<span>
							<b>front-end engineer</b>
						</span>{' '}
						based in Denver, CO specializing in building (and occasionally
						designing) exceptional, high-quality websites and applications.
					</p>
					<div>
						<a href='mailto:edwinbosq@gmail.com'>
							<button className='contact-button'>Get in touch</button>
						</a>
						<a
							href='https://drive.google.com/file/d/1xHc5laE37pDg4wb9mIK8OmBdcrEeechw/view'
							target='_blank'
							rel='noopener noreferrer'>
							<button className='contact-button'>Resume</button>
						</a>
					</div>
				</section>
			</main>
			<AboutMe />
			<Socials />
			<Footer />
		</>
	);
}

export default App;