import React from 'react';
import styles from './nav.css';
import { PageViewsContext } from '../App';

export function Nav() {
  const context: any = React.useContext(PageViewsContext);

  return (
    <nav className={styles.nav}>
      <span className={styles.navItem}>
        Просмотрено:
        {context[
          window.location.pathname.replace('/', '') != ""
          ? window.location.pathname.replace('/', '')
          : "main"]}
      </span>
    </nav>
  );
}
