import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledCard = styled.div`
  flex: 1 1 25%;
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
  width: 100%;
  :hover {
    transform: scale(1.1)
  }
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

const StyledCardLink = styled.a`
  color: black;
  text-decoration: none;
`;

const StyledSmallIconSVG = styled.svg`
  fill: black;
`;

const StyledNumOfColors = styled.div`
  color: lightgrey;
  font-size: 12px;
`;

class SliderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { image, title, inventory, product_id, icons } = this.props;
    const numberOfColors = Object.keys(inventory.colors).length;
    const displayIcons = icons.map((icon, index) => {
      return (
        <StyledSmallIconSVG
          key={index}
          width="15"
          heigth="15"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path d={icon.icon_svg}/>
        </StyledSmallIconSVG>
      )
    });

    return (
      <>
        <StyledCard>
          <StyledCardLink href={`/${product_id}`}>
          <CardPictureStyle >
            <StyleImg src={image.mainImages[0]} />
          </CardPictureStyle>
          <CardTitleStyle>
            {title}
          </CardTitleStyle>
          <CardPricingStyle>
            {'$'}{inventory.price}
          </CardPricingStyle>
          <CardIconsStyle>
            {displayIcons}
            <StyledNumOfColors>
              {numberOfColors} colors
            </StyledNumOfColors>
          </CardIconsStyle>
          </StyledCardLink>
        </StyledCard>
      </>
    )
  }
};

export default SliderCard;

