import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledTitle = styled.span`
  font-family: Nunito Sans;
  font-weight: 700;
  font-size: 2.4rem;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <StyledTitle>Similar to this Product</StyledTitle>
    )
  }
};


ReactDOM.render(<App />, document.getElementById('app'));