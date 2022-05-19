import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../Cards/Card";
import "../WorkSlider/Slide.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            <Card
              image="url(../../assets/work-card-image-02.png)"
              title="Work Title"
              detail="detail of this work"
              problem="Problem the client had"
              solution="solution that I found out"
            />
          </div>
          <div>
            <Card
              image="url(../../assets/work-card-image-02.png)"
              title="Work Title"
              detail="detail of this work"
              problem="Problem the client had"
              solution="solution that I found out"
            />
          </div>
          <div>
            <Card
              image="url(../../assets/work-card-image-02.png)"
              title="Work Title"
              detail="detail of this work"
              problem="Problem the client had"
              solution="solution that I found out"
            />
          </div>
          <div>
            <Card
              image="url(../../assets/work-card-image-02.png)"
              title="Work Title"
              detail="detail of this work"
              problem="Problem the client had"
              solution="solution that I found out"
            />
          </div>
          <div>
            <Card
              image="url(../../assets/work-card-image-02.png)"
              title="Work Title"
              detail="detail of this work"
              problem="Problem the client had"
              solution="solution that I found out"
            />
          </div>
          <div>
            <Card
              image="url(../../assets/work-card-image-02.png)"
              title="Work Title"
              detail="detail of this work"
              problem="Problem the client had"
              solution="solution that I found out"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
