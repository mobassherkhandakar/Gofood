import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero mt-7  min-h-[calc(100vh-200px)]"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/spices-herbs-dark-stone-background_103326-1816.jpg?size=626&ext=jpg&ga=GA1.1.2134551033.1665579690&semt=ais")`,
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text">Hello there</h1>
            <p className="mb-5 ">
              We believe that food is not just about sustenance, but also about
              enjoyment and bringing people together. That's why we're
              passionate about creating recipes that are not only delicious, but
              also easy to make and share with your loved ones.
            </p>
            <button className="btn-outlined">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
