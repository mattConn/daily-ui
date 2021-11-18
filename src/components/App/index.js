import React from "react";
import './index.scss'
import pages from '../../pages.json'

const App = () => {
    return <div className="app">
        <h1>Daily UI</h1>
        <p>Some Daily UI challenges I've worked on. <a href="https://github.com/mattConn/daily-ui">Source</a></p>
        {Object.keys(pages).map((page,i) => <p>{i+1}. <a href={pages[page].route}>{pages[page].name}</a></p>)}
    </div>
}

export default App