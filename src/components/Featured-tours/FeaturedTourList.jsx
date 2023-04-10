import React from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);
  console.log("data", featuredTours);
  console.log(featuredTours); // This line will log the value of featuredTours separately
  return (
    <>
      {loading && <h4>loading .....</h4>}
      {error && <h4>{error}</h4>}
      {featuredTours?.map((tour) => (
        <Col lg="3" className="mb-4" key={tour._id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;
