import React, { Component } from 'react';
import styles from "./A.css";
import ReactDOM from 'react-dom';
import TodoPage from './view/Todo';

class A extends Component {
  constructor(props: any) {
    super(props)
  }

  onClickButton() {
    console.log('button clicked!');
  }

  render() {
    return (
      <div className={styles.a}>
        abcd
        <TodoPage />
      </div>
    );
  }
}

const root = document.getElementById('app');
ReactDOM.render(<A />, root);

export default A;