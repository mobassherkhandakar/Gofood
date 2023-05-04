import React from "react";
import eating from "../../../assets/117100-couple-datingcandle-light-dinner.json";
import { Player } from "@lottiefiles/react-lottie-player";

const Banner = () => {
  return (
    <>
      <div
        className="hero my-7  min-h-[calc(100vh-200px)]"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/black-stone-cooking-background-spices-vegetables-top-view-free-space-your-text_187166-3514.jpg?size=626&ext=jpg&ga=GA1.2.2134551033.1665579690&semt=ais")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-10 items-center sm:grid-cols-2 justify-evenly">
          <div >
            <Player
              autoplay
              loop
              src={eating}
              style={{ height: "100%", width: "100%" }}
            ></Player>
          </div>
          <div>
            <h1 className="text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text">
              Box Office News!
            </h1>
            <p className="py-6 text-base text-white md:text-lg">
              We believe that food is not just about sustenance, but also about
              enjoyment and bringing people together. That's why we're
              passionate about creating recipes that are not only delicious, but
              also easy to make and share with your loved ones.
            </p>
            <button className="btn-outlined">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
