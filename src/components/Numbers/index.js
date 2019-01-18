import React, { Component, Fragment } from 'react';
import styles from './numbers.css';

const Result = ({
  result,
  number,
}) => (
  <Fragment>
    <p>
      {`The number '${number}' is ${result};`}
    </p>
  </Fragment>
);

class Searching extends Component {
  state = {
    result: [],
  };

  handleClick = (e) => {
    this.handleChange();
  }

  handleChange =  () => {
    const ODD = 'odd';
    const EVEN = 'even';
    const DIV3 = 'divisible by three';
    const DIV23 = 'divisible by two and three';
    const resArray = [];
    for(let i = 1; i <= 100; i++) {
      let a = i % 2 === 0;
      let b = i % 3 === 0;
      let result = a ? b ? DIV23 : EVEN : b ? DIV3 : ODD;
      resArray.push(result);
    }
    this.setState({
      result: resArray,
    })
  }
  
  render() {
    const {
      result,
    } = this.state;
    return (
      <div className={styles.container}>
        <button
          className={styles.button}
          type="button"
          onClick={this.handleClick}
        >
          Click me!
        </button>
        <div className={styles.result}>
          {
            result.map((el, index) => (
              <Result
                key={index}
                number={index + 1}
                result={el}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Searching;
