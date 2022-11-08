const Demo = props => {
    return (
        <div>
        {props.toggle && <p>I must be positioned here</p>}
        </div>
    );
}

export default Demo;