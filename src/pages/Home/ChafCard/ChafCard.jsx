import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChafCard = ({ chafe }) => {
  const {chef_name,chef_picture,num_of_recipes,likes,years_of_experience,id} = chafe;
  // console.log(chafe);
  // console.log(chef_picture);
  return (
    <div className="mx-auto">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
        <LazyLoadImage
            src={chef_picture}
            effect="blur"
            className="w-screen h-96 rounded-md"
            alt="Image Alt"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef_name}</h2>
          <p><span className="font-semibold">Experience:</span> {years_of_experience}</p>
          <p><span className="font-semibold">Likes:</span> {likes}</p>
          <p><span className="font-semibold">Number of Recipes:</span> {num_of_recipes}</p>
          <div className="card-actions justify-start">
            <Link to={`chafe/${id}`}><button className="btn btn-primary">Viwe Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChafCard;
