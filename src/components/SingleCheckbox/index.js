import React, { Fragment } from 'react';
import styles from './single.css';

export default ({
  name,
  value,
  onChange,
}) => (
    <Fragment>
      <label className={styles.container}>
        {name}
        <input
          type="checkbox"
          className={styles.checkbox}
          value={value}
          onChange={onChange}
        />
        <span
          className={styles.checkmark}
        />
      </label>
    </Fragment>
  );
