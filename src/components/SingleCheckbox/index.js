import React, { Fragment } from 'react';
import styles from './single.css';

export default ({
  name,
  value,
  onChange,
  disabled,
}) => (
    <Fragment>
      <label className={styles.container}>
        {name}
        <input
          type="checkbox"
          className={styles.checkbox}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        <span
          className={styles.checkmark}
        />
      </label>
    </Fragment>
  );
