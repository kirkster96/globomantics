import Banner, { subtitleStyle } from "./banner"

const Trouble = ({children}) => {
    return (
        <div className="col-7 mt-5" style={subtitleStyle}>
        {children}
        </div>
    )
}

export default Trouble;