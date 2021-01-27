import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 2.4rem;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <StyledContainer>
        <StyledTitle>Similar to this Product</StyledTitle>
        <div>SLIDER IMAGES CONTAINER GOES HERE</div>
      </StyledContainer>
    )
  }
};


ReactDOM.render(<App />, document.getElementById('app'));