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
    if (sortOption === "lowToHigh") {
      sortedList = this.state.homeListings.sort((a, b) => {
        return a.startingPrice - b.startingPrice;
      });
    } else if (sortOption === "highToLow") {
      sortedList = this.state.homeListings.sort((a, b) => {
        return b.startingPrice - a.startingPrice;
      });
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
        <p>{listings.length} homes available</p>
        <form>
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
