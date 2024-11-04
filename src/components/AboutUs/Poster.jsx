import React from 'react';
import AffiliateBanner from './Circlecomponent';

function Poster() {
  return (
    <div style={styles.bannerRow}>
    <AffiliateBanner 
      bannerText="Elaborate affiliate network across India 5000+ by 2025"
      imageSrc="./connection.png" // Add your image path here
      
    />
    <AffiliateBanner 
      bannerText="Provide Employment to more than 50000+ job seekers by 2025"
      imageSrc="./hiring.png" // Add your image path here
    />
    <AffiliateBanner 
      bannerText="Prime Manpower provider for voice jobs"
      imageSrc="./employment.png" // Add your image path here
    />
  </div>
  );
}

const styles = {
  bannerRow: {
    display: 'flex',
    flexDirection: 'row',   // Flex direction row for horizontal layout
    justifyContent: 'center',  // Centers banners horizontally
    alignItems: 'center',  // Centers banners vertically
    gap: '20px',  // Space between each banner
    padding: '20px',
  },
};

export default Poster;
