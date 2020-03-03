import React, { Component } from "react";
import Link from "next/link";

class Card extends Component {
  render() {
    //let url="/item?company"+this.props.id;
    return (
      <div className="col-4 col-s-4">
        <div className="card">
          <Link href="/item?company=191">
            <a>
              <div>
                <div className="imagediv">
                  <img
                    src={this.props.imageurl}
                    alt={this.props.id}
                    width="100%"
                    height="auto"
                  />
                </div>
                <div className="textdiv">
                  <span className="discount-block">
                    {Math.floor(
                      ((this.props.price - this.props.dprice) /
                        this.props.price) *
                        100
                    )}
                    %
                  </span>
                  <h2>{this.props.compnay} </h2>
                  <p>{this.props.description}</p>
                </div>

                <p>
                  <span className="carddprice">
                    {this.props.dprice} <i className=" icon-tenge" />
                  </span>
                  <span className="cardprice">
                    {this.props.price} <i className=" icon-tenge" />
                  </span>
                </p>
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
  }
}
export default Card;
