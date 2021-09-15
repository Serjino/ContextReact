import React from 'react';
import styles from './nav.css';

export function Nav({ countValue } : {[key : string] : number | string}) {
  return (
    <nav className={styles.nav}>
      <span className={styles.navItem}>
        Просмотрено: {countValue}
      </span>
    </nav>
  );
}
