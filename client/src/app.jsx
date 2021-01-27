import React from 'react';
import ReactDOM from 'react-dom';
import SliderCard from './components/SliderCard.jsx';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 2.4rem;
`;

const ParentContainer = styled.div`
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <ParentContainer>
        <StyledTitle>Similar to this Product</StyledTitle>
        <SliderContainer>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
          <SliderCard/>
        </SliderContainer>
      </ParentContainer>
    )
  }
};


ReactDOM.render(<App />, document.getElementById('app'));