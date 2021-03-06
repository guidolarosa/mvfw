import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
import Rellax from 'rellax';

import Navbar from './../components/Navbar';
import HomepageHero from './../components/HomepageHero';
import EventInfo from '../components/EventInfo';
import EventSchedule from '../components/EventSchedule';
import Zones from '../components/Zones';
import Footer from '../components/Footer';
import TextBanner from '../components/TextBanner';
import LowerBanner from '../components/LowerBanner';

export default function Home() {

	useEffect(() => {
		// Aos.init();
		new Rellax('.rellax', {
			speed: -2,
			center: true,


		});
	}, []);

	return (
		<>
			<Head>
				<title>Metaverse Fashion Week | Decentraland</title>
				<meta name="description" content="Get a front row seat at the catwalk" />
				<link rel="icon" href="/favicon.svg" />
			</Head>
			<StyledHome>
				<header>
					<Navbar dataAos="fade-down" />
					<HomepageHero dataAos="fade-up" />
				</header>
				<main>
					<EventInfo />
					<TextBanner />
					<EventSchedule />
					<LowerBanner />
					<Zones />
				</main>
			</StyledHome>

			<Footer/>
		</>
	)
}

const StyledHome = styled.main`
	overflow-x: hidden;
	header {
		height: 100vh;
		display: flex;
		flex-direction: column;
		min-height: 980px;
		/* margin-bottom: 320px; */
		padding-top: 120px;
	}
	@media screen and (max-width: ${props => props.theme.breakpoints.m}) {
		header {
			min-height: 760px;
		}
	}
`;