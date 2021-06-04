import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Homes.css";
import HomeCard from "./HomeCard";
import listings from "../../data/Listings";

class Homes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeListings: listings,
      counter: 9,
      hidden: false,
    };
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
    this.sortListings = this.sortListings.bind(this);
  }

  handleLoadMoreClick() {
    let numListings = this.state.counter + 3;
    if (numListings < this.state.homeListings.length) {
      this.setState({
        counter: numListings,
      });
    } else {
      this.setState({
        counter: numListings,
        hidden: true,
      });
    }
  }

  sortListings(sortOption) {
    let sortedList;
    switch (sortOption) {
      case "lowToHigh":
        sortedList = this.state.homeListings.sort((a, b) => {
          return a.startingPrice - b.startingPrice;
        });
        break;
      case "highToLow":
        sortedList = this.state.homeListings.sort((a, b) => {
          return b.startingPrice - a.startingPrice;
        });
        break;
      default:
        sortedList = this.state.homeListings;
    }
    this.setState({
      homeListings: sortedList,
    });
  }

  render() {
    const showButton = this.state.hidden;
    let button;
    if (!showButton) {
      button = <Button onClick={this.handleLoadMoreClick}>Load More</Button>;
    } else {
      button = <strong>Check back later for more homes!</strong>;
    }

    return (
      <div className="Listings">
        <Container className="sort" fluid>
          <p className="listingAvailable">{listings.length} homes available</p>
          <form className="sortForm">
            <label>SORT BY</label>
            <select onChange={(val) => this.sortListings(val.target.value)}>
              <option value="default"></option>
              <option value="lowToHigh" onChange={this.sortLowToHigh}>
                Price: Low to High
              </option>
              <option value="highToLow" onChange={this.sortHighToLow}>
                Price: High to Low
              </option>
            </select>
          </form>
        </Container>
        <Container className="listingsContainer" fluid>
          {this.state.homeListings.map((listing, index) => {
            if (index < this.state.counter) {
              return <HomeCard home={listing} key={index} />;
            }
            return null;
          })}
        </Container>
        <div className="loadMore">{button}</div>
      </div>
    );
  }
}

export default Homes;
