import { TfiAngleDoubleLeft } from "react-icons/tfi";
import "./Footer.css";
const Footer = () => {
    let top = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="footer">
            <footer>
                <div className="main">
                    <div className="footer-1">
                        <div className="location">
                            <span>
                                Plot 392 Trans Amadi Industrial Layout <br />{" "}
                                Port Harcourt, Rivers State, Nigeria.
                            </span>
                        </div>
                        <div className="phone">
                            <a href="tel: +234(0)456789">+2341111111111</a>
                        </div>
                        <div className="mail">
                            <a href="mailto:XXXXX">info@nanohertz.com</a>
                        </div>
                        <div className="socials">
                            <a href="XXXXX">LinkedIn:Nanohertz</a>
                        </div>
                    </div>

                    <div className="footer-3">
                        <div className="top" onClick={top}>
                            <TfiAngleDoubleLeft />
                            <span>Back To Top</span>
                        </div>
                    </div>
                </div>
                <div className="final-footer">
                    <div className="copy">Copyright © NanoHertz 2023 </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
