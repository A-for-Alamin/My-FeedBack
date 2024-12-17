import React from "react";
import { useParams } from "react-router-dom";
import datas from "./lib/large_business_data.json";
import Hero from "./Details/Hero";

function Details({ type }) {
  const { id } = useParams();

  const TopRatedDatas = datas
    .filter((item) => item.businessType === "Restaurant")
    .flatMap((item) => item.company)
    .sort((a, b) => b.rating - a.rating);

  const highReviewsData = datas
    .filter((item) => item.businessType === "Restaurant")
    .flatMap((item) => item.company)
    .sort((a, b) => b.reviews.length - a.reviews.length);

  const showData =
    type === "topRated" ? TopRatedDatas[id] : highReviewsData[id];

  if (!showData) {
    return <p>Restaurant not found!</p>;
  }

  return (
    <>
      <Hero {...showData} />

      <div className="container px-5 py-10">
        <h1 className="text-3xl font-bold mb-5">{showData.name}</h1>
        <p>Rating: {showData.rating}</p>
        <p>Number of Reviews: {showData.reviews.length}</p>
        <div>
          <h2 className="text-2xl font-semibold mt-5">Reviews:</h2>
          <ul>
            {showData.reviews.map((review, index) => (
              <li key={index} className="mt-2">
                <strong>{review.name}</strong>: {review.comment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Details;
