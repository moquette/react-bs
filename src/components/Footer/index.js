import React from 'react';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        React &bull; Bootstrap &bull; SASS &amp; eXtras
        <br />
        Edit <code>src/components/App.js</code> and save to reload
        <br />
        RBSX 1.0.0 &bull; &copy;{new Date().getFullYear()} Powered by Dovebox
      </p>
    </footer>
  );
};

export default Footer;
