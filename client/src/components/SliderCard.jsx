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
        <img src={this.props.image[0]}></img>
        <StyledText>{this.props.title}</StyledText>
        <StyledText>{this.props.inventory.price}</StyledText>
        <StyledText>icons</StyledText>
      </StyledCard>
      </>
    )
  }
};

export default SliderCard;

