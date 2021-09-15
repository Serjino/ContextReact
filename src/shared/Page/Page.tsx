import React, { useState } from 'react';
import { Description } from '../Description';
import { PageHeading } from '../PageHeading';
import styles from './page.css';
// export let ViewQtyContext = React.createContext({})

export function Page({title, text} : any) {


  return (
    
      <div>
        <PageHeading title={title}/>
        <Description text={text}/>
      </div>
    
  );
}
