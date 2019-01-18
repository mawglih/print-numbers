import React from 'react';
import Numbers from 'components/Numbers';
import styles from './home.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Numbers />
    </div>
  )
}

export default Home;
