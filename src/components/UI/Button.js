import './Button.css';


const Button = props => {
    return (
        <button className='btn' onClick={props.show}>{props.children}</button>
    );
};

export default Button;