import React from 'react';
import CheckBox from 'components/CheckBox';
import SingleCheckbox from 'components/SingleCheckbox';
import styles from './home.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <CheckBox />
      <hr />
      <div className={styles.single}>
        <SingleCheckbox />
      </div>
    </div>
  )
}

export default Home;
