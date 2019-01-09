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
    disabled0: true,
    disabled1: true,
    disabled2: true,
    disabled3: true,
    disabled4: true,
    disabled5: true,
  }
  getStatus = index => {
    return `disabled${index}`;
  }

  handleChange1 =  (e) => {
    // e.target.checked ? castArray().concat(e.target.value)
    //   : without(castArray(), e.target.value)
    console.log(e.target.value, e.target.checked);
    switch(e.target.value) {
      case 'Single':
        this.setState({
          disabled0: false,
        });
        break;
        case 'Divorced':
          this.setState({
            disabled1: false,
          });
          break;
        case 'In a Relationship':
          this.setState({
            disabled2: false,
          });
          break;
        case 'Married':
          this.setState({
            disabled3: false,
          });
          break;
        case 'Civil Union':
          this.setState({
            disabled4: false,
          });
        break;
        case 'Domestic Partnership':
          this.setState({
            disabled5: false,
          });
          break;
        default: return;
    }
      
  }
  handleChange =  (e) => {
    // e.target.checked ? castArray().concat(e.target.value)
    //   : without(castArray(), e.target.value)
    console.log(e.target.value, e.target.checked);
  }
  render() {
    const {
      disabled0,
      disabled1,
      disabled2,
      disabled3,
      disabled4,
      disabled5,
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
                    onChange={e => this.handleChange1(e)}
                    value={el.radio}
                  />
                  {el.check ? (
                    <div className={cn(
                      styles.box2,
                    )
                    }>
                      <SingleCheckbox
                        name={el.check}
                        onChange={e => this.handleChange(e)}
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
