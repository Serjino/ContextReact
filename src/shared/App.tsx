import * as React from 'react';
import { useState } from 'react';
import "./bootstrap-grid.min.global.css";
import "./main.global.css";
import styles from "./app.css";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import { Page } from './Page';
import { Menu } from './Menu';
import globals from '../../globals';
import { Nav } from './Nav';
import { PageHeading } from './PageHeading';
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

export function App() {


    let pages = globals.text.map(page => {
        return (
            <Route key={page.title} path={"/" + page.title}>
                <Page title={"/" + page.title} text={page.text} />
            </Route>
        )
    });

    return (
        <div>
                <div className={styles.page}>

                    {/* <Router history={customHistory}> */}
                    <Switch >
                        {pages}
                        <Route path="/">
                            <PageHeading title="" />
                            <Menu />
                        </Route>
                    </Switch>
                    {/* </Router> */}
                </div>
        </div >
    );
}


