import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  render() {
    var categoryData = [];
    var filteredData = [];
    var items = this.props.items;

    if (this.props.category !== "All Deals")
      categoryData = items.filter(i => i.category === this.props.category);
    else categoryData = items;

    if (this.props.subcategory) {
      let tobefilterditems = categoryData;

      if (this.props.subcategory === "Price") {
        filteredData = []
          .concat(categoryData)
          .sort((a, b) => a.dprice - b.dprice)
          .map((item, i) => {
            return item;
          });
      } else if (this.props.subcategory === "Discount") {
        filteredData = []
          .concat(categoryData)
          .sort((a, b) => b.discount - a.discount)
          .map((item, i) => {
            return item;
          });
      } else if (this.props.subcategory === "NewDeals") {
        filteredData = categoryData;
      } else if (this.props.subcategory === "Featured") {
        filteredData = []
          .concat(categoryData)
          .sort((a, b) => b.discount - a.discount)
          .map((item, i) => {
            return item;
          });
      } else {
        filteredData = tobefilterditems.filter(
          i => i.subcategory === this.props.subcategory
        );
      }
    } else filteredData = categoryData;

    return (
      <div
        className="row"
        onScroll={() => {
          this.handleScroll();
        }}
      >
        {filteredData.map(function(item, index) {
          return (
            <Card
              key={index}
              id={item.companyid}
              compnay={item.company}
              imageurl={item.imageurl}
              description={item.description}
              price={item.price}
              dprice={item.dprice}
            />
          );
        })}
      </div>
    );
  }

  handleScroll = e => {
    //let bottom = e.target;
    //bottom = window.scrollY;
    // bottom = document.documentElement.scrollHeight;
  };

  compare(a, b) {
    const genreA = a.genre.toUpperCase();
    const genreB = b.genre.toUpperCase();
    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
  }
}
export default Cards;
