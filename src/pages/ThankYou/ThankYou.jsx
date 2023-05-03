import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import thankyou from "../../assets/104368-thank-you.json"

const ThankYou = () => {
  return (
    <div className='flex justify-center items-center'>
      <Player
          autoplay
          loop
          src={thankyou}
          style={{ height: "100%", width: "100%", marginTop: "100px" }}
        ></Player>
    </div>
  );
};

export default ThankYou;