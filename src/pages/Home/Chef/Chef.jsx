import React, { useEffect, useState } from "react";
import ChafCard from "../ChafCard/ChafCard";
import Spinner from "../../../components/Spinner";


const Chef = () => {
  const [load,setLoad] = useState(true)
  const [chafe, setChafe] = useState([]);
  useEffect(() => {
    const loadPopularData = async () => {
      try {
        const json =
          "https://chef-recipe-hunter-server-side-mobassherkhandakar.vercel.app/chafe";
        const res = await fetch(json);
        const data = await res.json();
        setChafe(data);
        setLoad(false)
      } catch (error) {
        console.log(error);
      }
    };
    loadPopularData();
  }, []);
  // console.log(chafe);
  if(load){
    return <Spinner/>
  }
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
