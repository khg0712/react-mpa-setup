import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class B extends Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <div>
        I Am B
      </div>
    );
  }
}

const root = document.getElementById('app');
ReactDOM.render(<B />, root);

export default B;