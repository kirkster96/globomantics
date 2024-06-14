import styles from "./banner.module.css"

const subtitleStyle = {
    fontStyle: "italic",
fontSize: "x-large",
color: "coral",
};

// const Banner = (props) => {
const Banner = ({headerText}) => { // destructuring props increases readability
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="./honda.png" alt="honda civic" className={styles.car} />
            </div>
            <div className="col-7 mt-5" style={subtitleStyle}>
            {/* {props.headerText} */}
                {headerText}
            </div>
        </header>
    );
};

export default Banner;

export {subtitleStyle};