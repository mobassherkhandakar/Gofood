import React from "react";
import { useLoaderData } from "react-router-dom";
import ResepisDetails from "./ResepisDetails";

const ChafeDeteils = () => {
  const {
    chef_name,
    chef_picture,
    num_of_recipes,
    likes,
    years_of_experience,
    short_bio,
    recipes,
  } = useLoaderData();

  return (
    <div>
      <div className="hero mx-auto mt-14 bg-base-200">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 sm:grid-cols-2 justify-around">
          <div>
            <img
              className="w-screen h-[500px] rounded-md"
              src={chef_picture}
              alt=""
            />
          </div>
          <div className="mt-14">
            <h2 className="font-semibold">{chef_name}</h2>
            <p className="py-6 font-semibold">{short_bio}</p>
            <p className="py-3">
              <span className="font-semibold">Experience:</span>{" "}
              {years_of_experience}
            </p>
            <p className="py-3">
              <span className="font-semibold">Likes:</span> {likes}
            </p>
            <p className="py-3">
              <span className="font-semibold">Number of Recipes:</span>{" "}
              {num_of_recipes}
            </p>
          </div>
        </div>
      </div>
      <div className="my-14 my-container grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3">
        {recipes.map(rs=> <ResepisDetails recipe={rs} key={rs.id}/>)}
      </div>
    </div>
  );
};

export default ChafeDeteils;
