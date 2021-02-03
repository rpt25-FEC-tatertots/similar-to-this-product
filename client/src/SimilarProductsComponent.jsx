import React from 'react';
import ReactDOM from 'react-dom';
import SliderCard from './components/SliderCard.jsx';
import styled from 'styled-components';
import axios from 'axios';

const StyledTitle = styled.h2`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 2.4rem;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 4rem;
  padding-right: 4rem;
  background-color: transparent;
  position: relative;
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 1.2rem;
  height: auto;
`;

const SliderButton = styled.button`
  border-style: normal;
  border-color: black;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 1.2rem;
  align-items: center;
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
      const {mockImageData, mockInventoryData, mockTitleData} = product
      return (
        <SliderCard
        key={index}
        image={mockImageData.main_images}
        title={mockTitleData.title}
        inventory={mockInventoryData}
        />
      )
    })

    if(startingIndex > 0) {
      scrollLeftButton = <SliderButton onClick={this.leftButtonClick}>{'<'}</SliderButton>
    }

    if((startingIndex+4) < carouselContent.length) {
      scrollRightButton = <SliderButton onClick={this.rightButtonClick}>{'>'}</SliderButton>
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