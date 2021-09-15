import React from 'react';
import styles from './description.css';

export function Description({text} : {[key : string] : string}) {
  return (
    <p className={styles.text}>{text}</p>
  );
}
