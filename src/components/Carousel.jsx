import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// implement the class below
class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: 0
    };
  }

  goToPrevSlide = () => {
    const { currentImageIndex } = this.state;
    let newImageIndex = currentImageIndex - 1;
    if (newImageIndex < 0) {
      newImageIndex = images.length - 1; 
        }
    this.setState({ currentImageIndex: newImageIndex });
  };
  

  goToNextSlide = () => {
    const { currentImageIndex } = this.state;
    let newImageIndex = currentImageIndex + 1;
    if (newImageIndex >= images.length) {
      newImageIndex = 0; 
    }
    this.setState({ currentImageIndex: newImageIndex });
  };
  

  render() {
    const { currentImageIndex } = this.state;
    const { title, subtitle, img } = images[currentImageIndex];
    
    return (
      <div className="carousel">
        <div className="image-container">
          <img src={img} alt={title} />
          <div className="caption">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="arrow-buttons">
          <button onClick={this.goToPrevSlide}>
            <ArrowBackIosIcon />
          </button>
          <button onClick={this.goToNextSlide}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
