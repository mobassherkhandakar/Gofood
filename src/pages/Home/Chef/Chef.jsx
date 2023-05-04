import React, { useEffect, useState } from "react";
import ChafCard from "../ChafCard/ChafCard";

const Chef = () => {
  const [chafe, setChafe] = useState([]);
  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-side-beta.vercel.app/chafe")
      .then((res) => res.json())
      .then((data) => setChafe(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(chafe);
  return (
    <div className="my-container"> 
      <h1>This is Chef page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error tempore
        sunt officiis officia facilis architecto?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">
        {
          chafe.map(cf=> <ChafCard chafe={cf} key={cf.id}/>)
        }
      </div>
    </div>
  );
};

export default Chef;
