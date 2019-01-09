import React, { Component } from 'react';
import cn from 'classnames';
// import without from 'lodash/without';
// import castArray from 'lodash/castArray';
import SingleCheckbox from 'components/SingleCheckbox';
import styles from './checkbox.css';

const Status = [
  { radio: 'Single', check: 'Never married' },
  { radio: 'Divorced', check: 'Widow\'er' },
  { radio: 'In a Relationship', check: 'Open' },
  { radio: 'Married', check: 'Open' },
  { radio: 'Civil Union', check: 'Open' },
  { radio: 'Domestic Partnership', check: 'Open' },
  { radio: 'Separated' },
]



class Searching extends Component {
  state = {
    checkedPrimary: false,
  }
  getStatus = index => {
    return `disabled${index}`;
  }

  handleChange2 =  (e) => {
    // e.target.checked ? castArray().concat(e.target.value)
    //   : without(castArray(), e.target.value)
    console.log(e.target.value, e.target.checked);
    this.setState({
      checkedPrimary: true,
    });
  }

  handleChange =  (e) => {
    // e.target.checked ? castArray().concat(e.target.value)
    //   : without(castArray(), e.target.value)
    console.log(e.target.value, e.target.checked);
  }
  
  render() {
    const {
      checkedPrimary,
    } = this.state;
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          {
            Status.map((el, index) => (
              <div
                key={el.radio}
              > 
                <div className={styles.checkDiv}>
                  <SingleCheckbox
                    name={el.radio}
                    onChange={e => this.handleChange(e)}
                    value={el.radio}
                    checked={checkedPrimary}
                  />
                  {el.check ? (
                    <div className={cn(
                      styles.box2,
                    )
                    }>
                      <SingleCheckbox
                        name={el.check}
                        onChange={e => this.handleChange2(e)}
                        value={el.check}
                        disabled={el.disabled}
                      />
                    </div>
                  ) :null }
                </div>
              </div>
            ))
          }
        </form>
      </div>
    );
  }
}

export default Searching;
