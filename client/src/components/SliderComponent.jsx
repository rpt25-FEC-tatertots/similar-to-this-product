import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: grey;
  height: 100px;
  width: auto;
`;

class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <>
        <StyledCard></StyledCard>
        <StyledCard></StyledCard>
        <StyledCard></StyledCard>
        <StyledCard></StyledCard>
        <StyledCard></StyledCard>
      </>
    )
  }
};

export default SliderComponent;
