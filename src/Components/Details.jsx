import React from "react";
import { useParams } from "react-router-dom";
import datas from "./lib/large_business_data.json";
import Hero from "./Details/Hero";
import Discover from "./Details/Discover";
import Reviews from "./Details/Reviews";
import Recent from "./Home/Recent";
import MoreInfo from "./Details/MoreInfo";
import Overall from "./Details/Overall";

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
      <div className="container font-semibold py-4">Home / Bellaitalian</div>
      <Hero {...showData} />
      <Discover />
      <MoreInfo />
      <Overall />
      <Reviews />
      <Recent props="Also discover..." />
    </>
  );
}

export default Details;
