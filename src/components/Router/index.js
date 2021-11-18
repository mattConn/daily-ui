import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import pages from '../../pages.json'

const makeComponent = (module) => {
    const Component = module.default
    return <Component />
}

const Router = () => <BrowserRouter>
    <Routes>
        <Route path="/" element={<App pages={pages}/>} />
        {
            Object.keys(pages).map(name => (
                <Route path={`/${pages[name]}`}
                element={makeComponent(require(`../Daily-UI/${pages[name]}/components/App`))} 
                />
            ))
            
        }
    </Routes>
</BrowserRouter>

export default Router