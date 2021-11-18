import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import pages from '../../pages.json'

const makeComponent = (module) => {
    const Component = module.default
    return <Component />
}

const Router = () => <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        {
            Object.keys(pages).map(page => (
                <Route path={`/${pages[page].route}`}
                element={makeComponent(require(`../Daily-UI/${pages[page].route}/components/App`))} 
                />
            ))
            
        }
    </Routes>
</BrowserRouter>

export default Router