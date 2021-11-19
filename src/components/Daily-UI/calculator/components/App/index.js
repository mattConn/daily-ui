import React from "react"
import Button from "../Button"
import './index.scss'

class App extends React.Component {
    state = {
        display: null,
    }

    render() {

        return (
            <div className="container">
                <div className="calculator">
                    <div className="display">
                        <p>{this.state.display}</p>
                    </div>
                    <div className="buttons">

                        <div className="row">
                            <Button label={7} />
                            <Button label={8} />
                            <Button label={9} />
                            <Button label={'/'} operator/>
                            <Button label={'>>'} operator/>
                        </div>
                        <div className="row">
                            <Button label={4} />
                            <Button label={5} />
                            <Button label={6} />
                            <Button label={'x'} operator/>
                            <Button label={'<<'} operator/>
                        </div>
                        <div className="row">
                            <Button label={1} />
                            <Button label={2} />
                            <Button label={3} />
                            <Button label={'-'} operator/>
                            <Button label={'~'} operator/>
                        </div>

                        <div className="row">
                            <Button label={0} />
                            <Button label={'.'} />
                            <Button label={'='} operator/>
                            <Button label={'+'} operator/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default App 