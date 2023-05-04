import React from "react";
import { FaHeart } from "react-icons/fa";

const ResepisDetails = ({ recipe }) => {
  // console.log(recipe);
  const { image, recipe_name, rating, ingredients, cooking_method } = recipe;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-screen h-96" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span className="font-semibold">Name:</span> {recipe_name}
          </h2>
          <p>
            <span className="font-semibold">cooking_method :</span>{" "}
            {cooking_method}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {rating}
          </p>
          <p> <span className="font-semibold">Ingredients:</span>
            {ingredients.map((el, index) => (
              <ul key={index}>
                <li>{el}</li>
              </ul>
            ))}
          </p>
          <div className="card-actions justify-start">
            <button className="my-btn flex items-center gap-2">
              Favourite <FaHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResepisDetails;
