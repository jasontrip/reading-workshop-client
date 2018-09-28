import React from 'react';
import TopAppBar from './TopAppBar';
import ScreenshotAndExplanation from './ScreenshotAndExplanation';
import BackgroundImagePath from '../images/library.jpg';
import RosterImagePath from '../images/roster.png';
import WorkshopImagePath from '../images/workshop.png';
import WorkshopsImagePath from '../images/workshops.png';

const landingHeader = {
  padding: '60px 10px 40px 10px',
  height: '450px',
  backgroundImage: `url(${BackgroundImagePath}`,
  color: 'white',
};

const footer = {
  backgroundColor: '#333333',
  color: '#FFFFFF',
  textAlign: 'right',
  padding: '40px 20px 40px 0',
};

export default function LandingPage() {
  return (
    <div>
      <TopAppBar pageTitle="Readers Workshop" />
      <header style={landingHeader}>
        <h1>Readers Workshop</h1>
      </header>

      <ScreenshotAndExplanation
        imagePath={WorkshopImagePath}
        alt="Workshop Screenshot"
        text="Take notes on each Reader's Workshop session. Add students from your roster to mark that they attended."
      />
      <ScreenshotAndExplanation
        imagePath={WorkshopsImagePath}
        alt="Workshops Screenshot"
        text="View a historical list of all of your workshops."
      />
      <ScreenshotAndExplanation
        imagePath={RosterImagePath}
        alt="Roster Screenshot"
        text="Add and remove students from your roster."
      />
      <footer style={footer}>
        <div>Built with ReactJs and MaterialUI.</div>
        <div>
          <span>See the code! </span>
          <a href="https://github.com/jasontrip/reading-workshop-client">client</a> - 
          <a href="https://github.com/jasontrip/reading-workshop-server">server</a>
        </div>

      </footer>
    </div>
  );
}
