import React from "react";
import "./Homes.css";
import { Card } from "react-bootstrap";

var CurrencyFormatter = require("react-currency-format");

const HomeCard = (listing) => {
  return (
    <Card>
      <Card.Img
        src={listing.home.imageURL}
        alt={listing.home.homeName}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "/resources/failedLoadImage.jpg";
        }}
      />
      <Card.Body>
        <h2>{listing.home.homeName}</h2>
        <Card.Text className="card-subtitle">
          Starting in the{" "}
          <CurrencyFormatter
            value={listing.home.startingPrice}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          s
        </Card.Text>
        <Card.Text>
          {listing.home.sqft} sq. ft {listing.home.beds} beds{" "}
          {listing.home.baths} baths{" "}
          {listing.home.isMultiSection ? "Multi Section" : ""}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HomeCard;
