import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledCard = styled.div`
  flex: 1 0 25%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5fr 1fr 0.5fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    "pic"
    "title"
    "pricing"
    "icons";
  width: 350px;
  margin: 1%;
`;

const CardPictureStyle = styled.div`
  display: flex;
  justify-content: center;
  grid-area: pic;
  overflow: hidden;
  background-color: #f5f5f5;
  border-style: none;
  border-radius: 1rem;
  object-fit: cover;
`;

const StyleImg = styled.img`
  max-width: auto;
`;

const CardTitleStyle = styled.div`
  grid-area: title;
  font-family: Nunito Sans;
  font-weight: bold;
  font-size: 1rem;
  padding-top: 5px;
`;

const CardPricingStyle = styled.div`
  grid-area: pricing;
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 1rem;
`;

const CardIconsStyle = styled.div`
  grid-area: icons;
  font-family: Nunito Sans;
  font-weight: 400;
  font-size: 1rem;
`;

class SliderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <>
      <StyledCard>
        <CardPictureStyle >
          <StyleImg src={this.props.image[0]} />
        </CardPictureStyle>
        <CardTitleStyle>{this.props.title}</CardTitleStyle>
        <CardPricingStyle>{this.props.inventory.price}</CardPricingStyle>
        <CardIconsStyle>icons</CardIconsStyle>
      </StyledCard>
      </>
    )
  }
};

export default SliderCard;

