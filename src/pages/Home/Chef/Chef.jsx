import React, { useEffect, useState } from "react";
import ChafCard from "../ChafCard/ChafCard";

const Chef = () => {
  const [chafe, setChafe] = useState([]);
  useEffect(() => {
    fetch(
      "https://chef-recipe-hunter-server-side-mobassherkhandakar.vercel.app/chafe"
    )
      .then((res) => res.json())
      .then((data) => setChafe(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(chafe);
  return (
    <div className="my-container">
      <h1 className="text-center font-bold text-4xl my-6">Our Chafe</h1>
      <p className="text-center text-gray-500 font-semibold">
        If you're a foodie at heart, you've come to the right place. Our website
        is a haven for all things culinary, from mouthwatering recipes to
        cooking tips and tricks, and everything in between.
      </p>
      <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">
        {chafe.map((cf) => (
          <ChafCard chafe={cf} key={cf.id} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
