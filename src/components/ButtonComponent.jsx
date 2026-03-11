const ButtonComponent = ({title, styles, onclick}) => {
    return <>
        <button style={{ backgroundColor: "darkorange", fontSize: "1.5rem", color: "white", border : "none", padding: "5px", ...styles}} onClick={onclick}>{title}</button>
    </>
}
 
export default ButtonComponent;