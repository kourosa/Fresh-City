import React, { Component } from "react";
import Menu from "../components/menu/Menu.jsx";
import Footer from "../components/menu/Footer.jsx";
import Cards from "../components/homepage/Cards.jsx";
import axios from "axios";
import "../style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "All Deals",
      subcategory: "",
      link: ""
    };
  }

  static async getInitialProps() {
    const res = await axios.get("http://localhost/Backend/API/getallitems.php");
    return { items: res.data.items };
  }

  render() {
    return (
      <div>
        <Menu link={this.state.link} />
        <Cards
          items={this.props.items}
          category={this.state.category}
          subcategory={this.state.subcategory}
          link={this.state.link}
          history={this.props.history}
        />
        <Footer />
      </div>
    );
  }

  handleChange = category => {
    let categories = [
      "All Deals",
      "Beauty and Spas",
      "Health and Fitness",
      "All Deals"
    ];
    if (categories.includes(category)) {
      this.setState({ category: category, subcategory: "" });
    } else {
      this.setState({ subcategory: category }, () => {
        console.log(
          "category:",
          this.state.category,
          "subcategory:",
          this.state.subcategory
        );
      });
    }
  };
}

export default Home;
