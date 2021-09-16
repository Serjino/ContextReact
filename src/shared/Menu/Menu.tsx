import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageViewsContext } from '../App';
import styles from './menu.css';

export function Menu() {

  let context : any = React.useContext(PageViewsContext)

  React.useEffect(()=> {
    context.increaseViews("main");
    // console.log(cleanTitle, context)
  }, [])

  return (
        <ul>
          <li>
            <Link to="/array">Array</Link>
          </li>
          <li>
            <Link to="/set">Set</Link>
          </li>
          <li>
            <Link to="/json">JSON</Link>
          </li>
          <li>
            <Link to="/object">Object</Link>
          </li>
        </ul>
  );
}
