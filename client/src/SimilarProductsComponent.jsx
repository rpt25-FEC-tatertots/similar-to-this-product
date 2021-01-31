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

const SimilarProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SliderContainer = styled.div`
  display: flex;
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
      carouselContent: []
    }
  }

  componentDidMount() {
    axios.get(`/similar?product_id=${2}`)
      .then(response => {
        console.log('RESPONSE FROM SERVER ON THE CLIENT: ', response.data)
        this.setState({carouselContent: response.data})
      })
      .catch(err => {
        console.log('ERROR ON THE CLIENT AFTER GET REQUEST: ', err)
      })
  }

  render() {
    const cards = this.state.carouselContent.map((product, index) => {
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
    return (
      <SimilarProductsContainer>
        <StyledTitle>Similar to this Product</StyledTitle>
        <SliderContainer>
          <SliderButton>{'<'}</SliderButton>
          {cards}
          <SliderButton>{'>'}</SliderButton>
        </SliderContainer>
      </SimilarProductsContainer>
    )
  }
};


ReactDOM.render(<SimilarProductsComponent />, document.getElementById('similar'));