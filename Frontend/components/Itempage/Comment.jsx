import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import { NotificationManager } from "react-notifications";
import axios from "axios";
import API from "../../API.js";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: "",
      rate: 0
    };
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.API = new API();
  }

  componentDidMount() {
    let body = JSON.stringify({
      companyid: 191
    });
    axios
      .post("http://localhost/Backend/API/getcompanycomment.php", body)
      .then(res => {
        if (res.data.message === "Successful")
          this.setState({ comments: res.data.comments });
      });
  }

  render() {
    return (
      <div>
        <div className="reviews">
          {this.state.comments.map(function(item, index) {
            return (
              <div className="reviewscard" key={index.toString()}>
                <ul key={index.toString()}>
                  <li>
                    <i className="icon-user" key={"us"} />
                    {this.capitalizeFirstLetter(item.username)}
                  </li>
                  <li>
                    <i className="icon-calendar" key={"dad"} />
                    {item.date.slice(0, 10)}
                  </li>
                  <li>
                    <i className="icon-clock" key={"da"} />
                    {item.date.slice(10, 20)}
                  </li>
                  <StarRatings
                    rating={Number(item.rate)}
                    starDimension="15px"
                    starSpacing="1px"
                    starRatedColor="#ffc120"
                    numberOfStars={10}
                  />
                </ul>
                <p key={"co"}>{item.comment}</p>
              </div>
            );
          }, this)}

          <div className="reviewscard">
            <p>
              <b>Оставьте Ваш комментарий :</b>
            </p>
            <textarea
              value={this.state.comment}
              onChange={this.handleCommentChange}
            />
            <div className="reviewscard">
              <StarRatings
                rating={this.state.rate}
                starDimension="15px"
                starSpacing="1px"
                starRatedColor="#ffc120"
                changeRating={this.changeRating}
                numberOfStars={10}
                name="rate"
              />
              <button type="button" onClick={this.handleAddComment}>
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  changeRating(newRate, name) {
    this.setState({
      rate: newRate
    });
  }

  handleCommentChange(event) {
    this.setState({ comment: event.target.value });
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  handleAddComment() {
    let token = localStorage.getItem("jwt");
    //should validate
    if (!token) {
      NotificationManager.info("Login to your acount to add comment!");
    } else if (this.state.comment.length < 10) {
      NotificationManager.info("Too Short Comment!");
    } else if (this.state.rate === 0) {
      NotificationManager.info("Rate the company to add comment");
    } else {
      let profile = this.props.userprofile;
      if (profile.type === "0") {
        let comment = {};
        comment.companyid = this.props.companyid;
        comment.username = profile.username;
        comment.comment = this.state.comment;
        comment.rate = this.state.rate;
        this.API.addComment(comment).then(res => {
          if (res.message === "comment saved") {
            let comments = [...this.state.comments];
            comments.push({
              companyid: this.props.companyid,
              username: profile.username,
              comment: this.state.comment,
              rate: this.state.rate,
              date: new Date()
                .toJSON()
                .slice(0, 19)
                .replace("T", " ")
            });
            this.setState({ comments, rate: 0, comment: "" }, () => {
              NotificationManager.info("comment added");
            });
          }
        });
      } else {
        NotificationManager.info("Sign in with a client account");
      }
    }
  }
}

export default Comment;
