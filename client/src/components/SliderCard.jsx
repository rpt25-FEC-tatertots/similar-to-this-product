import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f5f5f5;
  height: auto;
  width: 200px;
  border-style: none;
  border-radius: 1rem;
  sizes: 723px;
`;

const StyledText = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 1.6rem 0;
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
        <img src="https://www.patagonia.com/dw/image/v2/BDJB_PRD/on/demandware.static/-/Sites-patagonia-master/default/dwc052f874/images/hi-res/86210_BLK_OM1.jpg?sw=800&sh=800&sfrm=png&q=95&bgcolor=f6f6f6"></img>
        <StyledText>title</StyledText>
        <StyledText>pricing info</StyledText>
        <StyledText>icons</StyledText>
      </StyledCard>
      </>
    )
  }
};

export default SliderCard;

