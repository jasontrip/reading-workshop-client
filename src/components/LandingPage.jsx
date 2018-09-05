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
    </div>
  );
}
