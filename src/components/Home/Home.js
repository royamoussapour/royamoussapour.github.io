import React from 'react';
import './Home.scss';
import Fade from 'react-reveal/Fade';

const Home = () => {
	return (
		<>
			<Fade cascade delay={600}>
				<section className='title-section'>
					<p className='introduction'>Hello! ¡Hola! My name is</p>
					<h1>Edwin Del Bosque.</h1>
					<h1 className='sub-header-title'>Building things for the web.</h1>
					<p className='description-title'>
						I'm a{' '}
						<span>
							<b>Front-End Engineer</b>
						</span>{' '}
						and UI design enthusiast based in Denver, CO (but open to new
						adventures!). My areas of expertise are JavaScript ES6+, UX/UI
						design, and Test-Driven Development.
					</p>
					<div>
						<Fade bottom cascade delay={800}>
							<a href='mailto:edwinbosq@gmail.com' className='button-link'>
								<button className='contact-button'>Get In Touch</button>
							</a>
							<a
								href='https://drive.google.com/file/d/1vEM8J6iY6GSkeWwI75u4RKJkmavw-XmO/view?usp=sharing'
								target='_blank'
								rel='noopener noreferrer'
								className='button-link'>
								<button className='contact-button'>Resume</button>
							</a>
						</Fade>
					</div>
				</section>
			</Fade>
			<div className='orb'></div>
		</>
	);
};

export default Home;