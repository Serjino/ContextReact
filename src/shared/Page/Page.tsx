import React, { useState } from 'react';
import { PageViewsContext } from '../App';
import { Description } from '../Description';
import { PageHeading } from '../PageHeading';
import styles from './page.css';

 

export function Page({title, text} : any) {

  let context : any = React.useContext(PageViewsContext)

  React.useEffect(()=> {
    let cleanTitle = String(title.replace('/', '').toLowerCase());
    context.increaseViews(cleanTitle);
  }, [])

  return (
    
      <div>
        <PageHeading title={title} />
        <Description text={text}/>
      </div>
    
  );
}
function increaseViews() {
  throw new Error('Function not implemented.');
}

