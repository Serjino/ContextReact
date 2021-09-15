import React from 'react';
import styles from './pageheading.css';

export function PageHeading({title} : { [key : string]: string })  {
  return (
    <h1 className={styles.heading}>Встроенные типы{title}</h1>
  );
}
