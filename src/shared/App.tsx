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
export const PageViewsContext = React.createContext({})

export function App() {

    let viewCountStorage = localStorage.getItem('views')

    const [views, setViews] = useState(
        viewCountStorage != null ?
            JSON.parse(viewCountStorage)
            : {
                main: 0,
                array: 0,
                json: 0,
                object: 0,
                set: 0,
            });

    let dataBase = localStorage.setItem('views', JSON.stringify(views))

    function increaseViews(page: keyof typeof views) {
        setViews((views: { [x: string]: number; }) => {
            if (typeof page != 'symbol') {
            return {
                ...views,
                [page]: views[page] + 1
            }
        }
        });
    }

    let pages = globals.text.map(page => {
        return (
            <Route key={page.title} path={"/" + page.title}>
                <Page title={"/" + page.title} text={page.text} />
            </Route>
        )
    });

    return (

        <div>
            <PageViewsContext.Provider value={{
                ...views,
                increaseViews: increaseViews,
            }}>
                <Nav />
                <div className={styles.page}>

                    <Switch >
                        {pages}
                        <Route path="/">
                            <PageHeading title="" />
                            <Menu />
                        </Route>
                    </Switch>

                </div>
            </PageViewsContext.Provider>
        </div >
    );
}


