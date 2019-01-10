import React, { Component } from 'react';
import cn from 'classnames';
// import without from 'lodash/without';
// import castArray from 'lodash/castArray';
import SingleCheckbox from 'components/SingleCheckbox';
import styles from './checkbox.css';

const Status = [
  { radio: 'Single', 
    checked: [
      { check: 'Never married' },
      { check: 'Divorced' },
      { check: 'Widow\'er' },
    ],
  },
  { radio: 'In a Relationship', checked: [{ check: 'Open' }],},
  { radio: 'Married', checked:[{ check: 'Open' }]},
  { radio: 'Civil Union', checked: [{ check: 'Open' }] },
  { radio: 'Domestic Partnership', checked: [{ check: 'Open' }] },
  { radio: 'Separated' },
];

class Searching extends Component {

  handleChange =  (e) => {
    // e.target.checked ? castArray().concat(e.target.value)
    //   : without(castArray(), e.target.value)
    console.log(e.target.value, e.target.checked);
  }
  
  render() {
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          {
            Status.map(el => (
              <div
                key={el.radio}
              > 
                <div className={styles.checkDiv}>
                  <SingleCheckbox
                    name={el.radio}
                    onChange={e => this.handleChange(e)}
                    value={el.radio}
                  />
                  {el.checked ? (
                    el.checked.map(item => (
                      <div className={cn(
                        styles.box2,
                        )
                        }
                        key={encodeURIComponent(item.check)}
                      >
                        <SingleCheckbox
                          name={item.check}
                          onChange={e => this.handleChange(e)}
                          value={item.check}
                        />
                      </div>
                    ))
                  ) : null }
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
