import React from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import About from '../About/About';
import Contact from '../../../components/contact';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Chef/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;