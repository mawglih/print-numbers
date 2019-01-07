import React from 'react';
import cn from 'classnames';
import styles from './checkbox.css';

const CheckBox = ({
  input: {
    onChange,
    value,
    name,
  }
}) => {
  return (
    <label
      className={cn(
        styles.hiddenInputLabel,
        styles.checkBoxNameLabel,
      )}
    >
      <input
        type="checkbox"
        className={cn(
          styles.hiddenInput,
          styles.checkbox,
        )}
        name={name}
        onChange={wrapOnChange(onChange, value)}
        value={value}
      />
    </label>
  )
}

export default CheckBox;
