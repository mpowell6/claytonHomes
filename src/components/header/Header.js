import "./Header.css";
import Logo from "../../logo.svg";

const Header = () => {
    return (
        <div className="Header">
            <img src={Logo} alt="Clayton Logo" />
        </div>
    )
}

export default Header;