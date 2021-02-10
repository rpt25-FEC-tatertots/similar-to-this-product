import React from 'react';
import ReactDOM from 'react-dom';
import SliderCard from './components/SliderCard.jsx';
import styled from 'styled-components';
import axios from 'axios';

const StyledTitle = styled.h2`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 2.4rem;
  padding-left: 4rem;
`;

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  background-color: transparent;
  position: relative;
  max-height: 500px;
`;

const LeftButton = styled.button`
  border-style: none;
  border-color: transparent;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 1.2rem;
  align-self: center;
  position: absolute;
  left: 10px;
  z-index: 10;
  box-shadow: 0px 10px 15px #888888;
  height: 50px;
  width: 50px;
`;

const RightButton = styled.button`
  border-style: none;
  border-color: transparent;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 1.2rem;
  align-self: center;
  position: absolute;
  right: 10px;
  z-index: 10;
  box-shadow: 0px 10px 15px #888888;
  height: 50px;
  width: 50px;
  padding: 0px;
`;

class SimilarProductsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselContent: [],
      startingIndex: 0
    }
    this.leftButtonClick = this.leftButtonClick.bind(this);
    this.rightButtonClick = this.rightButtonClick.bind(this);
  }

  leftButtonClick() {
    this.setState({startingIndex: this.state.startingIndex-1})
  }

  rightButtonClick() {
    this.setState({startingIndex: this.state.startingIndex+1})
  }

  componentDidMount() {
    const id = window.location.pathname;
    axios.get(`/similar${id}`)
      .then(response => {
        console.log('RESPONSE FROM SERVER ON THE CLIENT: ', response.data)
        this.setState({carouselContent: response.data})
      })
      .catch(err => {
        console.log('ERROR ON THE CLIENT AFTER GET REQUEST: ', err)
      })
  }

  render() {
    const {carouselContent, startingIndex} = this.state;
    let scrollLeftButton;
    let scrollRightButton;
    const sliceOfContent = carouselContent.slice(startingIndex, startingIndex+4)
    const cards = sliceOfContent.map((product, index) => {
      const {mockImageData, mockInventoryData, mockTitleData, product_id} = product
      return (
        <SliderCard
          key={index}
          productID={product_id}
          image={mockImageData.main_images}
          title={mockTitleData.title}
          inventory={mockInventoryData}
        />
      )
    })

    if(startingIndex > 0) {
      scrollLeftButton = <LeftButton onClick={this.leftButtonClick}>{'<'}</LeftButton>
    }

    if((startingIndex+4) < carouselContent.length) {
      scrollRightButton = <RightButton onClick={this.rightButtonClick}>{'>'}</RightButton>
    }



    return (
      <div>
        <StyledTitle>Similar to this Product</StyledTitle>
        <SliderContainer>
          {scrollLeftButton}
          {cards}
          {scrollRightButton}
        </SliderContainer>
        </div>
    )
  }
};


ReactDOM.render(<SimilarProductsComponent />, document.getElementById('similar'));