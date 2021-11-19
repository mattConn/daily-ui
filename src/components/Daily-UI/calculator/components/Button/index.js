import './index.scss'
const Button = (props)=> <div className={`button ${props.operator ? 'operator' : null}`} onClick={props.clickHandler}>
    <p>{props.label}</p>
</div>

export default Button