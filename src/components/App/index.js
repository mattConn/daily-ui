import React from "react";
import './index.scss'

const App = (props) => {
    return <div className="app">
        <h1>Daily UI</h1>
        <p>Some Daily UI challenges I've worked on. <a href="https://github.com/mattConn/daily-ui">Source</a></p>
        {Object.keys(props.pages).map((name,i) => <p>{i+1}. <a href={props.pages[name]}>{props.pages[name]}</a></p>)}
    </div>
}

export default App